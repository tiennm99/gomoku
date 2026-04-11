package game

import "sort"

const (
	scoreAIWin  = 1_000_000
	scoreOppWin = -1_000_000
)

// hardMove uses minimax depth-3 with alpha-beta pruning.
// Candidates are cells within Chebyshev distance 2 of existing stones.
// Move ordering (descending eval score) improves alpha-beta cutoffs.
func (a *AI) hardMove(b *Board) (int, int) {
	candidates := candidateMoves(b, 2)
	if len(candidates) == 0 {
		return 7, 7
	}

	// Order candidates by 1-ply eval score descending for better pruning.
	type scored struct {
		r, c  int
		score int
	}
	ordered := make([]scored, 0, len(candidates))
	for _, m := range candidates {
		clone := b.Clone()
		clone.MakeMove(m[0], m[1], a.aiPiece)
		s := evaluatePosition(&clone, a.aiPiece)
		ordered = append(ordered, scored{m[0], m[1], s})
	}
	sort.Slice(ordered, func(i, j int) bool {
		return ordered[i].score > ordered[j].score
	})

	bestScore := scoreOppWin - 1
	bestR, bestC := ordered[0].r, ordered[0].c
	alpha := scoreOppWin - 1
	beta := scoreAIWin + 1

	for _, m := range ordered {
		clone := b.Clone()
		clone.MakeMove(m.r, m.c, a.aiPiece)

		// hardMove is ply-1; pass depth=2 so total search depth = 3.
		score := a.minimax(&clone, 2, alpha, beta, false)
		if score > bestScore {
			bestScore = score
			bestR, bestC = m.r, m.c
		}
		if score > alpha {
			alpha = score
		}
		if alpha >= beta {
			break
		}
	}
	return bestR, bestC
}

// minimax performs alpha-beta search from the current board state.
// maximizing=true means it is the AI's turn to move.
// depth counts remaining plies; depth=0 returns the static evaluation.
func (a *AI) minimax(b *Board, depth int, alpha, beta int, maximizing bool) int {
	// Terminal node checks.
	if b.IsGameOver() {
		switch b.Result() {
		case BlackWin:
			if a.aiPiece == Black {
				return scoreAIWin
			}
			return scoreOppWin
		case WhiteWin:
			if a.aiPiece == White {
				return scoreAIWin
			}
			return scoreOppWin
		case Draw:
			return 0
		}
	}
	if depth == 0 {
		return evaluatePosition(b, a.aiPiece)
	}

	candidates := candidateMoves(b, 2)
	if len(candidates) == 0 {
		return evaluatePosition(b, a.aiPiece)
	}

	// Light move ordering at inner nodes for pruning efficiency.
	movePiece := a.opponentPiece
	if maximizing {
		movePiece = a.aiPiece
	}
	type scored struct {
		r, c  int
		score int
	}
	ordered := make([]scored, 0, len(candidates))
	for _, m := range candidates {
		clone := b.Clone()
		clone.MakeMove(m[0], m[1], movePiece)
		s := evaluatePosition(&clone, a.aiPiece)
		ordered = append(ordered, scored{m[0], m[1], s})
	}
	if maximizing {
		sort.Slice(ordered, func(i, j int) bool { return ordered[i].score > ordered[j].score })
	} else {
		sort.Slice(ordered, func(i, j int) bool { return ordered[i].score < ordered[j].score })
	}

	if maximizing {
		best := scoreOppWin - 1
		for _, m := range ordered {
			clone := b.Clone()
			clone.MakeMove(m.r, m.c, a.aiPiece)
			score := a.minimax(&clone, depth-1, alpha, beta, false)
			if score > best {
				best = score
			}
			if score > alpha {
				alpha = score
			}
			if alpha >= beta {
				break
			}
		}
		return best
	}

	// Minimizing (opponent's turn).
	best := scoreAIWin + 1
	for _, m := range ordered {
		clone := b.Clone()
		clone.MakeMove(m.r, m.c, a.opponentPiece)
		score := a.minimax(&clone, depth-1, alpha, beta, true)
		if score < best {
			best = score
		}
		if score < beta {
			beta = score
		}
		if alpha >= beta {
			break
		}
	}
	return best
}
