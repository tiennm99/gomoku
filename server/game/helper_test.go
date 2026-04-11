package game

import (
	"strings"
	"testing"
)

func TestValidMovesFullBoard(t *testing.T) {
	b := NewBoard()
	moves := ValidMoves(&b)
	if len(moves) != BoardSize*BoardSize {
		t.Errorf("expected %d valid moves on empty board, got %d", BoardSize*BoardSize, len(moves))
	}
}

func TestValidMovesAfterOnePlacement(t *testing.T) {
	b := NewBoard()
	b.MakeMove(7, 7, Black)
	moves := ValidMoves(&b)
	if len(moves) != BoardSize*BoardSize-1 {
		t.Errorf("expected %d valid moves, got %d", BoardSize*BoardSize-1, len(moves))
	}
	for _, m := range moves {
		if m[0] == 7 && m[1] == 7 {
			t.Error("occupied cell (7,7) should not appear in valid moves")
		}
	}
}

func TestFormatBoardContainsSymbols(t *testing.T) {
	b := NewBoard()
	b.MakeMove(7, 7, Black)
	b.MakeMove(7, 8, White)
	out := FormatBoard(&b)
	if !strings.Contains(out, "B") {
		t.Error("board output should contain 'B' for Black")
	}
	if !strings.Contains(out, "W") {
		t.Error("board output should contain 'W' for White")
	}
	if !strings.Contains(out, ".") {
		t.Error("board output should contain '.' for empty cells")
	}
}

func TestFormatBoardHasHeaders(t *testing.T) {
	b := NewBoard()
	out := FormatBoard(&b)
	// Should have 15 row lines + 1 header line
	lines := strings.Split(strings.TrimRight(out, "\n"), "\n")
	if len(lines) != BoardSize+1 {
		t.Errorf("expected %d lines, got %d", BoardSize+1, len(lines))
	}
}

func TestFormatBoardEmptyAllDots(t *testing.T) {
	b := NewBoard()
	out := FormatBoard(&b)
	if strings.Contains(out, "B") || strings.Contains(out, "W") {
		t.Error("empty board should not contain B or W")
	}
}

func TestWinnerMessage(t *testing.T) {
	cases := []struct {
		result GameResult
		want   string
	}{
		{BlackWin, "Black player wins!"},
		{WhiteWin, "White player wins!"},
		{Draw, "Game ended in a draw!"},
		{InProgress, "Game in progress..."},
	}
	for _, tc := range cases {
		got := WinnerMessage(tc.result)
		if got != tc.want {
			t.Errorf("WinnerMessage(%v): want %q, got %q", tc.result, tc.want, got)
		}
	}
}
