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

// TestFlow_JoinAutoStartsGame verifies the end-to-end PVP auto-start: owner
// creates a room, a second player sends JoinRoomRequest, and the handler
// (running on joiner's goroutine) should assign colors, flip Status=Playing,
// close StartCh, broadcast GameStartingResponse, and return StateGamePvp.
// In parallel, the owner's waitingState wakes via StartCh and transitions
// to StateGamePvp. No explicit Start click.
func TestFlow_JoinAutoStartsGame(t *testing.T) {
	// Setup: owner creates a room and is already in waiting state.
	owner := makeRegisteredPlayer(t, "owner")
	room, err := lobby.CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, owner); err != nil {
		t.Fatalf("owner JoinRoom: %v", err)
	}

	// Owner goroutine: run waitingState, expect it to transition on StartCh close.
	ownerDone := make(chan consts.StateID, 1)
	ownerErr := make(chan error, 1)
	go func() {
		next, err := runState(consts.StateWaiting, owner)
		ownerDone <- next
		ownerErr <- err
	}()
	time.Sleep(20 * time.Millisecond) // let owner enter waitingState

	// Joiner sends JoinRoomRequest from home state.
	joiner := makeRegisteredPlayer(t, "joiner")
	joiner.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_JoinRoom{JoinRoom: &protocol.JoinRoomRequest{RoomId: int32(room.ID)}},
	}
	joinerNext, err := runState(consts.StateHome, joiner)
	if err != nil {
		t.Fatalf("joiner home: %v", err)
	}
	if joinerNext != consts.StateGamePvp {
		t.Fatalf("joiner expected StateGamePvp (auto-start), got %d", joinerNext)
	}

	// Owner must have transitioned to gamePvp in lockstep.
	select {
	case next := <-ownerDone:
		if next != consts.StateGamePvp {
			t.Errorf("owner expected StateGamePvp, got %d", next)
		}
	case <-time.After(500 * time.Millisecond):
		t.Fatal("owner waitingState did not transition within 500ms — auto-start didn't fire StartCh")
	}
	if err := <-ownerErr; err != nil {
		t.Errorf("owner error: %v", err)
	}

	// Room must be fully set up.
	room.RLock()
	status := room.Status
	blackID := room.BlackPlayerID
	whiteID := room.WhitePlayerID
	turn := room.CurrentTurn
	room.RUnlock()
	if status != lobby.RoomStatusPlaying {
		t.Errorf("room.Status = %d, want Playing", status)
	}
	if turn != game.Black {
		t.Errorf("room.CurrentTurn = %v, want Black", turn)
	}
	// Colors assigned to the actual two players.
	if !(blackID == owner.ID && whiteID == joiner.ID) &&
		!(blackID == joiner.ID && whiteID == owner.ID) {
		t.Errorf("colors not assigned to actual players: black=%d white=%d owner=%d joiner=%d",
			blackID, whiteID, owner.ID, joiner.ID)
	}

	// Both players must have received GameStartingResponse.
	for name, p := range map[string]*lobby.Player{"owner": owner, "joiner": joiner} {
		found := false
		for _, r := range drainSend(p) {
			if _, ok := r.Payload.(*protocol.Response_GameStarting); ok {
				found = true
				break
			}
		}
		if !found {
			t.Errorf("%s did not receive GameStartingResponse", name)
		}
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

// TestFlow_CreatePveAfterPvpLeave verifies the user-reported scenario:
// after finishing a PVP game and leaving, the player can immediately
// create a PVE room and play against the AI. Catches state-machine
// residue that would block the transition from home → gamePve.
func TestFlow_CreatePveAfterPvpLeave(t *testing.T) {
	black, white, room := setupFinishedPvpRoom(t)
	_ = white

	// Black leaves the finished PVP room.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	next, err := runState(consts.StateGameOver, black)
	if err != nil {
		t.Fatalf("gameover exit: %v", err)
	}
	if next != consts.StateHome {
		t.Fatalf("expected StateHome, got %d", next)
	}
	if black.RoomID != 0 {
		t.Errorf("black.RoomID = %d after exit, want 0", black.RoomID)
	}
	drainSend(black)

	// From home, send CreatePveRoom (medium difficulty).
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_CreatePveRoom{
			CreatePveRoom: &protocol.CreatePveRoomRequest{Difficulty: 2},
		},
	}
	next, err = runState(consts.StateHome, black)
	if err != nil {
		t.Fatalf("home create pve: %v", err)
	}
	if next != consts.StateGamePve {
		t.Fatalf("expected StateGamePve, got %d", next)
	}

	// Verify the PVE room exists, black is in it, and GameStartingResponse
	// was sent.
	if black.RoomID == 0 {
		t.Error("black.RoomID should be set to new PVE room")
	}
	if black.RoomID == room.ID {
		t.Error("PVE room reused old PVP room ID")
	}
	pveRoom, ok := lobby.GetRoom(black.RoomID)
	if !ok {
		t.Fatal("new PVE room not in store")
	}
	if pveRoom.RoomType != lobby.RoomTypePve {
		t.Errorf("new room type = %v, want PVE", pveRoom.RoomType)
	}
	if pveRoom.AI == nil {
		t.Error("PVE room should have an AI instance")
	}

	gotStart := false
	for _, r := range drainSend(black) {
		if _, ok := r.Payload.(*protocol.Response_GameStarting); ok {
			gotStart = true
			break
		}
	}
	if !gotStart {
		t.Error("black did not receive GameStartingResponse for new PVE room")
	}
}

// TestFlow_CreatePveAfterPvpRematch covers the specific residue case the
// user flagged: PVP game → rematch → finish → leave → create PVE. The
// rematch path mutates both RematchCh (closed + niled) and GameOverCh
// (fresh channel), which if mishandled could leave the room in a dirty
// state that blocks subsequent PVE creation.
func TestFlow_CreatePveAfterPvpRematch(t *testing.T) {
	black, white, room := setupFinishedPvpRoom(t)
	_ = white

	// Rematch: black clicks Play Again from gameoverState.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_GameReset{GameReset: &protocol.GameResetRequest{}},
	}
	next, err := runState(consts.StateGameOver, black)
	if err != nil {
		t.Fatalf("rematch: %v", err)
	}
	if next != consts.StateGamePvp {
		t.Fatalf("expected StateGamePvp after rematch, got %d", next)
	}

	// Simulate game 2 ending.
	room.Lock()
	room.Status = lobby.RoomStatusFinished
	room.Unlock()

	// Leave game 2.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	next, err = runState(consts.StateGameOver, black)
	if err != nil {
		t.Fatalf("leave game 2: %v", err)
	}
	if next != consts.StateHome {
		t.Fatalf("expected StateHome, got %d", next)
	}
	if black.RoomID != 0 {
		t.Errorf("black.RoomID = %d after leave, want 0", black.RoomID)
	}
	drainSend(black)

	// Now create a PVE room.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_CreatePveRoom{
			CreatePveRoom: &protocol.CreatePveRoomRequest{Difficulty: 3},
		},
	}
	next, err = runState(consts.StateHome, black)
	if err != nil {
		t.Fatalf("create pve after rematch: %v", err)
	}
	if next != consts.StateGamePve {
		t.Fatalf("expected StateGamePve, got %d", next)
	}

	// Verify fresh PVE room state.
	pveRoom, ok := lobby.GetRoom(black.RoomID)
	if !ok {
		t.Fatal("PVE room missing from store")
	}
	if pveRoom.RoomType != lobby.RoomTypePve {
		t.Errorf("room type = %v, want PVE", pveRoom.RoomType)
	}
	if pveRoom.AI == nil {
		t.Error("PVE room missing AI")
	}
	if pveRoom.Status != lobby.RoomStatusPlaying {
		t.Errorf("PVE room Status = %d, want Playing", pveRoom.Status)
	}
	if pveRoom.Board.MoveCount() != 0 {
		t.Errorf("new PVE board has %d moves, want 0", pveRoom.Board.MoveCount())
	}
}

// TestFlow_CreatePveAfterPvpForfeit covers the variant where the player
// forfeits a PVP game mid-play (via ClientExit while still in gamePvpState)
// and then wants to create a PVE room. The exiting goroutine goes directly
// to StateHome — state machine must be clean enough to handle CreatePveRoom.
func TestFlow_CreatePveAfterPvpForfeit(t *testing.T) {
	// Setup: two players in an active PVP game.
	black := makeRegisteredPlayer(t, "black")
	white := makeRegisteredPlayer(t, "white")
	_ = white
	room, err := lobby.CreatePvpRoom(black)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, black); err != nil {
		t.Fatalf("JoinRoom black: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, white); err != nil {
		t.Fatalf("JoinRoom white: %v", err)
	}
	room.Lock()
	room.BlackPlayerID = black.ID
	room.WhitePlayerID = white.ID
	room.Status = lobby.RoomStatusPlaying
	room.Unlock()

	// Black forfeits via ClientExit while in gamePvpState.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	next, err := runState(consts.StateGamePvp, black)
	if err != nil {
		t.Fatalf("gamepvp exit: %v", err)
	}
	if next != consts.StateHome {
		t.Fatalf("expected StateHome after forfeit, got %d", next)
	}
	drainSend(black)

	// Create PVE room from home.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_CreatePveRoom{
			CreatePveRoom: &protocol.CreatePveRoomRequest{Difficulty: 1},
		},
	}
	next, err = runState(consts.StateHome, black)
	if err != nil {
		t.Fatalf("home create pve after forfeit: %v", err)
	}
	if next != consts.StateGamePve {
		t.Fatalf("expected StateGamePve, got %d", next)
	}
}

// TestFlow_CreateRoomAfterPvpLeave verifies that after a PVP game ends and
// the player leaves via gameoverState → StateHome, they can immediately
// create a new room. Regression guard for the reported bug where clicking
// Create Room after a finished PVP game did nothing.
func TestFlow_CreateRoomAfterPvpLeave(t *testing.T) {
	black, white, room := setupFinishedPvpRoom(t)
	_ = white

	// Black's player goroutine is in gameoverState. Simulate: send ClientExit
	// so black transitions back to home.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	next, err := runState(consts.StateGameOver, black)
	if err != nil {
		t.Fatalf("gameover exit: %v", err)
	}
	if next != consts.StateHome {
		t.Fatalf("expected StateHome, got %d", next)
	}

	// Black should be out of the original room. White is still in it.
	if black.RoomID != 0 {
		t.Errorf("black.RoomID = %d after leave, want 0", black.RoomID)
	}
	if _, ok := lobby.GetRoom(room.ID); !ok {
		t.Error("original room was deleted but white is still in it")
	}

	// Drain the ClientExit responses from earlier hops.
	drainSend(black)

	// Now black sends CreateRoom from home state.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}},
	}
	next, err = runState(consts.StateHome, black)
	if err != nil {
		t.Fatalf("home create after pvp: %v", err)
	}
	if next != consts.StateWaiting {
		t.Fatalf("expected StateWaiting after create, got %d", next)
	}

	// Black must have received RoomCreateSuccessResponse for the new room.
	gotCreate := false
	var newRoomID int64
	for _, r := range drainSend(black) {
		if cs := r.GetRoomCreateSuccess(); cs != nil {
			gotCreate = true
			newRoomID = int64(cs.GetId())
			break
		}
	}
	if !gotCreate {
		t.Fatal("black did not receive RoomCreateSuccessResponse after CreateRoom")
	}
	if newRoomID == room.ID {
		t.Errorf("new room should have a different ID than the old one (%d)", room.ID)
	}
	if newRoomID == 0 {
		t.Error("new room ID is 0")
	}

	// Black should now be in the new room, not the old one.
	if black.RoomID != newRoomID {
		t.Errorf("black.RoomID = %d, want new room %d", black.RoomID, newRoomID)
	}
}

// TestFlow_CreateRoomAfterPvpRematchLeave walks through a PVP game to the
// gameoverState, triggers rematch (which closes RematchCh + resets the room),
// then sends ClientExit through the NEW game round, and verifies the player
// can still create a fresh room afterward. Catches residue from RematchCh /
// GameOverCh that could wedge the state machine.
func TestFlow_CreateRoomAfterPvpRematchLeave(t *testing.T) {
	black, white, room := setupFinishedPvpRoom(t)
	_ = white

	// Rematch: black triggers GameReset from gameoverState.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_GameReset{GameReset: &protocol.GameResetRequest{}},
	}
	next, err := runState(consts.StateGameOver, black)
	if err != nil {
		t.Fatalf("gameover reset: %v", err)
	}
	if next != consts.StateGamePvp {
		t.Fatalf("expected StateGamePvp after reset, got %d", next)
	}

	// Room should be fresh and playing.
	room.RLock()
	if room.Status != lobby.RoomStatusPlaying {
		room.RUnlock()
		t.Fatalf("room not Playing after rematch, got %d", room.Status)
	}
	if room.RematchCh != nil {
		room.RUnlock()
		t.Error("RematchCh should be nil after close+reset, got non-nil")
	}
	room.RUnlock()

	// Simulate game 2 finishing: force room to Finished state, clear CurrentTurn.
	room.Lock()
	room.Status = lobby.RoomStatusFinished
	room.Unlock()

	// Now black is conceptually back in gameoverState. Send ClientExit to leave.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	next, err = runState(consts.StateGameOver, black)
	if err != nil {
		t.Fatalf("gameover exit after rematch: %v", err)
	}
	if next != consts.StateHome {
		t.Fatalf("expected StateHome, got %d", next)
	}

	// Critical: black should be able to create a new room immediately.
	drainSend(black)
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}},
	}
	next, err = runState(consts.StateHome, black)
	if err != nil {
		t.Fatalf("home create after rematch+leave: %v", err)
	}
	if next != consts.StateWaiting {
		t.Fatalf("expected StateWaiting after create, got %d", next)
	}

	// Verify the new room is different from the old one.
	gotCreate := false
	var newRoomID int64
	for _, r := range drainSend(black) {
		if cs := r.GetRoomCreateSuccess(); cs != nil {
			gotCreate = true
			newRoomID = int64(cs.GetId())
			break
		}
	}
	if !gotCreate {
		t.Fatal("did not receive RoomCreateSuccessResponse")
	}
	if newRoomID == room.ID {
		t.Errorf("new room reuses old room ID %d", room.ID)
	}
	if black.RoomID != newRoomID {
		t.Errorf("black.RoomID = %d, want %d", black.RoomID, newRoomID)
	}
}

// TestFlow_CreateRoomAfterOpponentForfeit: the other player disconnects
// during the game via ClientExit. The remaining player sees GameOver via
// forfeit broadcast + ClientExit notification. They end up in gameoverState
// and must be able to leave + create a new room.
func TestFlow_CreateRoomAfterOpponentForfeit(t *testing.T) {
	black, white, room := setupFinishedPvpRoom(t)
	_ = room

	// Black clicks Leave from gameoverState — room still has white inside.
	black.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	if _, err := runState(consts.StateGameOver, black); err != nil {
		t.Fatalf("black gameover exit: %v", err)
	}
	if black.RoomID != 0 {
		t.Errorf("black.RoomID = %d, want 0", black.RoomID)
	}

	// White now sends ClientExit — room should be deleted.
	white.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	if _, err := runState(consts.StateGameOver, white); err != nil {
		t.Fatalf("white gameover exit: %v", err)
	}
	if white.RoomID != 0 {
		t.Errorf("white.RoomID = %d, want 0", white.RoomID)
	}
	if len(lobby.GetAllRooms()) != 0 {
		t.Errorf("expected 0 rooms after both players exit, got %d", len(lobby.GetAllRooms()))
	}

	// Both players should now be able to create new rooms.
	for _, p := range []*lobby.Player{black, white} {
		drainSend(p)
		p.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}},
		}
		next, err := runState(consts.StateHome, p)
		if err != nil {
			t.Fatalf("%s create after exit: %v", p.Name, err)
		}
		if next != consts.StateWaiting {
			t.Errorf("%s expected StateWaiting, got %d", p.Name, next)
		}
		if p.RoomID == 0 {
			t.Errorf("%s RoomID = 0, want non-zero", p.Name)
		}
	}

	// Two new rooms in the store now.
	if len(lobby.GetAllRooms()) != 2 {
		t.Errorf("expected 2 rooms (one per player), got %d", len(lobby.GetAllRooms()))
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
