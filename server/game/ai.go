package game

import (
	"math/rand"
)

// AI plays Gomoku at three difficulty levels:
//   1 = Easy   (uniform random)
//   2 = Medium (win/block heuristic)
//   3 = Hard   (minimax depth-3 + alpha-beta)
type AI struct {
	aiPiece       Piece
	opponentPiece Piece
	rng           *rand.Rand
}

// NewAI creates an AI that plays as aiPiece with a seeded RNG (use seed=42 in tests).
func NewAI(aiPiece Piece, seed int64) *AI {
	opp := White
	if aiPiece == White {
		opp = Black
	}
	return &AI{
		aiPiece:       aiPiece,
		opponentPiece: opp,
		rng:           rand.New(rand.NewSource(seed)),
	}
}

// NextMove returns the AI's chosen (row, col) for the given board and difficulty.
// ok is false only when there are no valid moves at all.
func (a *AI) NextMove(b *Board, difficulty int) (row, col int, ok bool) {
	moves := ValidMoves(b)
	if len(moves) == 0 {
		return 0, 0, false
	}
	var r, c int
	switch difficulty {
	case 2:
		r, c = a.mediumMove(b)
	case 3:
		r, c = a.hardMove(b)
	default:
		r, c = a.easyMove(b)
	}
	return r, c, true
}

// easyMove picks a uniformly random valid move.
func (a *AI) easyMove(b *Board) (int, int) {
	moves := ValidMoves(b)
	m := moves[a.rng.Intn(len(moves))]
	return m[0], m[1]
}

// mediumMove: win immediately if possible, else block opponent's immediate win,
// else fall back to the strategic (center-proximity) heuristic.
func (a *AI) mediumMove(b *Board) (int, int) {
	if r, c, ok := findWinningMove(b, a.aiPiece); ok {
		return r, c
	}
	if r, c, ok := findWinningMove(b, a.opponentPiece); ok {
		return r, c
	}
	return a.strategicMove(b)
}

// strategicMove scores every empty cell by center-proximity + neighbour density
// and returns the best one (tie-breaks via scan order — deterministic).
func (a *AI) strategicMove(b *Board) (int, int) {
	bestScore := -1
	br, bc := 7, 7
	for r := 0; r < BoardSize; r++ {
		for c := 0; c < BoardSize; c++ {
			if !b.IsValidMove(r, c) {
				continue
			}
			score := a.positionScore(b, r, c)
			if score > bestScore {
				bestScore = score
				br, bc = r, c
			}
		}
	}
	return br, bc
}

// positionScore is a cheap tie-breaker for the Medium heuristic: prefer
// center positions and cells near existing pieces.
func (a *AI) positionScore(b *Board, r, c int) int {
	score := 0
	centerDist := abs(r-BoardSize/2) + abs(c-BoardSize/2)
	score += (BoardSize - centerDist) * 2

	rMin := max0(r - 2)
	rMax := minN(r+2, BoardSize-1)
	cMin := max0(c - 2)
	cMax := minN(c+2, BoardSize-1)
	for nr := rMin; nr <= rMax; nr++ {
		for nc := cMin; nc <= cMax; nc++ {
			if b.GetPiece(nr, nc) != Empty {
				score += 10
			}
		}
	}
	return score
}

// findWinningMove returns the first empty cell where placing piece p produces a win.
// Used by mediumMove (win/block) and also referenced by hardMove terminal detection.
func findWinningMove(b *Board, p Piece) (row, col int, ok bool) {
	for r := 0; r < BoardSize; r++ {
		for c := 0; c < BoardSize; c++ {
			if b.IsValidMove(r, c) {
				clone := b.Clone()
				clone.MakeMove(r, c, p)
				if clone.IsGameOver() && clone.Result() != Draw {
					return r, c, true
				}
			}
		}
	}
	return 0, 0, false
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func max0(x int) int {
	if x < 0 {
		return 0
	}
	return x
}

func minN(x, n int) int {
	if x > n {
		return n
	}
	return x
}
