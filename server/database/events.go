package database

// RoomEvent is a message broadcast to all participants in a room (players + spectators).
// Simplest form: a plain string payload. Phase-07 will expand this with typed events
// for the spectator fan-out goroutine.
type RoomEvent struct {
	Payload string
}

// BroadcastEvent sends a RoomEvent to every player and spectator in the room,
// excluding the IDs listed in excludePlayerIDs.
// Acquires room.RLock internally; must NOT be called while holding room.Lock().
func BroadcastEvent(room *NewRoom, event RoomEvent, excludePlayerIDs ...int64) {
	BroadcastToNewRoom(room, event.Payload, excludePlayerIDs...)
}
