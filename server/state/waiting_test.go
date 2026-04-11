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

// TestWaitingOwnerTransitionsOnStartCh verifies the owner's waiting goroutine
// wakes via StartCh when handleJoinRoom (running on the joiner's goroutine)
// triggers auto-start. This is the PVP auto-start path.
func TestWaitingOwnerTransitionsOnStartCh(t *testing.T) {
	owner, room := setupPvpRoomWithOwner(t)

	// Simulate the joiner's handleJoinRoom path: mark playing + close StartCh.
	go func() {
		time.Sleep(20 * time.Millisecond)
		room.Lock()
		room.Status = lobby.RoomStatusPlaying
		if room.StartCh != nil {
			close(room.StartCh)
			room.StartCh = nil
		}
		room.Unlock()
	}()

	s := &waitingState{}
	next, err := s.Next(owner)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateGamePvp {
		t.Errorf("owner got state %d, want StateGamePvp (%d)", next, consts.StateGamePvp)
	}
}

// TestWaitingJoinerTransitionsOnStartCh verifies the joiner's waiting goroutine
// also wakes via StartCh when auto-start fires. Mirrors the owner test above
// but from the joiner's perspective (same unified waitingState).
func TestWaitingJoinerTransitionsOnStartCh(t *testing.T) {
	owner, room := setupPvpRoomWithOwner(t)
	joiner := makeRegisteredPlayer(t, "Joiner")
	if err := lobby.JoinRoom(room.ID, joiner); err != nil {
		t.Fatalf("JoinRoom joiner: %v", err)
	}

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
