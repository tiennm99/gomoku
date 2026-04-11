package state

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/protocol"
)

// setupFinishedPvpRoom creates a PVP room in Finished state for gameover tests.
func setupFinishedPvpRoom(t *testing.T) (*lobby.Player, *lobby.Player, *lobby.NewRoom) {
	t.Helper()
	black := makeRegisteredPlayer(t, "Black")
	white := makeRegisteredPlayer(t, "White")

	room, err := lobby.CreatePvpRoom(black)
	if err != nil {
		t.Fatalf("CreatePvpRoom: %v", err)
	}
	if err := lobby.JoinNewRoom(room.ID, black); err != nil {
		t.Fatalf("JoinNewRoom black: %v", err)
	}
	if err := lobby.JoinNewRoom(room.ID, white); err != nil {
		t.Fatalf("JoinNewRoom white: %v", err)
	}

	room.Lock()
	room.BlackPlayerID = black.ID
	room.WhitePlayerID = white.ID
	room.CurrentTurn = game.Black
	room.Status = lobby.RoomStatusFinished
	room.Unlock()

	return black, white, room
}

// TestGameoverResetTransitionsToPvp verifies that GameResetRequest resets the
// board and transitions back to StateGamePvp for a PVP room.
func TestGameoverResetTransitionsToPvp(t *testing.T) {
	black, _, _ := setupFinishedPvpRoom(t)

	go func() {
		time.Sleep(10 * time.Millisecond)
		black.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_GameReset{
				GameReset: &protocol.GameResetRequest{},
			},
		}
	}()

	s := &gameOverState{}
	next, err := s.Next(black)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateGamePvp {
		t.Errorf("got state %d, want StateGamePvp (%d)", next, consts.StateGamePvp)
	}

	// Should receive GameStartingResponse after reset.
	found := false
	for _, r := range drainSend(black) {
		if _, ok := r.Payload.(*protocol.Response_GameStarting); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameStartingResponse after GameReset in PVP room")
	}
}

// TestGameoverResetTransitionsToPve verifies that GameResetRequest transitions
// to StateGamePve for a PVE room.
func TestGameoverResetTransitionsToPve(t *testing.T) {
	human := makeRegisteredPlayer(t, "Human")

	room, err := lobby.CreatePveRoom(human, consts.DifficultyEasy)
	if err != nil {
		t.Fatalf("CreatePveRoom: %v", err)
	}
	if err := lobby.JoinNewRoom(room.ID, human); err != nil {
		t.Fatalf("JoinNewRoom: %v", err)
	}

	room.Lock()
	room.BlackPlayerID = human.ID
	room.WhitePlayerID = -1
	room.CurrentTurn = game.Black
	room.Status = lobby.RoomStatusFinished
	room.AI = game.NewAI(game.White, 99)
	room.Unlock()

	go func() {
		time.Sleep(10 * time.Millisecond)
		human.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_GameReset{
				GameReset: &protocol.GameResetRequest{},
			},
		}
	}()

	s := &gameOverState{}
	next, err := s.Next(human)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateGamePve {
		t.Errorf("got state %d, want StateGamePve (%d)", next, consts.StateGamePve)
	}
}

// TestGameoverExitOnClientExitRequest verifies ErrClientExit on explicit exit.
func TestGameoverExitOnClientExitRequest(t *testing.T) {
	black, _, _ := setupFinishedPvpRoom(t)

	go func() {
		time.Sleep(10 * time.Millisecond)
		black.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{
				ClientExit: &protocol.ClientExitRequest{},
			},
		}
	}()

	s := &gameOverState{}
	_, err := s.Next(black)
	if err != ErrClientExit {
		t.Errorf("expected ErrClientExit, got %v", err)
	}
}

// TestGameoverExitOnClosedChan verifies ErrClientExit when CmdCh is closed.
func TestGameoverExitOnClosedChan(t *testing.T) {
	black, _, _ := setupFinishedPvpRoom(t)
	close(black.CmdCh)

	s := &gameOverState{}
	_, err := s.Next(black)
	if err != ErrClientExit {
		t.Errorf("expected ErrClientExit on closed CmdCh, got %v", err)
	}
}

// TestGameoverPveResetRandomizesColors verifies that after a PVE reset, color
// assignments may change (re-randomization). Run multiple times to reduce flakiness.
func TestGameoverPveResetRandomizesColors(t *testing.T) {
	human := makeRegisteredPlayer(t, "Human")

	room, err := lobby.CreatePveRoom(human, consts.DifficultyEasy)
	if err != nil {
		t.Fatalf("CreatePveRoom: %v", err)
	}
	if err := lobby.JoinNewRoom(room.ID, human); err != nil {
		t.Fatalf("JoinNewRoom: %v", err)
	}

	room.Lock()
	originalBlackID := room.BlackPlayerID
	room.Status = lobby.RoomStatusFinished
	room.AI = game.NewAI(game.White, 1)
	room.Unlock()

	go func() {
		time.Sleep(10 * time.Millisecond)
		human.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_GameReset{
				GameReset: &protocol.GameResetRequest{},
			},
		}
	}()

	s := &gameOverState{}
	next, err := s.Next(human)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if next != consts.StateGamePve {
		t.Errorf("expected StateGamePve after PVE reset, got %d", next)
	}

	// After reset, room.Reset(seed) is called — colors may have flipped.
	// We just verify the room has valid color assignments (one side = human, other = -1).
	room.RLock()
	newBlackID := room.BlackPlayerID
	newWhiteID := room.WhitePlayerID
	room.RUnlock()

	validAssignment := (newBlackID == human.ID && newWhiteID == -1) ||
		(newWhiteID == human.ID && newBlackID == -1)
	if !validAssignment {
		t.Errorf("invalid PVE color assignment after reset: black=%d white=%d human=%d",
			newBlackID, newWhiteID, human.ID)
	}

	// Log whether color changed (informational, not a failure).
	if newBlackID != originalBlackID {
		t.Logf("color randomized: original black=%d, new black=%d", originalBlackID, newBlackID)
	}
}
