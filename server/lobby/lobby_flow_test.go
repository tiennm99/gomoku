package lobby

import (
	"testing"
)

// Flow-level tests exercising create/leave/find cycles reported as buggy.
// If any of these fail, the bug is in the lobby package.
// If they all pass, the bug is upstream (state machine or client).

// TestFlow_CreateLeaveCreate_OneRoomVisible reproduces the user-reported
// scenario: create a room, leave it, create another, list rooms — expect
// only the second (active) room. Prior bug reports showed a "ghost" room.
func TestFlow_CreateLeaveCreate_OneRoomVisible(t *testing.T) {
	resetStore()
	alice := RegisterPlayer("alice")

	// Create Room 1 and join it.
	r1, err := CreatePvpRoom(alice)
	if err != nil {
		t.Fatalf("CreatePvpRoom 1: %v", err)
	}
	if err := JoinRoom(r1.ID, alice); err != nil {
		t.Fatalf("JoinRoom r1: %v", err)
	}

	// Leave Room 1 — should delete it (sole occupant).
	LeaveRoom(alice)

	if _, ok := GetRoom(r1.ID); ok {
		t.Errorf("Room %d still in store after leave as sole occupant", r1.ID)
	}
	if alice.RoomID != 0 {
		t.Errorf("alice.RoomID = %d after leave, want 0", alice.RoomID)
	}

	// Create Room 2 and join it.
	r2, err := CreatePvpRoom(alice)
	if err != nil {
		t.Fatalf("CreatePvpRoom 2: %v", err)
	}
	if err := JoinRoom(r2.ID, alice); err != nil {
		t.Fatalf("JoinRoom r2: %v", err)
	}
	if r2.ID == r1.ID {
		t.Errorf("Room 2 reused ID %d — expected monotonic nextRoomID", r1.ID)
	}

	// GetAllRooms should return exactly one room (the active r2).
	rooms := GetAllRooms()
	if len(rooms) != 1 {
		ids := make([]int64, 0, len(rooms))
		for _, r := range rooms {
			ids = append(ids, r.ID)
		}
		t.Fatalf("expected 1 room after create→leave→create, got %d rooms: %v", len(rooms), ids)
	}
	if rooms[0].ID != r2.ID {
		t.Errorf("expected room ID %d, got %d", r2.ID, rooms[0].ID)
	}
}

// TestFlow_CreateLeave_DeletesRoom: basic sanity check that a sole-occupant
// leave removes the room from the store.
func TestFlow_CreateLeave_DeletesRoom(t *testing.T) {
	resetStore()
	alice := RegisterPlayer("alice")

	r, _ := CreatePvpRoom(alice)
	_ = JoinRoom(r.ID, alice)

	if len(GetAllRooms()) != 1 {
		t.Fatalf("expected 1 room after create+join, got %d", len(GetAllRooms()))
	}

	LeaveRoom(alice)

	if len(GetAllRooms()) != 0 {
		t.Errorf("expected 0 rooms after sole-occupant leave, got %d", len(GetAllRooms()))
	}
}

// TestFlow_CreateLeaveLeaveLeave_NoGhost: repeated create/leave cycles must
// not leak rooms.
func TestFlow_CreateLeaveLeaveLeave_NoGhost(t *testing.T) {
	resetStore()
	alice := RegisterPlayer("alice")

	for i := 0; i < 5; i++ {
		r, err := CreatePvpRoom(alice)
		if err != nil {
			t.Fatalf("cycle %d: CreatePvpRoom: %v", i, err)
		}
		if err := JoinRoom(r.ID, alice); err != nil {
			t.Fatalf("cycle %d: JoinRoom: %v", i, err)
		}
		LeaveRoom(alice)

		rooms := GetAllRooms()
		if len(rooms) != 0 {
			ids := make([]int64, 0, len(rooms))
			for _, r := range rooms {
				ids = append(ids, r.ID)
			}
			t.Fatalf("cycle %d: expected 0 rooms after leave, got %d: %v", i, len(rooms), ids)
		}
	}
}

// TestFlow_TwoPlayers_OneLeaves_RoomStays: with 2 players in a PVP room, one
// leaving should NOT delete the room — the other is still there.
func TestFlow_TwoPlayers_OneLeaves_RoomStays(t *testing.T) {
	resetStore()
	alice := RegisterPlayer("alice")
	bob := RegisterPlayer("bob")

	r, _ := CreatePvpRoom(alice)
	_ = JoinRoom(r.ID, alice)
	_ = JoinRoom(r.ID, bob)

	LeaveRoom(alice)

	if _, ok := GetRoom(r.ID); !ok {
		t.Fatal("room deleted after only one of two players left")
	}
	r2, _ := GetRoom(r.ID)
	if len(r2.Players) != 1 {
		t.Errorf("expected 1 remaining player, got %d", len(r2.Players))
	}
	if r2.OwnerID != bob.ID {
		t.Errorf("ownership should have transferred to bob (%d), got %d", bob.ID, r2.OwnerID)
	}

	// Bob leaves too — now room should be deleted.
	LeaveRoom(bob)
	if _, ok := GetRoom(r.ID); ok {
		t.Error("room not deleted after both players left")
	}
}

// TestFlow_CreatePveLeave_DeletesRoom: PVE rooms also get deleted on leave.
func TestFlow_CreatePveLeave_DeletesRoom(t *testing.T) {
	resetStore()
	alice := RegisterPlayer("alice")

	r, err := CreatePveRoom(alice, 2)
	if err != nil {
		t.Fatalf("CreatePveRoom: %v", err)
	}
	_ = JoinRoom(r.ID, alice)

	if len(GetAllRooms()) != 1 {
		t.Fatalf("expected 1 PVE room, got %d", len(GetAllRooms()))
	}

	LeaveRoom(alice)

	if len(GetAllRooms()) != 0 {
		t.Errorf("expected 0 rooms after PVE leave, got %d", len(GetAllRooms()))
	}
}

// TestFlow_GetAllRooms_AfterLeaveReflectsStore: list retrieved from GetAllRooms
// must not include a room the caller just left. Catches stale-snapshot bugs.
func TestFlow_GetAllRooms_AfterLeaveReflectsStore(t *testing.T) {
	resetStore()
	alice := RegisterPlayer("alice")
	bob := RegisterPlayer("bob")

	// Alice creates her own room.
	ra, _ := CreatePvpRoom(alice)
	_ = JoinRoom(ra.ID, alice)

	// Bob creates his own room.
	rb, _ := CreatePvpRoom(bob)
	_ = JoinRoom(rb.ID, bob)

	if len(GetAllRooms()) != 2 {
		t.Fatalf("expected 2 rooms, got %d", len(GetAllRooms()))
	}

	// Alice leaves.
	LeaveRoom(alice)

	rooms := GetAllRooms()
	if len(rooms) != 1 {
		t.Fatalf("expected 1 room after alice leaves, got %d", len(rooms))
	}
	if rooms[0].ID != rb.ID {
		t.Errorf("expected remaining room to be bob's (%d), got %d", rb.ID, rooms[0].ID)
	}
}

// TestFlow_CreateRoom_CreateAnother_OldOneDoesNotPersist: implicit test that
// a create without an intervening leave leaves the first room around (because
// it still has the player). The "leave" is what should delete it.
func TestFlow_CreateRoom_LeaveWhilePlayerIsStillMember_DeletesProperly(t *testing.T) {
	resetStore()
	alice := RegisterPlayer("alice")

	r, _ := CreatePvpRoom(alice)
	_ = JoinRoom(r.ID, alice)
	// Sanity: alice.RoomID is set.
	if alice.RoomID != r.ID {
		t.Fatalf("alice.RoomID = %d, want %d", alice.RoomID, r.ID)
	}

	LeaveRoom(alice)

	// RoomID must be cleared so a follow-up LeaveRoom is a safe no-op.
	if alice.RoomID != 0 {
		t.Errorf("alice.RoomID = %d after leave, want 0", alice.RoomID)
	}

	// Idempotent leave: calling again should not panic or create side effects.
	LeaveRoom(alice)
	if len(GetAllRooms()) != 0 {
		t.Errorf("expected 0 rooms after idempotent leave, got %d", len(GetAllRooms()))
	}
}
