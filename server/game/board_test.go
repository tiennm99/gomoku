package game

import (
	"testing"
)

// --- Win detection ---

func TestHorizontalWin(t *testing.T) {
	b := NewBoard()
	for col := 0; col < 5; col++ {
		if !b.MakeMove(7, col, Black) {
			t.Fatalf("MakeMove(7,%d) failed", col)
		}
	}
	if b.Result() != BlackWin {
		t.Errorf("expected BlackWin, got %v", b.Result())
	}
	if !b.IsGameOver() {
		t.Error("IsGameOver() should be true")
	}
}

func TestVerticalWin(t *testing.T) {
	b := NewBoard()
	for row := 0; row < 5; row++ {
		b.MakeMove(row, 7, Black)
	}
	if b.Result() != BlackWin {
		t.Errorf("expected BlackWin, got %v", b.Result())
	}
}

func TestDiagonalWin(t *testing.T) {
	b := NewBoard()
	for i := 0; i < 5; i++ {
		b.MakeMove(i, i, Black)
	}
	if b.Result() != BlackWin {
		t.Errorf("expected BlackWin, got %v", b.Result())
	}
}

func TestAntiDiagonalWin(t *testing.T) {
	b := NewBoard()
	for i := 0; i < 5; i++ {
		b.MakeMove(i, 14-i, Black)
	}
	if b.Result() != BlackWin {
		t.Errorf("expected BlackWin, got %v", b.Result())
	}
}

func TestWhiteWin(t *testing.T) {
	b := NewBoard()
	for col := 3; col < 8; col++ {
		b.MakeMove(5, col, White)
	}
	if b.Result() != WhiteWin {
		t.Errorf("expected WhiteWin, got %v", b.Result())
	}
}

func TestWinByPlacingMiddlePiece(t *testing.T) {
	b := NewBoard()
	b.MakeMove(7, 0, Black)
	b.MakeMove(7, 1, Black)
	b.MakeMove(7, 3, Black)
	b.MakeMove(7, 4, Black)
	if b.Result() != InProgress {
		t.Error("should be InProgress before gap filled")
	}
	b.MakeMove(7, 2, Black)
	if b.Result() != BlackWin {
		t.Errorf("expected BlackWin after filling gap, got %v", b.Result())
	}
}

func TestWinAtTopEdge(t *testing.T) {
	b := NewBoard()
	for col := 0; col < 5; col++ {
		b.MakeMove(0, col, Black)
	}
	if b.Result() != BlackWin {
		t.Errorf("expected BlackWin at top edge, got %v", b.Result())
	}
}

func TestWinAtBottomRightCorner(t *testing.T) {
	b := NewBoard()
	for i := 0; i < 5; i++ {
		b.MakeMove(14-i, 14-i, White)
	}
	if b.Result() != WhiteWin {
		t.Errorf("expected WhiteWin at bottom-right corner, got %v", b.Result())
	}
}

func TestFourInARowNotWin(t *testing.T) {
	b := NewBoard()
	for col := 0; col < 4; col++ {
		b.MakeMove(7, col, Black)
	}
	if b.Result() != InProgress {
		t.Error("4 in a row should not be a win")
	}
	if b.IsGameOver() {
		t.Error("IsGameOver() should be false")
	}
}

func TestSixInARowIsAlsoWin(t *testing.T) {
	// Standard Gomoku: 6+ in a row still wins (no overline restriction)
	b := NewBoard()
	for col := 0; col < 6; col++ {
		b.MakeMove(7, col, Black)
	}
	if b.Result() != BlackWin {
		t.Errorf("6 in a row should be BlackWin, got %v", b.Result())
	}
}

// --- Move validation ---

func TestInvalidMoveOccupied(t *testing.T) {
	b := NewBoard()
	if !b.MakeMove(7, 7, Black) {
		t.Fatal("first move should succeed")
	}
	if b.MakeMove(7, 7, White) {
		t.Error("move on occupied cell should fail")
	}
}

func TestOutOfBounds(t *testing.T) {
	b := NewBoard()
	cases := [][2]int{{-1, 7}, {7, -1}, {15, 7}, {7, 15}}
	for _, c := range cases {
		if b.MakeMove(c[0], c[1], Black) {
			t.Errorf("out-of-bounds move (%d,%d) should fail", c[0], c[1])
		}
	}
}

func TestGetPieceOutOfBoundsReturnsEmpty(t *testing.T) {
	b := NewBoard()
	oob := [][2]int{{-1, 0}, {0, -1}, {15, 0}, {0, 15}}
	for _, c := range oob {
		if b.GetPiece(c[0], c[1]) != Empty {
			t.Errorf("GetPiece(%d,%d) should return Empty", c[0], c[1])
		}
	}
}

func TestMoveCountTracking(t *testing.T) {
	b := NewBoard()
	if b.MoveCount() != 0 {
		t.Error("initial move count should be 0")
	}
	b.MakeMove(7, 7, Black)
	if b.MoveCount() != 1 {
		t.Error("move count should be 1")
	}
	b.MakeMove(7, 8, White)
	if b.MoveCount() != 2 {
		t.Error("move count should be 2")
	}
	// Failed move should not increment
	b.MakeMove(7, 7, Black)
	if b.MoveCount() != 2 {
		t.Error("failed move should not increment count")
	}
}

func TestBoardReset(t *testing.T) {
	b := NewBoard()
	b.MakeMove(7, 7, Black)
	b.MakeMove(0, 0, White)
	b.Reset()

	if b.MoveCount() != 0 {
		t.Error("move count after reset should be 0")
	}
	if b.Result() != InProgress {
		t.Error("result after reset should be InProgress")
	}
	if b.GetPiece(7, 7) != Empty {
		t.Error("(7,7) should be empty after reset")
	}
	if b.GetPiece(0, 0) != Empty {
		t.Error("(0,0) should be empty after reset")
	}
	if b.IsGameOver() {
		t.Error("IsGameOver() should be false after reset")
	}
}

func TestNoMoveAfterGameOver_BoardAllows(t *testing.T) {
	// Board is a low-level data structure; game-over enforcement is at the server level.
	b := NewBoard()
	for col := 0; col < 5; col++ {
		b.MakeMove(7, col, Black)
	}
	if b.Result() != BlackWin {
		t.Fatal("expected BlackWin")
	}
	// Position (7,5) is valid and Board.MakeMove still accepts it.
	if !b.MakeMove(7, 5, White) {
		t.Error("board-level MakeMove should succeed even after game over")
	}
}

// --- Clone ---

func TestCloneIsIndependent(t *testing.T) {
	b := NewBoard()
	b.MakeMove(7, 7, Black)
	clone := b.Clone()
	clone.MakeMove(0, 0, White)

	if b.GetPiece(0, 0) != Empty {
		t.Error("clone should not affect original")
	}
	if clone.GetPiece(7, 7) != Black {
		t.Error("clone should share existing state")
	}
}

// --- Table-driven: all 4 win directions near board boundaries ---

func TestWinDirections_TableDriven(t *testing.T) {
	type testCase struct {
		name  string
		moves [][2]int
		piece Piece
		want  GameResult
	}
	cases := []testCase{
		{
			name:  "horizontal_center",
			moves: [][2]int{{7, 5}, {7, 6}, {7, 7}, {7, 8}, {7, 9}},
			piece: Black, want: BlackWin,
		},
		{
			name:  "vertical_center",
			moves: [][2]int{{5, 7}, {6, 7}, {7, 7}, {8, 7}, {9, 7}},
			piece: White, want: WhiteWin,
		},
		{
			name:  "diagonal_center",
			moves: [][2]int{{3, 3}, {4, 4}, {5, 5}, {6, 6}, {7, 7}},
			piece: Black, want: BlackWin,
		},
		{
			name:  "antidiag_center",
			moves: [][2]int{{3, 11}, {4, 10}, {5, 9}, {6, 8}, {7, 7}},
			piece: White, want: WhiteWin,
		},
		{
			name:  "horizontal_left_edge",
			moves: [][2]int{{7, 0}, {7, 1}, {7, 2}, {7, 3}, {7, 4}},
			piece: Black, want: BlackWin,
		},
		{
			name:  "vertical_top_edge",
			moves: [][2]int{{0, 7}, {1, 7}, {2, 7}, {3, 7}, {4, 7}},
			piece: Black, want: BlackWin,
		},
		{
			name:  "four_in_row_no_win",
			moves: [][2]int{{7, 0}, {7, 1}, {7, 2}, {7, 3}},
			piece: Black, want: InProgress,
		},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			b := NewBoard()
			for _, m := range tc.moves {
				b.MakeMove(m[0], m[1], tc.piece)
			}
			if b.Result() != tc.want {
				t.Errorf("want %v, got %v", tc.want, b.Result())
			}
		})
	}
}
