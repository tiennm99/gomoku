package game

import (
	"fmt"
	"strings"
)

// ValidMoves returns all empty cells as [row, col] pairs.
func ValidMoves(b *Board) [][2]int {
	moves := make([][2]int, 0, BoardSize*BoardSize)
	for r := 0; r < BoardSize; r++ {
		for c := 0; c < BoardSize; c++ {
			if b.IsValidMove(r, c) {
				moves = append(moves, [2]int{r, c})
			}
		}
	}
	return moves
}

// FormatBoard returns an ASCII representation of the board with row/col headers.
func FormatBoard(b *Board) string {
	var sb strings.Builder
	sb.WriteString("  ")
	for c := 0; c < BoardSize; c++ {
		sb.WriteString(fmt.Sprintf("%2d", c))
	}
	sb.WriteByte('\n')
	for r := 0; r < BoardSize; r++ {
		sb.WriteString(fmt.Sprintf("%2d", r))
		for c := 0; c < BoardSize; c++ {
			ch := '.'
			switch b.GetPiece(r, c) {
			case Black:
				ch = 'B'
			case White:
				ch = 'W'
			}
			sb.WriteByte(' ')
			sb.WriteRune(ch)
		}
		sb.WriteByte('\n')
	}
	return sb.String()
}

// WinnerMessage returns a human-readable outcome string.
func WinnerMessage(r GameResult) string {
	switch r {
	case BlackWin:
		return "Black player wins!"
	case WhiteWin:
		return "White player wins!"
	case Draw:
		return "Game ended in a draw!"
	default:
		return "Game in progress..."
	}
}
