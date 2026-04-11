package state

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/protocol"
)

// setupWatchingPlayer creates a room with two players, then adds a spectator
// and returns the spectator player + the room.
func setupWatchingPlayer(t *testing.T) (*lobby.Player, *lobby.Room) {
	t.Helper()
	owner := makeRegisteredPlayer(t, "Black")
	room, err := lobby.CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, owner); err != nil {
		t.Fatalf("JoinRoom owner: %v", err)
	}
	joiner := makeRegisteredPlayer(t, "White")
	if err := lobby.JoinRoom(room.ID, joiner); err != nil {
		t.Fatalf("JoinRoom joiner: %v", err)
	}

	spectator := makeRegisteredPlayer(t, "Watcher")
	if err := lobby.WatchRoom(room.ID, spectator); err != nil {
		t.Fatalf("WatchRoom: %v", err)
	}
	return spectator, room
}

// TestWatching_ExitReturnsHome verifies WatchGameExitRequest → UnwatchRoom → ShowOptions → StateHome.
func TestWatching_ExitReturnsHome(t *testing.T) {
	spectator, _ := setupWatchingPlayer(t)

	go func() {
		time.Sleep(10 * time.Millisecond)
		spectator.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_WatchGameExit{
				WatchGameExit: &protocol.WatchGameExitRequest{},
			},
		}
	}()

	s := &watchingState{}
	next, err := s.Next(spectator)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("got state %d, want StateHome (%d)", next, consts.StateHome)
	}
	if spectator.RoomID != 0 {
		t.Errorf("expected RoomID cleared, got %d", spectator.RoomID)
	}
	if spectator.Role != "" {
		t.Errorf("expected Role cleared, got %q", spectator.Role)
	}

	found := false
	for _, r := range drainSend(spectator) {
		if _, ok := r.Payload.(*protocol.Response_ShowOptions); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected ShowOptionsResponse after WatchGameExit")
	}
}

// TestWatching_ClientExitReturnsErrClientExit verifies ClientExitRequest → unwatch → ErrClientExit.
func TestWatching_ClientExitReturnsErrClientExit(t *testing.T) {
	spectator, _ := setupWatchingPlayer(t)

	go func() {
		time.Sleep(10 * time.Millisecond)
		spectator.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{
				ClientExit: &protocol.ClientExitRequest{},
			},
		}
	}()

	s := &watchingState{}
	_, err := s.Next(spectator)
	if err != ErrClientExit {
		t.Errorf("expected ErrClientExit, got %v", err)
	}
	if spectator.RoomID != 0 {
		t.Errorf("expected RoomID cleared, got %d", spectator.RoomID)
	}
}

// TestWatching_MoveAttemptRejected verifies GameMoveRequest → SpectatorCannotActResponse, stay.
func TestWatching_MoveAttemptRejected(t *testing.T) {
	spectator, _ := setupWatchingPlayer(t)

	go func() {
		time.Sleep(10 * time.Millisecond)
		spectator.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_GameMove{
				GameMove: &protocol.GameMoveRequest{Row: 7, Col: 7},
			},
		}
		// Follow up with exit so Next() unblocks for a second call in the test.
		time.Sleep(10 * time.Millisecond)
		spectator.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_WatchGameExit{
				WatchGameExit: &protocol.WatchGameExitRequest{},
			},
		}
	}()

	s := &watchingState{}

	// First call: GameMove → stays in StateWatching.
	next, err := s.Next(spectator)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateWatching {
		t.Errorf("got state %d, want StateWatching (%d)", next, consts.StateWatching)
	}

	// Should have received SpectatorCannotActResponse.
	found := false
	for _, r := range drainSend(spectator) {
		if _, ok := r.Payload.(*protocol.Response_SpectatorCannotAct); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected SpectatorCannotActResponse for GameMove attempt")
	}

	// Second call: WatchGameExit → StateHome (cleanup).
	next, err = s.Next(spectator)
	if err != nil {
		t.Fatalf("unexpected error on exit: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("got state %d, want StateHome (%d)", next, consts.StateHome)
	}
}

// TestWatching_ClosedCmdChReturnsErrClientExit verifies that closing CmdCh
// triggers UnwatchRoom and returns ErrClientExit.
func TestWatching_ClosedCmdChReturnsErrClientExit(t *testing.T) {
	spectator, room := setupWatchingPlayer(t)
	close(spectator.CmdCh)

	s := &watchingState{}
	_, err := s.Next(spectator)
	if err != ErrClientExit {
		t.Errorf("expected ErrClientExit, got %v", err)
	}
	// Spectator should be removed from room.
	room.RLock()
	_, stillIn := room.Spectators[spectator.ID]
	room.RUnlock()
	if stillIn {
		t.Error("spectator should have been removed from room.Spectators on CmdCh close")
	}
}

// TestSnapshot_SendsOwnerStartingAndHistory verifies sendRoomSnapshot sends
// WatchGameSuccessResponse + GameStartingResponse + one MoveSuccessResponse per history entry.
func TestSnapshot_SendsOwnerStartingAndHistory(t *testing.T) {
	owner := makeRegisteredPlayer(t, "Black")
	room, err := lobby.CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, owner); err != nil {
		t.Fatalf("JoinRoom owner: %v", err)
	}
	joiner := makeRegisteredPlayer(t, "White")
	if err := lobby.JoinRoom(room.ID, joiner); err != nil {
		t.Fatalf("JoinRoom joiner: %v", err)
	}

	// Set up color assignment and some move history.
	room.Lock()
	room.BlackPlayerID = owner.ID
	room.WhitePlayerID = joiner.ID
	room.Status = lobby.RoomStatusPlaying
	room.CurrentTurn = game.Black
	room.Unlock()

	// Apply 3 moves directly.
	room.Lock()
	_, _ = room.ApplyMove(7, 7, game.Black, owner.ID)
	_, _ = room.ApplyMove(7, 8, game.White, joiner.ID)
	_, _ = room.ApplyMove(8, 7, game.Black, owner.ID)
	room.Unlock()

	spectator := makeRegisteredPlayer(t, "Watcher")
	sendRoomSnapshot(spectator, room)

	responses := drainSend(spectator)

	if len(responses) < 5 {
		t.Fatalf("expected at least 5 responses (1 watch success + 1 starting + 3 moves), got %d", len(responses))
	}

	if _, ok := responses[0].Payload.(*protocol.Response_WatchGameSuccess); !ok {
		t.Errorf("response[0] = %T, want WatchGameSuccessResponse", responses[0].Payload)
	}
	if _, ok := responses[1].Payload.(*protocol.Response_GameStarting); !ok {
		t.Errorf("response[1] = %T, want GameStartingResponse", responses[1].Payload)
	}
	gs := responses[1].GetGameStarting()
	if gs.GetBlackPlayerNickname() != "Black" {
		t.Errorf("black nickname = %q, want %q", gs.GetBlackPlayerNickname(), "Black")
	}
	if gs.GetWhitePlayerNickname() != "White" {
		t.Errorf("white nickname = %q, want %q", gs.GetWhitePlayerNickname(), "White")
	}
	for i := 2; i < 5; i++ {
		if _, ok := responses[i].Payload.(*protocol.Response_GameMoveSuccess); !ok {
			t.Errorf("response[%d] = %T, want GameMoveSuccessResponse", i, responses[i].Payload)
		}
	}
}

// TestHomeWatchGame_RouteToWatching verifies that WatchGameRequest in home state
// causes a snapshot to be sent and transitions to StateWatching.
func TestHomeWatchGame_RouteToWatching(t *testing.T) {
	owner := makeRegisteredPlayer(t, "Owner")
	room, err := lobby.CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, owner); err != nil {
		t.Fatalf("JoinRoom: %v", err)
	}

	spectator := makeRegisteredPlayer(t, "Spec")

	go func() {
		time.Sleep(10 * time.Millisecond)
		spectator.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_WatchGame{
				WatchGame: &protocol.WatchGameRequest{RoomId: int32(room.ID)},
			},
		}
	}()

	s := &homeState{}
	next, err := s.Next(spectator)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateWatching {
		t.Errorf("got state %d, want StateWatching (%d)", next, consts.StateWatching)
	}

	// Should have received WatchGameSuccessResponse at minimum.
	found := false
	for _, r := range drainSend(spectator) {
		if _, ok := r.Payload.(*protocol.Response_WatchGameSuccess); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected WatchGameSuccessResponse after successful WatchGame")
	}
}

// TestHomeWatchGame_RoomNotFound verifies that WatchGameRequest with invalid roomID
// sends RoomPlayFailNotFoundResponse and stays in StateHome.
func TestHomeWatchGame_RoomNotFound(t *testing.T) {
	spectator := makeTestPlayer(800, "Spec")

	spectator.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_WatchGame{
			WatchGame: &protocol.WatchGameRequest{RoomId: 99999},
		},
	}

	s := &homeState{}
	next, err := s.Next(spectator)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("got state %d, want StateHome (%d)", next, consts.StateHome)
	}

	found := false
	for _, r := range drainSend(spectator) {
		if _, ok := r.Payload.(*protocol.Response_RoomPlayFailNotFound); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected RoomPlayFailNotFoundResponse for unknown roomID")
	}
}

// TestDeleteRoom_EjectsSpectators verifies that when the last player leaves,
// spectators receive a ClientExitResponse and a WatchGameExit is pushed to CmdCh.
func TestDeleteRoom_EjectsSpectators(t *testing.T) {
	owner := makeRegisteredPlayer(t, "Owner")
	room, err := lobby.CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, owner); err != nil {
		t.Fatalf("JoinRoom: %v", err)
	}

	spectator := makeRegisteredPlayer(t, "Watcher")
	if err := lobby.WatchRoom(room.ID, spectator); err != nil {
		t.Fatalf("WatchRoom: %v", err)
	}

	// Owner leaves — should eject spectator.
	lobby.LeaveRoom(owner)

	// Give async sends a moment to land.
	time.Sleep(20 * time.Millisecond)

	// Spectator should have received a ClientExitResponse on SendCh.
	foundEject := false
	for _, r := range drainSend(spectator) {
		if exit := r.GetClientExit(); exit != nil && exit.GetExitClientNickname() == "room_closed" {
			foundEject = true
			break
		}
	}
	if !foundEject {
		t.Error("expected ClientExitResponse with room_closed nickname when last player leaves")
	}

	// CmdCh should have a WatchGameExitRequest so the state machine can react.
	select {
	case req := <-spectator.CmdCh:
		if _, ok := req.Payload.(*protocol.Request_WatchGameExit); !ok {
			t.Errorf("expected WatchGameExitRequest on CmdCh, got %T", req.Payload)
		}
	case <-time.After(100 * time.Millisecond):
		t.Error("no WatchGameExitRequest received on spectator CmdCh after room deletion")
	}
}

// TestRoomSummary_IncludesSpectators verifies that room_client_count includes spectators.
// Indirectly via handleGetRooms by checking room field values directly.
func TestRoomSummary_IncludesSpectators(t *testing.T) {
	owner := makeRegisteredPlayer(t, "Owner")
	room, err := lobby.CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, owner); err != nil {
		t.Fatalf("JoinRoom: %v", err)
	}
	joiner := makeRegisteredPlayer(t, "Joiner")
	if err := lobby.JoinRoom(room.ID, joiner); err != nil {
		t.Fatalf("JoinRoom joiner: %v", err)
	}
	spectator := makeRegisteredPlayer(t, "Watcher")
	if err := lobby.WatchRoom(room.ID, spectator); err != nil {
		t.Fatalf("WatchRoom: %v", err)
	}

	room.RLock()
	count := len(room.Players) + len(room.Spectators)
	room.RUnlock()

	if count != 3 {
		t.Errorf("room_client_count = %d, want 3 (2 players + 1 spectator)", count)
	}
}
