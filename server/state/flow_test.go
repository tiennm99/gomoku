package state

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/protocol"
)

// End-to-end flow tests that drive the state machine through realistic user
// journeys. These catch bugs that unit tests on individual states miss — in
// particular ghosted rooms left behind after a leave, and broken rematch
// synchronisation between two player goroutines.

// runState invokes a state's Next on the player and returns (nextID, err).
// Used where callers need to drive the machine one step at a time.
func runState(id consts.StateID, p *lobby.Player) (consts.StateID, error) {
	s, ok := registry[id]
	if !ok {
		return 0, ErrClientExit
	}
	return s.Next(p)
}

// TestFlow_HomeCreateLeaveCreate_OneRoomVisible simulates the exact reported
// bug: from home, create a PVP room, leave it from waiting state, create
// another, then assert lobby.GetAllRooms returns only the second room.
// If a "ghost" room is left behind anywhere in the state machine this fails.
func TestFlow_HomeCreateLeaveCreate_OneRoomVisible(t *testing.T) {
	alice := makeRegisteredPlayer(t, "alice")

	// home → create room 1 → waiting
	alice.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}},
	}
	next, err := runState(consts.StateHome, alice)
	if err != nil {
		t.Fatalf("home create: %v", err)
	}
	if next != consts.StateWaiting {
		t.Fatalf("expected StateWaiting, got %d", next)
	}

	// waiting → client exit → home (room 1 should be deleted)
	alice.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	next, err = runState(consts.StateWaiting, alice)
	if err != nil {
		t.Fatalf("waiting exit: %v", err)
	}
	if next != consts.StateHome {
		t.Fatalf("expected StateHome after exit, got %d", next)
	}

	// Critical check: after leaving, the store should contain 0 rooms.
	rooms := lobby.GetAllRooms()
	if len(rooms) != 0 {
		ids := make([]int64, 0, len(rooms))
		for _, r := range rooms {
			ids = append(ids, r.ID)
		}
		t.Fatalf("after leave: expected 0 rooms, got %d: %v", len(rooms), ids)
	}

	// home → create room 2 → waiting
	alice.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}},
	}
	next, err = runState(consts.StateHome, alice)
	if err != nil {
		t.Fatalf("home create 2: %v", err)
	}
	if next != consts.StateWaiting {
		t.Fatalf("expected StateWaiting, got %d", next)
	}

	// GetRooms must return exactly 1 room (the fresh room 2).
	rooms = lobby.GetAllRooms()
	if len(rooms) != 1 {
		ids := make([]int64, 0, len(rooms))
		for _, r := range rooms {
			ids = append(ids, r.ID)
		}
		t.Fatalf("expected 1 room after second create, got %d: %v", len(rooms), ids)
	}
}

// TestFlow_RoomListReflectsCreateLeaveCycle verifies that after drive the
// state machine through create→leave→create, a follow-up GetAllRooms returns
// exactly the one currently-active room. Directly targets Bug 2.
func TestFlow_RoomListReflectsCreateLeaveCycle(t *testing.T) {
	alice := makeRegisteredPlayer(t, "alice")

	// Baseline.
	if n := len(lobby.GetAllRooms()); n != 0 {
		t.Fatalf("precondition: store should be empty, got %d rooms", n)
	}

	// Create → 1 room.
	alice.CmdCh <- &protocol.Request{Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}}}
	if _, err := runState(consts.StateHome, alice); err != nil {
		t.Fatalf("home create: %v", err)
	}
	if n := len(lobby.GetAllRooms()); n != 1 {
		t.Fatalf("after create 1: expected 1 room, got %d", n)
	}

	// Leave → 0 rooms.
	alice.CmdCh <- &protocol.Request{Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}}}
	if _, err := runState(consts.StateWaiting, alice); err != nil {
		t.Fatalf("waiting exit: %v", err)
	}
	if n := len(lobby.GetAllRooms()); n != 0 {
		t.Fatalf("after leave: expected 0 rooms, got %d", n)
	}

	// Create again → 1 room (not 2).
	alice.CmdCh <- &protocol.Request{Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}}}
	if _, err := runState(consts.StateHome, alice); err != nil {
		t.Fatalf("home create 2: %v", err)
	}
	if n := len(lobby.GetAllRooms()); n != 1 {
		t.Fatalf("after create 2: expected 1 room, got %d — Bug 2 reproduced", n)
	}
}

// TestFlow_HomeExit_DoesNotKillSession verifies that ClientExit from home
// keeps the session alive (returns StateHome, not ErrClientExit) so the
// client isn't stuck after pressing a Back/Leave button in lobby.
func TestFlow_HomeExit_DoesNotKillSession(t *testing.T) {
	alice := makeRegisteredPlayer(t, "alice")
	alice.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}

	next, err := runState(consts.StateHome, alice)
	if err != nil {
		t.Fatalf("home exit should not return error, got %v", err)
	}
	if next != consts.StateHome {
		t.Fatalf("expected StateHome, got %d", next)
	}

	// A ClientExitResponse should have been queued so the client knows to redraw.
	found := false
	for _, r := range drainSend(alice) {
		if _, ok := r.Payload.(*protocol.Response_ClientExit); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected ClientExitResponse from home.ClientExit path")
	}
}

// TestFlow_Rematch_BothPlayersTransition is the guard for Bug 1.
// Two players finish a game and both land in gameoverState; only one clicks
// Play Again. Both player goroutines must transition to gamePvpState —
// otherwise the peer is stuck and cannot move when the game restarts.
func TestFlow_Rematch_BothPlayersTransition(t *testing.T) {
	black, white, room := setupFinishedPvpRoom(t)

	// Assert preconditions: room is finished, both players wired.
	if room.Status != lobby.RoomStatusFinished {
		t.Fatalf("precondition: room should be Finished, got %d", room.Status)
	}

	// Black clicks Play Again.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_GameReset{GameReset: &protocol.GameResetRequest{}},
	}

	// Start white's gameoverState.Next in a goroutine — it should unblock via RematchCh.
	whiteDone := make(chan consts.StateID, 1)
	whiteErr := make(chan error, 1)
	go func() {
		next, err := runState(consts.StateGameOver, white)
		whiteDone <- next
		whiteErr <- err
	}()

	// Let white's goroutine enter gameoverState (and create/publish RematchCh).
	time.Sleep(20 * time.Millisecond)

	// Black processes its GameReset.
	blackNext, err := runState(consts.StateGameOver, black)
	if err != nil {
		t.Fatalf("black gameover: %v", err)
	}
	if blackNext != consts.StateGamePvp {
		t.Fatalf("black expected StateGamePvp, got %d", blackNext)
	}

	// White must unblock and transition to gamePvp as well.
	select {
	case next := <-whiteDone:
		if next != consts.StateGamePvp {
			t.Errorf("white expected StateGamePvp after rematch, got %d", next)
		}
	case <-time.After(500 * time.Millisecond):
		t.Fatal("white goroutine did not transition to StateGamePvp within 500ms — rematch sync broken")
	}
	if err := <-whiteErr; err != nil {
		t.Errorf("white error: %v", err)
	}

	// Room state must be reset and ready for a fresh game.
	room.RLock()
	status := room.Status
	nMoves := len(room.MoveHistory)
	room.RUnlock()
	if status != lobby.RoomStatusPlaying {
		t.Errorf("room.Status after rematch = %d, want Playing", status)
	}
	if nMoves != 0 {
		t.Errorf("room.MoveHistory should be empty after reset, got %d moves", nMoves)
	}

	// Both players should have received a fresh GameStartingResponse.
	for name, p := range map[string]*lobby.Player{"black": black, "white": white} {
		found := false
		for _, r := range drainSend(p) {
			if _, ok := r.Payload.(*protocol.Response_GameStarting); ok {
				found = true
				break
			}
		}
		if !found {
			t.Errorf("%s player did not receive GameStartingResponse after rematch", name)
		}
	}
}

// TestFlow_Rematch_NewGameAcceptsMovesFromBoth verifies that after rematch,
// the fresh game actually accepts moves. Regression guard for the reported
// bug where the board cleared but clicks did nothing.
//
// We drive black's gamePvpState in a goroutine, feed it a move, and then
// shut it down via a game-over signal so the goroutine exits cleanly.
func TestFlow_Rematch_NewGameAcceptsMovesFromBoth(t *testing.T) {
	black, white, room := setupFinishedPvpRoom(t)
	_ = white

	// Trigger rematch: reset room + broadcast fresh GameStartingResponse.
	if _, err := handleGameReset(room); err != nil {
		t.Fatalf("handleGameReset: %v", err)
	}

	// Drain the GameStartingResponse sent via broadcast.
	drainSend(black)
	drainSend(white)

	// Precondition: fresh board, Playing status, Black's turn.
	room.RLock()
	if room.Status != lobby.RoomStatusPlaying {
		room.RUnlock()
		t.Fatalf("room not Playing after reset")
	}
	if room.CurrentTurn != game.Black {
		room.RUnlock()
		t.Errorf("CurrentTurn = %v, want Black", room.CurrentTurn)
	}
	if room.Board.MoveCount() != 0 {
		room.RUnlock()
		t.Errorf("Board.MoveCount = %d, want 0", room.Board.MoveCount())
	}
	room.RUnlock()

	// Run black's gamePvpState in a goroutine. Feed it one GameMove, then
	// trigger game-over to make the goroutine return. If the rematch-broken
	// bug were still present, the state would silently drop the move.
	done := make(chan consts.StateID, 1)
	go func() {
		next, _ := runState(consts.StateGamePvp, black)
		done <- next
	}()

	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_GameMove{GameMove: &protocol.GameMoveRequest{Row: 7, Col: 7}},
	}

	// Give the goroutine a moment to process the move, then close the game
	// so gamePvpState.Next returns (via GameOverCh select).
	time.Sleep(50 * time.Millisecond)
	signalGameOver(room)

	select {
	case next := <-done:
		if next != consts.StateGameOver {
			t.Errorf("expected StateGameOver after signalGameOver, got %d", next)
		}
	case <-time.After(500 * time.Millisecond):
		t.Fatal("black's gamePvpState did not exit within 500ms after signalGameOver")
	}

	// Move was applied: (7,7) has a black stone, turn flipped to White.
	room.RLock()
	piece := room.Board.GetPiece(7, 7)
	nMoves := room.Board.MoveCount()
	room.RUnlock()
	if piece != game.Black {
		t.Errorf("after move, (7,7) piece = %v, want Black", piece)
	}
	if nMoves != 1 {
		t.Errorf("Board.MoveCount = %d, want 1", nMoves)
	}

	// Black should have received exactly one GameMoveSuccessResponse.
	gotMoveAck := 0
	for _, r := range drainSend(black) {
		if _, ok := r.Payload.(*protocol.Response_GameMoveSuccess); ok {
			gotMoveAck++
		}
	}
	if gotMoveAck != 1 {
		t.Errorf("black received %d GameMoveSuccessResponse, want 1", gotMoveAck)
	}
}
