package lobby

import (
	"sync"
	"time"

	"github.com/tiennm99/gomoku/server/game"
)

// RoomType distinguishes PVP (two human players) from PVE (human vs AI).
type RoomType int

const (
	RoomTypePvp RoomType = 1
	RoomTypePve RoomType = 2
)

// RoomStatus tracks the lifecycle of a room.
type RoomStatus int

const (
	RoomStatusWaiting  RoomStatus = 1
	RoomStatusPlaying  RoomStatus = 2
	RoomStatusFinished RoomStatus = 3
)

// GameMove records a single move in the game history.
type GameMove struct {
	Row       int
	Col       int
	Piece     game.Piece
	PlayerID  int64 // -1 for AI moves in PVE
	Timestamp time.Time
}

// Room is the domain model for a game room. It embeds a game.Board and
// carries color assignment, move history, spectator list, type (PVP|PVE),
// PVE difficulty, and cross-goroutine sync channels.
//
// sync.RWMutex protects Board, Players, Spectators, MoveHistory, and Status.
// Never hold the lock while sending to a player — copy fields first, then release.
type Room struct {
	sync.RWMutex

	ID            int64
	OwnerID       int64  // playerID of the room owner
	OwnerNickname string // snapshot of owner's name at creation time
	RoomType      RoomType
	Status        RoomStatus

	// Board is value-typed; protected by the room's RWMutex.
	Board game.Board

	// Color assignment: BlackPlayerID / WhitePlayerID hold player IDs.
	// In PVE rooms, the AI slot is represented by -1.
	BlackPlayerID int64
	WhitePlayerID int64
	CurrentTurn   game.Piece // game.Black or game.White

	// Players holds the human participants (max 2 for PVP, 1 for PVE).
	Players map[int64]*Player
	// Spectators holds read-only observers.
	Spectators map[int64]*Player

	MoveHistory []GameMove

	// PVE-only fields.
	Difficulty int      // 1=easy, 2=medium, 3=hard
	AI         *game.AI // nil for PVP rooms

	// StartCh is closed by the owner's waitingState when a valid GameStartingRequest
	// is accepted. The joiner's waitingState selects on this channel to detect game start
	// without polling. Created in CreatePvpRoom; nil for PVE rooms (no waiting state).
	StartCh chan struct{}

	// GameOverCh is closed by whichever player goroutine detects game-over first.
	// Other player goroutines select on it to unblock from CmdCh and transition to
	// StateGameOver without waiting for a user message.
	// Created in CreatePvpRoom; nil for PVE rooms (single player, no concurrent goroutine).
	GameOverCh chan struct{}

	// RematchCh is closed by whichever player's gameoverState accepts a GameReset
	// request first, signalling the other player's gameoverState to follow into
	// the fresh game. Lazily created by the first goroutine entering gameoverState.
	// Only used for PVP rooms; PVE has a single goroutine so no cross-sync needed.
	RematchCh chan struct{}

	CreatedAt  time.Time
	LastActive time.Time
}

// ApplyMove places a piece at (row, col), appends to MoveHistory, flips CurrentTurn,
// and returns the new GameResult. Caller must hold room.Lock().
func (r *Room) ApplyMove(row, col int, piece game.Piece, playerID int64) (game.GameResult, error) {
	if !r.Board.MakeMove(row, col, piece) {
		return game.InProgress, ErrRoomFull // reuse as "invalid move" sentinel; phase-06 adds ErrInvalidMove
	}
	r.MoveHistory = append(r.MoveHistory, GameMove{
		Row:       row,
		Col:       col,
		Piece:     piece,
		PlayerID:  playerID,
		Timestamp: time.Now(),
	})
	// Flip turn.
	if r.CurrentTurn == game.Black {
		r.CurrentTurn = game.White
	} else {
		r.CurrentTurn = game.Black
	}
	return r.Board.Result(), nil
}

// Reset clears the board and history, returning the room to WAITING status.
// For PVE rooms it re-randomizes color assignment and creates a fresh AI.
func (r *Room) Reset(rng int64) {
	r.Board.Reset()
	r.MoveHistory = nil
	r.CurrentTurn = game.Black
	r.Status = RoomStatusWaiting

	if r.RoomType == RoomTypePve {
		// Re-randomize which side the human plays.
		if rng%2 == 0 {
			r.BlackPlayerID = r.OwnerID
			r.WhitePlayerID = -1
			r.AI = game.NewAI(game.White, rng)
		} else {
			r.BlackPlayerID = -1
			r.WhitePlayerID = r.OwnerID
			r.AI = game.NewAI(game.Black, rng)
		}
	}
}

// RoomSnapshot is a read-locked shallow copy of room state for spectator sync.
type RoomSnapshot struct {
	ID            int64
	BlackPlayerID int64
	WhitePlayerID int64
	CurrentTurn   game.Piece
	Board         game.Board     // value copy — safe to read without lock
	MoveHistory   []GameMove    // slice copy
	PlayerNames   map[int64]string
}

// Snapshot returns a consistent read of room state safe to send without holding the lock.
// Caller must NOT hold any lock when calling this — it acquires RLock internally.
func (r *Room) Snapshot() RoomSnapshot {
	r.RLock()
	defer r.RUnlock()

	histCopy := make([]GameMove, len(r.MoveHistory))
	copy(histCopy, r.MoveHistory)

	names := make(map[int64]string, len(r.Players)+1)
	for id, p := range r.Players {
		names[id] = p.Name
	}
	if r.AI != nil {
		names[-1] = "AI"
	}

	return RoomSnapshot{
		ID:            r.ID,
		BlackPlayerID: r.BlackPlayerID,
		WhitePlayerID: r.WhitePlayerID,
		CurrentTurn:   r.CurrentTurn,
		Board:         r.Board.Clone(), // safe value copy
		MoveHistory:   histCopy,
		PlayerNames:   names,
	}
}

// PlayerCount returns the number of human players currently in the room.
// Caller may or may not hold RLock — reads len which is safe under Go's memory model
// only when protected; callers should hold at least RLock for correctness.
func (r *Room) PlayerCount() int {
	return len(r.Players)
}

// IsOwner returns true if playerID is the room owner.
func (r *Room) IsOwner(playerID int64) bool {
	return r.OwnerID == playerID
}
