package state

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/protocol"
)

// makeRegisteredPlayer creates a player via the store and wires channels.
func makeRegisteredPlayer(t *testing.T, name string) *lobby.Player {
	t.Helper()
	p := lobby.RegisterPlayer(name)
	p.SendCh = make(chan *protocol.Response, 64)
	p.CmdCh = make(chan *protocol.Request, 16)
	t.Cleanup(func() { lobby.RemovePlayer(p.ID) })
	return p
}

// setupPvpRoomWithOwner creates a PVP room with owner already joined.
func setupPvpRoomWithOwner(t *testing.T) (*lobby.Player, *lobby.Room) {
	t.Helper()
	owner := makeRegisteredPlayer(t, "Owner")

	room, err := lobby.CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinRoom(room.ID, owner); err != nil {
		t.Fatalf("JoinRoom owner: %v", err)
	}
	return owner, room
}

// TestWaitingOwnerGameStartingRequiresFullRoom verifies that GameStartingRequest
// is rejected (RoomPlayFailNotFound) when only 1 player is in the room.
func TestWaitingOwnerGameStartingRequiresFullRoom(t *testing.T) {
	owner, _ := setupPvpRoomWithOwner(t)

	go func() {
		time.Sleep(20 * time.Millisecond)
		owner.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_GameStarting{
				GameStarting: &protocol.GameStartingRequest{},
			},
		}
		// After rejection, send exit so the state unblocks.
		time.Sleep(20 * time.Millisecond)
		owner.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{
				ClientExit: &protocol.ClientExitRequest{},
			},
		}
	}()

	s := &waitingState{}
	next, err := s.Next(owner)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("expected StateHome after rejection+exit, got %d", next)
	}

	// Owner should have received RoomPlayFailNotFoundResponse.
	found := false
	for _, r := range drainSend(owner) {
		if _, ok := r.Payload.(*protocol.Response_RoomPlayFailNotFound); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected RoomPlayFailNotFoundResponse for single-player start attempt")
	}
}

// TestWaitingOwnerStartsWhenFull verifies owner can start when 2 players present.
func TestWaitingOwnerStartsWhenFull(t *testing.T) {
	owner, room := setupPvpRoomWithOwner(t)
	joiner := makeRegisteredPlayer(t, "Joiner")
	if err := lobby.JoinRoom(room.ID, joiner); err != nil {
		t.Fatalf("JoinRoom joiner: %v", err)
	}

	go func() {
		time.Sleep(10 * time.Millisecond)
		owner.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_GameStarting{
				GameStarting: &protocol.GameStartingRequest{},
			},
		}
	}()

	s := &waitingState{}
	next, err := s.Next(owner)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateGamePvp {
		t.Errorf("got state %d, want StateGamePvp (%d)", next, consts.StateGamePvp)
	}

	// Owner should receive GameStartingResponse.
	found := false
	for _, r := range drainSend(owner) {
		if _, ok := r.Payload.(*protocol.Response_GameStarting); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameStartingResponse after valid start")
	}
}

// TestWaitingJoinerTransitionsOnStartCh verifies joiner transitions when
// owner closes StartCh (signals game start).
func TestWaitingJoinerTransitionsOnStartCh(t *testing.T) {
	owner, room := setupPvpRoomWithOwner(t)
	joiner := makeRegisteredPlayer(t, "Joiner")
	if err := lobby.JoinRoom(room.ID, joiner); err != nil {
		t.Fatalf("JoinRoom joiner: %v", err)
	}

	// Simulate owner triggering start: close StartCh and mark room playing.
	go func() {
		time.Sleep(30 * time.Millisecond)
		room.Lock()
		if room.StartCh != nil {
			close(room.StartCh)
			room.StartCh = nil
		}
		room.Status = lobby.RoomStatusPlaying
		room.Unlock()
	}()

	_ = owner

	s := &waitingState{}
	next, err := s.Next(joiner)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateGamePvp {
		t.Errorf("joiner got state %d, want StateGamePvp (%d)", next, consts.StateGamePvp)
	}
}

// TestWaitingExitOnClientExitRequest verifies clean exit via ClientExitRequest
// transitions back to home (keeping the WS alive) rather than killing the session.
func TestWaitingExitOnClientExitRequest(t *testing.T) {
	owner, _ := setupPvpRoomWithOwner(t)

	go func() {
		time.Sleep(10 * time.Millisecond)
		owner.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{
				ClientExit: &protocol.ClientExitRequest{},
			},
		}
	}()

	s := &waitingState{}
	next, err := s.Next(owner)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("expected StateHome, got %d", next)
	}
}

// TestWaitingExitOnClosedChan verifies ErrClientExit when CmdCh is closed.
func TestWaitingExitOnClosedChan(t *testing.T) {
	owner, _ := setupPvpRoomWithOwner(t)
	close(owner.CmdCh)

	s := &waitingState{}
	_, err := s.Next(owner)
	if err != ErrClientExit {
		t.Errorf("expected ErrClientExit, got %v", err)
	}
}
