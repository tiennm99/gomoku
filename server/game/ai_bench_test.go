package game

import "testing"

// midgameBoard builds a 30-stone board representative of a real mid-game position.
// Stones alternate Black/White outward from center in a compact cluster.
func midgameBoard() Board {
	b := NewBoard()
	moves := [][3]int{
		// row, col, piece (0=Black,1=White)
		{7, 7, 0}, {7, 8, 1},
		{8, 7, 0}, {8, 8, 1},
		{6, 7, 0}, {6, 8, 1},
		{7, 6, 0}, {7, 9, 1},
		{8, 6, 0}, {8, 9, 1},
		{6, 6, 0}, {6, 9, 1},
		{9, 7, 0}, {9, 8, 1},
		{5, 7, 0}, {5, 8, 1},
		{7, 5, 0}, {7, 10, 1},
		{8, 5, 0}, {8, 10, 1},
		{6, 5, 0}, {6, 10, 1},
		{9, 6, 0}, {9, 9, 1},
		{5, 6, 0}, {5, 9, 1},
		{10, 7, 0}, {4, 7, 1},
		{10, 8, 0}, {4, 8, 1},
	}
	for _, m := range moves {
		p := Black
		if m[2] == 1 {
			p = White
		}
		b.MakeMove(m[0], m[1], p)
	}
	return b
}

// BenchmarkAIHard measures Hard AI (minimax depth-3 + alpha-beta) on a 30-stone board.
// Budget: < 1 s/op. Alpha-beta + radius-2 candidate pruning should keep this well under.
func BenchmarkAIHard(bm *testing.B) {
	board := midgameBoard()
	ai := NewAI(Black, testSeed)

	bm.ResetTimer()
	for i := 0; i < bm.N; i++ {
		b := board.Clone()
		_, _, ok := ai.NextMove(&b, 3)
		if !ok {
			bm.Fatal("NextMove returned ok=false on mid-game board")
		}
	}
}
