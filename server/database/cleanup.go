package database

import (
	"time"

	"github.com/tiennm99/gomoku/server/pkg/log"
)

const idleRoomTimeout = 5 * time.Minute

// StartCleanup launches the idle-room reaper goroutine.
// Called once from main.go during server startup.
// Rooms with no active players and no spectators for longer than idleRoomTimeout are deleted.
func StartCleanup() {
	go runCleanupLoop()
}

func runCleanupLoop() {
	ticker := time.NewTicker(1 * time.Minute)
	defer ticker.Stop()
	for range ticker.C {
		reapIdleRooms()
	}
}

// reapIdleRooms scans all new-domain rooms and removes those that have been
// idle (no players, no spectators) for longer than idleRoomTimeout.
func reapIdleRooms() {
	rooms := GetAllRooms()
	for _, r := range rooms {
		r.RLock()
		nPlayers := len(r.Players)
		nSpectators := len(r.Spectators)
		lastActive := r.LastActive
		id := r.ID
		r.RUnlock()

		if nPlayers == 0 && nSpectators == 0 && time.Since(lastActive) > idleRoomTimeout {
			log.Infof("[cleanup] removing idle room %d (no activity for >%s)\n", id, idleRoomTimeout)
			store.mu.Lock()
			deleteNewRoom(id)
			store.mu.Unlock()
		}
	}
}
