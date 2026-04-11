// Package lobby provides the in-memory domain model (Player, Room) and a
// global store managing who is in which room. All state is volatile —
// server restart clears everything.
package lobby

import "errors"

// Exported sentinel errors for store operations.
var (
	ErrRoomNotFound      = errors.New("room not found")
	ErrRoomFull          = errors.New("room is full")
	ErrRoomPlaying       = errors.New("room is already playing")
	ErrInvalidDifficulty = errors.New("difficulty must be 1 (easy), 2 (medium), or 3 (hard)")
	ErrNotOwner          = errors.New("player is not the room owner")
)
