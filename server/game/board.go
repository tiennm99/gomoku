// Package game provides pure game logic for Gomoku: board state, win detection, and AI.
// No dependency on network, state machine, or database layers.
package game

// Piece represents a board cell value.
type Piece int

const (
	Empty Piece = iota
	Black
	White
)

// GameResult is the outcome of a completed (or ongoing) game.
type GameResult int

const (
	InProgress GameResult = iota
	BlackWin
	WhiteWin
	Draw
)

const (
	BoardSize    = 15
	WinCondition = 5
)

// Board is a 15×15 Gomoku board. Value type — Clone() is a simple assignment.
type Board struct {
	cells     [BoardSize][BoardSize]Piece
	moveCount int
	result    GameResult
}

// NewBoard returns an empty board ready to play.
func NewBoard() Board {
	return Board{result: InProgress}
}

// IsValidMove returns true if (r, c) is in bounds and empty.
func (b *Board) IsValidMove(r, c int) bool {
	return r >= 0 && r < BoardSize &&
		c >= 0 && c < BoardSize &&
		b.cells[r][c] == Empty
}

// MakeMove places piece p at (r, c) and updates the result.
// Returns false if the move is invalid (out of bounds or cell occupied).
// Does NOT enforce game-over — that is the caller's responsibility.
func (b *Board) MakeMove(r, c int, p Piece) bool {
	if !b.IsValidMove(r, c) {
		return false
	}
	b.cells[r][c] = p
	b.moveCount++

	if b.checkWin(r, c, p) {
		if p == Black {
			b.result = BlackWin
		} else {
			b.result = WhiteWin
		}
	} else if b.moveCount >= BoardSize*BoardSize {
		b.result = Draw
	}
	return true
}

// checkWin checks the four axes through (r, c) for a winning line.
func (b *Board) checkWin(r, c int, p Piece) bool {
	dirs := [4][2]int{{0, 1}, {1, 0}, {1, 1}, {1, -1}}
	for _, d := range dirs {
		if b.countDir(r, c, d[0], d[1], p) >= WinCondition {
			return true
		}
	}
	return false
}

// countDir counts consecutive pieces of type p along an axis (both directions from r,c).
func (b *Board) countDir(r, c, dr, dc int, p Piece) int {
	count := 1
	for nr, nc := r+dr, c+dc; nr >= 0 && nr < BoardSize && nc >= 0 && nc < BoardSize && b.cells[nr][nc] == p; nr, nc = nr+dr, nc+dc {
		count++
	}
	for nr, nc := r-dr, c-dc; nr >= 0 && nr < BoardSize && nc >= 0 && nc < BoardSize && b.cells[nr][nc] == p; nr, nc = nr-dr, nc-dc {
		count++
	}
	return count
}

// GetPiece returns the piece at (r, c), or Empty if out of bounds.
func (b *Board) GetPiece(r, c int) Piece {
	if r < 0 || r >= BoardSize || c < 0 || c >= BoardSize {
		return Empty
	}
	return b.cells[r][c]
}

// Result returns the current game result.
func (b *Board) Result() GameResult { return b.result }

// MoveCount returns the total number of moves made.
func (b *Board) MoveCount() int { return b.moveCount }

// IsGameOver returns true when the game has ended (win or draw).
func (b *Board) IsGameOver() bool { return b.result != InProgress }

// Reset clears the board to initial state.
func (b *Board) Reset() {
	b.cells = [BoardSize][BoardSize]Piece{}
	b.moveCount = 0
	b.result = InProgress
}

// Clone returns a copy of the board (safe for AI tree search — no shared memory).
func (b Board) Clone() Board { return b }
