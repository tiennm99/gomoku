package state

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/protocol"
)

// setupPvpGame creates a fully-started PVP room (2 players, colors assigned, status=Playing).
func setupPvpGame(t *testing.T) (black *lobby.Player, white *lobby.Player, room *lobby.Room) {
	t.Helper()
	black = makeRegisteredPlayer(t, "Black")
	white = makeRegisteredPlayer(t, "White")

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

	// Assign colors deterministically.
	room.Lock()
	room.BlackPlayerID = black.ID
	room.WhitePlayerID = white.ID
	room.CurrentTurn = game.Black
	room.Status = lobby.RoomStatusPlaying
	room.Unlock()

	return black, white, room
}

// sendMove enqueues a GameMoveRequest on the player's CmdCh.
func sendMove(p *lobby.Player, row, col int32) {
	p.CmdCh <- &protocol.Request{
		Payload: &protocol.Request_GameMove{
			GameMove: &protocol.GameMoveRequest{Row: row, Col: col},
		},
	}
}

// TestPvpMoveNotYourTurn verifies that a player moving out of turn gets GameMoveNotYourTurn.
func TestPvpMoveNotYourTurn(t *testing.T) {
	black, white, _ := setupPvpGame(t)

	// White tries to move first (Black's turn).
	go func() {
		time.Sleep(10 * time.Millisecond)
		sendMove(white, 7, 7)
		// Unblock white with exit after rejection.
		time.Sleep(20 * time.Millisecond)
		white.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
		}
	}()

	_ = black // kept for cleanup

	s := &gamePvpState{}
	_, err := s.Next(white)
	// Should exit (either ErrClientExit or disconnect).
	_ = err

	found := false
	for _, r := range drainSend(white) {
		if _, ok := r.Payload.(*protocol.Response_GameMoveNotYourTurn); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameMoveNotYourTurnResponse for out-of-turn move")
	}
}

// TestPvpMoveOutOfBounds verifies GameMoveOutOfBoundsResponse for invalid coords.
func TestPvpMoveOutOfBounds(t *testing.T) {
	black, white, _ := setupPvpGame(t)
	_ = white

	go func() {
		time.Sleep(10 * time.Millisecond)
		sendMove(black, -1, 0) // out of bounds
		time.Sleep(20 * time.Millisecond)
		black.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
		}
	}()

	s := &gamePvpState{}
	s.Next(black) //nolint:errcheck

	found := false
	for _, r := range drainSend(black) {
		if _, ok := r.Payload.(*protocol.Response_GameMoveOutOfBounds); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameMoveOutOfBoundsResponse for out-of-bounds move")
	}
}

// TestPvpValidMoveTransitionsContinues verifies that a valid move broadcasts
// GameMoveSuccessResponse. Uses two goroutines (one per player) for a full turn.
func TestPvpValidMoveAndBroadcast(t *testing.T) {
	black, white, _ := setupPvpGame(t)

	// Black plays goroutine.
	blackDone := make(chan consts.StateID, 1)
	go func() {
		s := &gamePvpState{}
		// Black plays 7,7 then exits.
		go func() {
			time.Sleep(10 * time.Millisecond)
			sendMove(black, 7, 7)
			time.Sleep(30 * time.Millisecond)
			black.CmdCh <- &protocol.Request{
				Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
			}
		}()
		next, _ := s.Next(black)
		blackDone <- next
	}()

	// White goroutine: exits immediately after a short wait.
	whiteDone := make(chan struct{}, 1)
	go func() {
		s := &gamePvpState{}
		go func() {
			time.Sleep(80 * time.Millisecond)
			white.CmdCh <- &protocol.Request{
				Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
			}
		}()
		s.Next(white) //nolint:errcheck
		whiteDone <- struct{}{}
	}()

	select {
	case <-blackDone:
	case <-time.After(3 * time.Second):
		t.Fatal("black goroutine did not complete within 3s")
	}
	select {
	case <-whiteDone:
	case <-time.After(3 * time.Second):
		t.Fatal("white goroutine did not complete within 3s")
	}

	// Black should have received GameMoveSuccessResponse after its own move.
	found := false
	for _, r := range drainSend(black) {
		if _, ok := r.Payload.(*protocol.Response_GameMoveSuccess); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameMoveSuccessResponse after valid move")
	}
}

// TestPvpWinDetection plays a winning sequence and verifies GameOver is reached.
// Interleaves Black and White moves with proper timing so turn order is respected:
// B(0,0) W(2,0) B(0,1) W(2,1) B(0,2) W(2,2) B(0,3) W(2,3) B(0,4) → Black wins.
func TestPvpWinDetection(t *testing.T) {
	black, white, _ := setupPvpGame(t)

	blackResult := make(chan consts.StateID, 1)
	whiteResult := make(chan consts.StateID, 1)

	// Feed moves with proper alternating delays.
	// Black moves at t=10,30,50,70,90ms; White at t=20,40,60,80ms.
	go func() {
		for i, col := range []int32{0, 1, 2, 3, 4} {
			time.Sleep(time.Duration(10+i*20) * time.Millisecond)
			sendMove(black, 0, col)
		}
	}()
	go func() {
		for i, col := range []int32{0, 1, 2, 3} {
			time.Sleep(time.Duration(20+i*20) * time.Millisecond)
			sendMove(white, 2, col)
		}
	}()

	go func() {
		s := &gamePvpState{}
		next, _ := s.Next(black)
		blackResult <- next
	}()
	go func() {
		s := &gamePvpState{}
		next, _ := s.Next(white)
		whiteResult <- next
	}()

	select {
	case next := <-blackResult:
		if next != consts.StateGameOver {
			t.Errorf("black: expected StateGameOver (%d) after win, got %d", consts.StateGameOver, next)
		}
	case <-time.After(5 * time.Second):
		t.Fatal("black goroutine timed out")
	}
	select {
	case <-whiteResult:
	case <-time.After(5 * time.Second):
		t.Fatal("white goroutine timed out")
	}

	// At least one player should have received GameOverResponse.
	allBlack := drainSend(black)
	allWhite := drainSend(white)
	found := false
	for _, r := range append(allBlack, allWhite...) {
		if _, ok := r.Payload.(*protocol.Response_GameOver); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameOverResponse after Black wins")
	}
}
