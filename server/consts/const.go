// Package consts exposes cross-package constants used by the state machine
// and room logic. Kept intentionally small — domain enums (RoomType, RoomStatus,
// Piece, GameResult) live in their respective packages (lobby, game, protocol).
package consts

// StateID identifies a state in the per-player state machine.
type StateID int

const (
	_ StateID = iota
	StateWelcome
	StateSetNickname
	StateHome
	StateWaiting
	StateGamePvp
	StateGamePve
	StateGameOver
	StateWatching
)

// AI difficulty levels for PVE rooms.
const (
	DifficultyEasy   = 1
	DifficultyMedium = 2
	DifficultyHard   = 3
)
