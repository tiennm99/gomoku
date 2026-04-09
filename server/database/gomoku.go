package database

import (
	"sync"

	"github.com/ratel-online/server/consts"
)

// Gomoku stores the state of a gomoku (five-in-a-row) game.
type Gomoku struct {
	sync.Mutex
	Room      *Room                 `json:"room"`
	PlayerIDs [2]int64              `json:"playerIds"` // [0]=black, [1]=white
	Board     [consts.GomokuBoardSize][consts.GomokuBoardSize]int `json:"board"` // 0=empty, 1=black, 2=white
	Turn      int                   `json:"turn"`      // 1=black, 2=white
	States    map[int64]chan int    `json:"states"`
	MoveCount int                   `json:"moveCount"`
	LastColor int                   `json:"lastColor"` // Color of the last move (for winner detection)
}

func (g *Gomoku) Clean() {
	for _, ch := range g.States {
		close(ch)
	}
}
