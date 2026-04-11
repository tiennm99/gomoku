package lobby

import (
	"fmt"
	"testing"
)

// resetStore clears the new-domain store between tests.
func resetStore() {
	store.mu.Lock()
	store.players = make(map[int64]*Player)
	store.rooms = make(map[int64]*Room)
	store.nextPlayerID = 1
	store.nextRoomID = 1
	store.mu.Unlock()
}

func makePlayer(name string) *Player {
	return RegisterPlayer(name)
}

// --- Player tests ---

func TestRegisterPlayer_AssignsUniqueIDs(t *testing.T) {
	resetStore()

	ids := make(map[int64]bool)
	for i := 0; i < 100; i++ {
		p := RegisterPlayer(fmt.Sprintf("player%d", i))
		if p.ID <= 0 {
			t.Fatalf("expected positive ID, got %d", p.ID)
		}
		if ids[p.ID] {
			t.Fatalf("duplicate ID %d", p.ID)
		}
		ids[p.ID] = true
	}
}

// --- PVP room tests ---

func TestCreatePvpRoom_AssignsOwner(t *testing.T) {
	resetStore()
	owner := makePlayer("alice")

	r, err := CreatePvpRoom(owner)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if r.OwnerID != owner.ID {
		t.Errorf("OwnerID = %d, want %d", r.OwnerID, owner.ID)
	}
	if r.RoomType != RoomTypePvp {
		t.Errorf("RoomType = %v, want PVP", r.RoomType)
	}
	if r.Status != RoomStatusWaiting {
		t.Errorf("Status = %v, want Waiting", r.Status)
	}
}

// --- PVE room tests ---

func TestCreatePveRoom_RandomizesColor(t *testing.T) {
	resetStore()
	owner := makePlayer("bob")

	seenBlack := false
	seenWhite := false
	for i := 0; i < 50; i++ {
		resetStore()
		owner = makePlayer("bob")
		r, err := CreatePveRoom(owner, 1)
		if err != nil {
			t.Fatalf("iteration %d: unexpected error: %v", i, err)
		}
		if r.BlackPlayerID == owner.ID {
			seenBlack = true
		}
		if r.WhitePlayerID == owner.ID {
			seenWhite = true
		}
		if seenBlack && seenWhite {
			break
		}
	}
	if !seenBlack {
		t.Error("never observed human assigned to Black in 50 iterations")
	}
	if !seenWhite {
		t.Error("never observed human assigned to White in 50 iterations")
	}
}

func TestCreatePveRoom_InvalidDifficultyRejected(t *testing.T) {
	resetStore()
	owner := makePlayer("carol")

	for _, d := range []int{0, 4, -1, 99} {
		_, err := CreatePveRoom(owner, d)
		if err != ErrInvalidDifficulty {
			t.Errorf("difficulty %d: expected ErrInvalidDifficulty, got %v", d, err)
		}
	}
}

// --- JoinRoom tests ---

func TestJoinRoom_FullRejected(t *testing.T) {
	resetStore()
	owner := makePlayer("dave")
	p2 := makePlayer("eve")
	p3 := makePlayer("frank")

	r, _ := CreatePvpRoom(owner)
	if err := JoinRoom(r.ID, owner); err != nil {
		t.Fatalf("owner join: %v", err)
	}
	if err := JoinRoom(r.ID, p2); err != nil {
		t.Fatalf("second player join: %v", err)
	}
	if err := JoinRoom(r.ID, p3); err != ErrRoomFull {
		t.Errorf("expected ErrRoomFull, got %v", err)
	}
}

func TestJoinRoom_NotFoundRejected(t *testing.T) {
	resetStore()
	p := makePlayer("ghost")

	err := JoinRoom(999, p)
	if err != ErrRoomNotFound {
		t.Errorf("expected ErrRoomNotFound, got %v", err)
	}
}

// --- LeaveRoom tests ---

func TestLeaveRoom_RemovesPlayerAndCleansEmptyRoom(t *testing.T) {
	resetStore()
	owner := makePlayer("grace")

	r, _ := CreatePvpRoom(owner)
	_ = JoinRoom(r.ID, owner)

	LeaveRoom(owner)

	if owner.RoomID != 0 {
		t.Errorf("player.RoomID should be 0 after leave, got %d", owner.RoomID)
	}
	if _, ok := GetRoom(r.ID); ok {
		t.Error("empty room should be deleted from store")
	}
}

// --- WatchRoom / UnwatchRoom tests ---

func TestWatchRoom_AddsSpectator(t *testing.T) {
	resetStore()
	owner := makePlayer("henry")
	spectator := makePlayer("iris")

	r, _ := CreatePvpRoom(owner)
	_ = JoinRoom(r.ID, owner)

	if err := WatchRoom(r.ID, spectator); err != nil {
		t.Fatalf("WatchRoom: %v", err)
	}

	r.RLock()
	_, found := r.Spectators[spectator.ID]
	r.RUnlock()

	if !found {
		t.Error("spectator not found in room.Spectators")
	}
	if spectator.Role != RoleSpectator {
		t.Errorf("spectator.Role = %v, want RoleSpectator", spectator.Role)
	}
}

func TestUnwatchRoom_RemovesSpectator(t *testing.T) {
	resetStore()
	owner := makePlayer("jack")
	spectator := makePlayer("kim")

	r, _ := CreatePvpRoom(owner)
	_ = JoinRoom(r.ID, owner)
	_ = WatchRoom(r.ID, spectator)

	UnwatchRoom(spectator)

	r.RLock()
	_, found := r.Spectators[spectator.ID]
	r.RUnlock()

	if found {
		t.Error("spectator should have been removed")
	}
	if spectator.RoomID != 0 {
		t.Errorf("spectator.RoomID should be 0, got %d", spectator.RoomID)
	}
}

// --- GetAllRooms snapshot test ---

func TestGetAllRooms_ReturnsSnapshot(t *testing.T) {
	resetStore()
	owner := makePlayer("leo")

	r1, _ := CreatePvpRoom(owner)
	r2, _ := CreatePveRoom(owner, 1)

	list := GetAllRooms()
	if len(list) != 2 {
		t.Fatalf("expected 2 rooms, got %d", len(list))
	}
	// Verify ordering by ID ascending.
	if list[0].ID != r1.ID || list[1].ID != r2.ID {
		t.Errorf("rooms not sorted by ID: got %d, %d", list[0].ID, list[1].ID)
	}
	// Mutating the slice must not affect the store.
	list[0] = nil
	remaining := GetAllRooms()
	if len(remaining) != 2 {
		t.Error("store was affected by slice mutation — snapshot is not independent")
	}
}

