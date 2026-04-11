package lobby

import (
	"testing"
	"time"

	"github.com/tiennm99/gomoku/server/game"
)

// newTestRoom builds a minimal NewRoom for unit tests without going through the store.
func newTestRoom(t RoomType, ownerID int64) *NewRoom {
	r := &NewRoom{
		ID:            1,
		OwnerID:       ownerID,
		OwnerNickname: "owner",
		RoomType:      t,
		Status:        RoomStatusWaiting,
		Board:         game.NewBoard(),
		BlackPlayerID: ownerID,
		WhitePlayerID: -1,
		CurrentTurn:   game.Black,
		Players:       make(map[int64]*Player),
		Spectators:    make(map[int64]*Player),
		Difficulty:    1,
		CreatedAt:     time.Now(),
		LastActive:    time.Now(),
	}
	if t == RoomTypePve {
		r.AI = game.NewAI(game.White, 42)
	}
	return r
}

// TestRoom_ApplyMove_AdvancesTurn verifies CurrentTurn flips after each move.
func TestRoom_ApplyMove_AdvancesTurn(t *testing.T) {
	r := newTestRoom(RoomTypePvp, 1)

	if r.CurrentTurn != game.Black {
		t.Fatalf("initial turn should be Black")
	}
	_, err := r.ApplyMove(7, 7, game.Black, 1)
	if err != nil {
		t.Fatalf("ApplyMove: %v", err)
	}
	if r.CurrentTurn != game.White {
		t.Errorf("after Black move, turn should be White, got %v", r.CurrentTurn)
	}
	_, err = r.ApplyMove(7, 8, game.White, 2)
	if err != nil {
		t.Fatalf("ApplyMove: %v", err)
	}
	if r.CurrentTurn != game.Black {
		t.Errorf("after White move, turn should be Black, got %v", r.CurrentTurn)
	}
}

// TestRoom_ApplyMove_RecordsHistory verifies each move is appended to MoveHistory.
func TestRoom_ApplyMove_RecordsHistory(t *testing.T) {
	r := newTestRoom(RoomTypePvp, 1)

	_, _ = r.ApplyMove(0, 0, game.Black, 1)
	_, _ = r.ApplyMove(0, 1, game.White, 2)
	_, _ = r.ApplyMove(1, 0, game.Black, 1)

	if len(r.MoveHistory) != 3 {
		t.Errorf("expected 3 history entries, got %d", len(r.MoveHistory))
	}
	if r.MoveHistory[0].Row != 0 || r.MoveHistory[0].Col != 0 {
		t.Errorf("first move coords wrong: %+v", r.MoveHistory[0])
	}
	if r.MoveHistory[1].Piece != game.White {
		t.Errorf("second move piece wrong: %v", r.MoveHistory[1].Piece)
	}
}

// TestRoom_ApplyMove_DetectsWin verifies the game result propagates correctly.
func TestRoom_ApplyMove_DetectsWin(t *testing.T) {
	r := newTestRoom(RoomTypePvp, 1)

	// Black plays 5 in a row on row 0, columns 0-4.
	// White plays on row 1 between each black move (to keep valid alternating moves).
	moves := [][3]int{
		{0, 0, int(game.Black)},
		{1, 0, int(game.White)},
		{0, 1, int(game.Black)},
		{1, 1, int(game.White)},
		{0, 2, int(game.Black)},
		{1, 2, int(game.White)},
		{0, 3, int(game.Black)},
		{1, 3, int(game.White)},
		{0, 4, int(game.Black)}, // winning move
	}

	var result game.GameResult
	var err error
	for _, m := range moves {
		result, err = r.ApplyMove(m[0], m[1], game.Piece(m[2]), int64(m[2]))
		if err != nil {
			t.Fatalf("ApplyMove(%d,%d): %v", m[0], m[1], err)
		}
	}

	if result != game.BlackWin {
		t.Errorf("expected BlackWin, got %v", result)
	}
}

// TestRoom_Reset_ClearsBoardAndHistory verifies Reset restores the room to initial state.
func TestRoom_Reset_ClearsBoardAndHistory(t *testing.T) {
	r := newTestRoom(RoomTypePvp, 1)
	_, _ = r.ApplyMove(7, 7, game.Black, 1)
	_, _ = r.ApplyMove(7, 8, game.White, 2)

	r.Reset(100)

	if len(r.MoveHistory) != 0 {
		t.Errorf("MoveHistory should be empty after Reset, got %d entries", len(r.MoveHistory))
	}
	if r.CurrentTurn != game.Black {
		t.Errorf("CurrentTurn should be Black after Reset, got %v", r.CurrentTurn)
	}
	if r.Status != RoomStatusWaiting {
		t.Errorf("Status should be Waiting after Reset, got %v", r.Status)
	}
	// Verify the board is truly empty.
	if r.Board.GetPiece(7, 7) != game.Empty {
		t.Error("board cell (7,7) should be Empty after Reset")
	}
}

// TestRoom_Reset_Pve_RerandomizesColor verifies PVE rooms re-assign colors on Reset.
func TestRoom_Reset_Pve_RerandomizesColor(t *testing.T) {
	// Run many resets and check both assignments are observed.
	seenBlack := false
	seenWhite := false
	ownerID := int64(1)

	for i := int64(0); i < 100; i++ {
		r := newTestRoom(RoomTypePve, ownerID)
		// Force a known initial color to verify it can change.
		r.BlackPlayerID = ownerID
		r.WhitePlayerID = -1

		r.Reset(i) // seed varies each iteration

		if r.BlackPlayerID == ownerID {
			seenBlack = true
		}
		if r.WhitePlayerID == ownerID {
			seenWhite = true
		}
		if seenBlack && seenWhite {
			break
		}
	}

	if !seenBlack {
		t.Error("never saw human assigned Black in 100 PVE resets")
	}
	if !seenWhite {
		t.Error("never saw human assigned White in 100 PVE resets")
	}
}

// TestRoom_Snapshot_DeepCopiesBoard verifies the snapshot board is independent.
func TestRoom_Snapshot_DeepCopiesBoard(t *testing.T) {
	r := newTestRoom(RoomTypePvp, 1)
	_, _ = r.ApplyMove(7, 7, game.Black, 1)

	snap := r.Snapshot()

	// Mutate the live board — snapshot must not change.
	_, _ = r.ApplyMove(0, 0, game.White, 2)

	if snap.Board.GetPiece(0, 0) != game.Empty {
		t.Error("snapshot board was mutated after live board changed (not a deep copy)")
	}
	if snap.Board.GetPiece(7, 7) != game.Black {
		t.Error("snapshot board missing original move at (7,7)")
	}
}

// TestRoom_PlayerCount verifies PlayerCount matches len(Players).
func TestRoom_PlayerCount(t *testing.T) {
	r := newTestRoom(RoomTypePvp, 1)

	if r.PlayerCount() != 0 {
		t.Errorf("expected 0, got %d", r.PlayerCount())
	}

	r.Players[1] = &Player{ID: 1}
	if r.PlayerCount() != 1 {
		t.Errorf("expected 1, got %d", r.PlayerCount())
	}

	r.Players[2] = &Player{ID: 2}
	if r.PlayerCount() != 2 {
		t.Errorf("expected 2, got %d", r.PlayerCount())
	}
}

// TestRoom_IsOwner verifies ownership check.
func TestRoom_IsOwner(t *testing.T) {
	r := newTestRoom(RoomTypePvp, 42)

	if !r.IsOwner(42) {
		t.Error("player 42 should be owner")
	}
	if r.IsOwner(99) {
		t.Error("player 99 should not be owner")
	}
}
