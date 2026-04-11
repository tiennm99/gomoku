package state

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/protocol"
)

// setupPveGame creates a PVE room with the human assigned Black (AI=White).
// seed=42 gives deterministic AI behavior.
func setupPveGame(t *testing.T, difficulty int) (human *database.Player, room *database.NewRoom) {
	t.Helper()
	human = makeRegisteredPlayer(t, "Human")

	room, err := database.CreatePveRoom(human, difficulty)
	if err != nil {
		t.Fatalf("CreatePveRoom: %v", err)
	}
	if err := database.JoinNewRoom(room.ID, human); err != nil {
		t.Fatalf("JoinNewRoom human: %v", err)
	}

	// Override AI with fixed seed for determinism.
	room.Lock()
	room.BlackPlayerID = human.ID
	room.WhitePlayerID = -1
	room.CurrentTurn = game.Black
	room.Status = database.RoomStatusPlaying
	room.AI = game.NewAI(game.White, 42)
	room.Unlock()

	return human, room
}

// TestPveHumanMoveAndAIResponds verifies that after a valid human move,
// the AI makes a move and both are broadcast as GameMoveSuccessResponse.
func TestPveHumanMoveAndAIResponds(t *testing.T) {
	human, _ := setupPveGame(t, consts.DifficultyEasy)

	// Human plays (7,7) then exits.
	go func() {
		time.Sleep(10 * time.Millisecond)
		sendMove(human, 7, 7)
		time.Sleep(100 * time.Millisecond)
		human.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
		}
	}()

	s := &gamePveState{}
	s.Next(human) //nolint:errcheck

	responses := drainSend(human)
	moveSucCount := 0
	for _, r := range responses {
		if _, ok := r.Payload.(*protocol.Response_GameMoveSuccess); ok {
			moveSucCount++
		}
	}
	// Expect at least 2: human move + AI move.
	if moveSucCount < 2 {
		t.Errorf("expected at least 2 GameMoveSuccessResponse (human+AI), got %d", moveSucCount)
	}
}

// TestPveOutOfBoundsReject verifies GameMoveOutOfBoundsResponse for bad coords.
func TestPveOutOfBoundsReject(t *testing.T) {
	human, _ := setupPveGame(t, consts.DifficultyEasy)

	go func() {
		time.Sleep(10 * time.Millisecond)
		sendMove(human, 15, 0) // out of bounds (BoardSize=15, valid: 0-14)
		time.Sleep(20 * time.Millisecond)
		human.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
		}
	}()

	s := &gamePveState{}
	s.Next(human) //nolint:errcheck

	found := false
	for _, r := range drainSend(human) {
		if _, ok := r.Payload.(*protocol.Response_GameMoveOutOfBounds); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameMoveOutOfBoundsResponse for out-of-bounds move")
	}
}

// TestPveOccupiedCellReject verifies GameMoveOccupiedResponse for repeated cell.
func TestPveOccupiedCellReject(t *testing.T) {
	human, _ := setupPveGame(t, consts.DifficultyEasy)

	go func() {
		time.Sleep(10 * time.Millisecond)
		sendMove(human, 7, 7) // first move — valid
		time.Sleep(150 * time.Millisecond) // wait for AI to move
		sendMove(human, 7, 7) // same cell — occupied
		time.Sleep(30 * time.Millisecond)
		human.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
		}
	}()

	s := &gamePveState{}
	s.Next(human) //nolint:errcheck

	found := false
	for _, r := range drainSend(human) {
		if _, ok := r.Payload.(*protocol.Response_GameMoveOccupied); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameMoveOccupiedResponse for repeated cell")
	}
}

// TestPveGameOverOnHumanWin plays enough moves for human to win (row 0, cols 0-4).
// AI is easy (random) so this should terminate with a GameOverResponse.
func TestPveGameOverOnHumanWin(t *testing.T) {
	human, room := setupPveGame(t, consts.DifficultyEasy)

	result := make(chan consts.StateID, 1)
	go func() {
		s := &gamePveState{}
		// Feed human moves in a row — human wins when 5 in a row achieved.
		// Use a goroutine that keeps retrying a column until accepted.
		go func() {
			col := int32(0)
			for col < 5 {
				time.Sleep(50 * time.Millisecond)
				sendMove(human, 0, col)
				col++
			}
		}()
		next, _ := s.Next(human)
		result <- next
	}()

	_ = room

	select {
	case next := <-result:
		if next != consts.StateGameOver {
			t.Errorf("expected StateGameOver (%d), got %d", consts.StateGameOver, next)
		}
	case <-time.After(5 * time.Second):
		t.Fatal("PVE game did not complete within 5s")
	}

	// Should have GameOverResponse in send buffer.
	found := false
	for _, r := range drainSend(human) {
		if _, ok := r.Payload.(*protocol.Response_GameOver); ok {
			found = true
			break
		}
	}
	if !found {
		t.Error("expected GameOverResponse after human wins PVE game")
	}
}

// TestPveAIFirstWhenHumanIsWhite verifies that when human is White, the AI
// (Black) moves first, producing a GameMoveSuccessResponse before any human input.
func TestPveAIFirstWhenHumanIsWhite(t *testing.T) {
	human := makeRegisteredPlayer(t, "HumanWhite")

	room, err := database.CreatePveRoom(human, consts.DifficultyEasy)
	if err != nil {
		t.Fatalf("CreatePveRoom: %v", err)
	}
	if err := database.JoinNewRoom(room.ID, human); err != nil {
		t.Fatalf("JoinNewRoom: %v", err)
	}

	// Force human = White, AI = Black.
	room.Lock()
	room.WhitePlayerID = human.ID
	room.BlackPlayerID = -1
	room.CurrentTurn = game.Black
	room.Status = database.RoomStatusPlaying
	room.AI = game.NewAI(game.Black, 42)
	room.Unlock()

	// Give human a move after a delay, then exit.
	go func() {
		time.Sleep(200 * time.Millisecond)
		sendMove(human, 7, 6)
		time.Sleep(100 * time.Millisecond)
		human.CmdCh <- &protocol.Request{
			Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
		}
	}()

	s := &gamePveState{}
	s.Next(human) //nolint:errcheck

	// First response must be a GameMoveSuccessResponse (AI's Black move).
	responses := drainSend(human)
	if len(responses) == 0 {
		t.Fatal("expected at least one response (AI first move), got none")
	}
	if _, ok := responses[0].Payload.(*protocol.Response_GameMoveSuccess); !ok {
		t.Errorf("expected first response to be GameMoveSuccess (AI move), got %T", responses[0].Payload)
	}
}
