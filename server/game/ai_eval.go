package game

// Threat-pattern weights used by the Hard AI's minimax leaf evaluator.
const (
	scoreFive       = 10_000_000 // guaranteed win — dominate everything
	scoreOpenFour   = 100_000
	scoreClosedFour = 10_000
	scoreOpenThree  = 1_000
	scoreClosedThree = 100
	scoreOpenTwo    = 10
)

// evaluatePosition returns a score for the board from aiPiece's perspective.
// Positive means AI is ahead; negative means opponent is ahead.
// Pure function — no AI struct receiver needed.
func evaluatePosition(b *Board, aiPiece Piece) int {
	opp := White
	if aiPiece == White {
		opp = Black
	}
	return sumPatternScore(b, aiPiece) - sumPatternScore(b, opp)
}

// sumPatternScore totals all pattern weights for piece p across all lines on the board.
func sumPatternScore(b *Board, p Piece) int {
	score := 0
	dirs := [4][2]int{{0, 1}, {1, 0}, {1, 1}, {1, -1}}

	for r := 0; r < BoardSize; r++ {
		for c := 0; c < BoardSize; c++ {
			if b.GetPiece(r, c) != p {
				continue
			}
			for _, d := range dirs {
				// Only score lines where this cell is the "start" to avoid double-counting.
				pr, pc := r-d[0], c-d[1]
				if pr >= 0 && pr < BoardSize && pc >= 0 && pc < BoardSize && b.GetPiece(pr, pc) == p {
					continue // predecessor in same direction belongs to same run — skip
				}
				score += scoreLine(b, r, c, d[0], d[1], p)
			}
		}
	}
	return score
}

// scoreLine scores a single run starting at (r,c) in direction (dr,dc) for piece p.
// It classifies the run as five, open-four, closed-four, open-three, etc.
func scoreLine(b *Board, r, c, dr, dc int, p Piece) int {
	// Count consecutive pieces in positive direction.
	count := 0
	nr, nc := r, c
	for nr >= 0 && nr < BoardSize && nc >= 0 && nc < BoardSize && b.GetPiece(nr, nc) == p {
		count++
		nr += dr
		nc += dc
	}

	if count == 0 {
		return 0
	}
	if count >= WinCondition {
		return scoreFive
	}

	// Check open ends: cell before start and cell after end.
	beforeR, beforeC := r-dr, c-dc
	openBefore := isOpen(b, beforeR, beforeC)

	afterR, afterC := nr, nc // first cell after the run
	openAfter := isOpen(b, afterR, afterC)

	openEnds := 0
	if openBefore {
		openEnds++
	}
	if openAfter {
		openEnds++
	}

	switch count {
	case 4:
		if openEnds == 2 {
			return scoreOpenFour
		}
		if openEnds == 1 {
			return scoreClosedFour
		}
	case 3:
		if openEnds == 2 {
			return scoreOpenThree
		}
		if openEnds == 1 {
			return scoreClosedThree
		}
	case 2:
		if openEnds >= 1 {
			return scoreOpenTwo
		}
	}
	return 0
}

// isOpen returns true if the cell at (r,c) is in-bounds and empty (a free end for a run).
func isOpen(b *Board, r, c int) bool {
	return r >= 0 && r < BoardSize && c >= 0 && c < BoardSize && b.GetPiece(r, c) == Empty
}

// candidateMoves returns empty cells within Chebyshev distance `radius` of any existing stone.
// On an empty board it returns only the center cell {7,7}.
func candidateMoves(b *Board, radius int) [][2]int {
	if b.MoveCount() == 0 {
		return [][2]int{{BoardSize / 2, BoardSize / 2}}
	}

	seen := [BoardSize][BoardSize]bool{}
	var result [][2]int

	for r := 0; r < BoardSize; r++ {
		for c := 0; c < BoardSize; c++ {
			if b.GetPiece(r, c) == Empty {
				continue
			}
			// Expand radius around this stone.
			rMin := max0(r - radius)
			rMax := minN(r+radius, BoardSize-1)
			cMin := max0(c - radius)
			cMax := minN(c+radius, BoardSize-1)
			for nr := rMin; nr <= rMax; nr++ {
				for nc := cMin; nc <= cMax; nc++ {
					if !seen[nr][nc] && b.GetPiece(nr, nc) == Empty {
						seen[nr][nc] = true
						result = append(result, [2]int{nr, nc})
					}
				}
			}
		}
	}
	return result
}
