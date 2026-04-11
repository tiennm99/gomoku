package state

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/protocol"
)

// makeTestPlayer creates a Player with wired CmdCh and SendCh for use in tests.
// The player is NOT registered in the store (so RemovePlayer is safe to no-op).
func makeTestPlayer(id int64, name string) *lobby.Player {
	p := &lobby.Player{
		ID:     id,
		Name:   name,
		SendCh: make(chan *protocol.Response, 64),
		CmdCh:  make(chan *protocol.Request, 16),
	}
	return p
}

// drainSend returns all responses currently buffered in SendCh without blocking.
func drainSend(p *lobby.Player) []*protocol.Response {
	var out []*protocol.Response
	for {
		select {
		case r := <-p.SendCh:
			out = append(out, r)
		default:
			return out
		}
	}
}

// TestWelcomeTransitionsToSetNickname verifies that welcomeState immediately
// returns StateSetNickname without reading from CmdCh.
func TestWelcomeTransitionsToSetNickname(t *testing.T) {
	p := makeTestPlayer(1, "")
	s := &welcomeState{}
	next, err := s.Next(p)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateSetNickname {
		t.Errorf("got state %d, want StateSetNickname (%d)", next, consts.StateSetNickname)
	}
}

// TestSetNicknameWithNameAlreadySet verifies immediate transition to home when
// player.Name is pre-populated (stateless handler already ran).
func TestSetNicknameWithNameAlreadySet(t *testing.T) {
	p := makeTestPlayer(1, "Alice")
	s := &setNicknameState{}
	next, err := s.Next(p)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("got state %d, want StateHome (%d)", next, consts.StateHome)
	}
}

// TestSetNicknameExitOnClosedChan verifies ErrClientExit when CmdCh is closed.
func TestSetNicknameExitOnClosedChan(t *testing.T) {
	p := makeTestPlayer(1, "") // no name
	close(p.CmdCh)
	s := &setNicknameState{}
	_, err := s.Next(p)
	if err != ErrClientExit {
		t.Errorf("expected ErrClientExit, got %v", err)
	}
}

// TestSetNicknameStatefulRequestBeforeName verifies that a stateful request
// arriving on CmdCh before Name is set causes a transition to home with a
// default name assigned, and re-enqueues the request.
func TestSetNicknameStatefulRequestBeforeName(t *testing.T) {
	p := makeTestPlayer(1, "") // no name yet
	req := &protocol.Request{
		Payload: &protocol.Request_CreateRoom{
			CreateRoom: &protocol.CreateRoomRequest{},
		},
	}
	p.CmdCh <- req

	s := &setNicknameState{}
	next, err := s.Next(p)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("got state %d, want StateHome (%d)", next, consts.StateHome)
	}
	if p.Name == "" {
		t.Error("expected default name to be assigned")
	}
	// Request should be re-enqueued.
	select {
	case got := <-p.CmdCh:
		if got != req {
			t.Error("re-enqueued request does not match original")
		}
	case <-time.After(100 * time.Millisecond):
		t.Error("request was not re-enqueued to CmdCh")
	}
}

// TestRunnerExitsOnErrClientExit verifies that Run() terminates when a state
// returns ErrClientExit.
func TestRunnerExitsOnErrClientExit(t *testing.T) {
	// Register a fake state that immediately exits.
	const fakeState consts.StateID = 99
	register(fakeState, stateFunc(func(_ *lobby.Player) (consts.StateID, error) {
		return 0, ErrClientExit
	}))

	p := makeTestPlayer(999, "runner-test")
	// Redirect first state to fakeState by temporarily overriding welcome.
	origWelcome := registry[consts.StateWelcome]
	register(consts.StateWelcome, stateFunc(func(_ *lobby.Player) (consts.StateID, error) {
		return fakeState, nil
	}))
	defer register(consts.StateWelcome, origWelcome)

	done := make(chan struct{})
	go func() {
		Run(p)
		close(done)
	}()

	select {
	case <-done:
		// Good: goroutine exited.
	case <-time.After(2 * time.Second):
		t.Fatal("Run() did not exit within 2s after ErrClientExit")
	}
}

// stateFunc is a helper to turn a function into a State for test overrides.
type stateFunc func(*lobby.Player) (consts.StateID, error)

func (f stateFunc) Next(p *lobby.Player) (consts.StateID, error) { return f(p) }

// TestHomeExitOnClientExitRequest verifies homeState acknowledges ClientExit
// but stays in home (since there is no room to leave).
func TestHomeExitOnClientExitRequest(t *testing.T) {
	p := makeTestPlayer(1, "Bob")
	p.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_ClientExit{
			ClientExit: &protocol.ClientExitRequest{},
		},
	}

	s := &homeState{}
	next, err := s.Next(p)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateHome {
		t.Errorf("expected StateHome, got %d", next)
	}
}

// TestHomeExitOnClosedChan verifies homeState returns ErrClientExit when
// CmdCh is closed (simulates disconnect).
func TestHomeExitOnClosedChan(t *testing.T) {
	p := makeTestPlayer(1, "Bob")
	close(p.CmdCh)

	s := &homeState{}
	_, err := s.Next(p)
	if err != ErrClientExit {
		t.Errorf("expected ErrClientExit, got %v", err)
	}
}
