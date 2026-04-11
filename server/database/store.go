package database

import (
	"math/rand"
	"sort"
	"sync"
	"time"

	"github.com/tiennm99/gomoku/server/game"
	newproto "github.com/tiennm99/gomoku/server/protocol"
)

// store is the package-level in-memory data store for the new domain model.
// It is separate from the legacy hashmaps in legacy.go which back the old state machine.
//
// Lock discipline:
//   - Acquire store.mu only to read/write the maps and counters.
//   - Release store.mu before calling any per-room method or player callback.
//   - Per-room mutations use room.Lock() / room.RLock() independently.
var store = &roomStore{
	players:      make(map[int64]*Player),
	rooms:        make(map[int64]*NewRoom),
	nextPlayerID: 1,
	nextRoomID:   1,
}

type roomStore struct {
	mu           sync.RWMutex
	players      map[int64]*Player
	rooms        map[int64]*NewRoom
	nextPlayerID int64
	nextRoomID   int64
}

// --- Player operations ---

// RegisterPlayer assigns a unique ID and registers the player in the store.
func RegisterPlayer(nickname string) *Player {
	store.mu.Lock()
	id := store.nextPlayerID
	store.nextPlayerID++
	p := &Player{
		ID:   id,
		Name: nickname,
	}
	store.players[id] = p
	store.mu.Unlock()
	return p
}

// GetPlayer returns the player with the given ID, or (nil, false) if not found.
func GetNewPlayer(id int64) (*Player, bool) {
	store.mu.RLock()
	p, ok := store.players[id]
	store.mu.RUnlock()
	return p, ok
}

// RemovePlayer unregisters the player and removes them from any room they are in.
func RemovePlayer(id int64) {
	store.mu.Lock()
	p, ok := store.players[id]
	if ok {
		delete(store.players, id)
	}
	store.mu.Unlock()
	if ok && p.RoomID != 0 {
		LeaveNewRoom(p)
	}
}

// --- Room creation ---

// CreatePvpRoom creates a PVP room owned by the given player.
func CreatePvpRoom(owner *Player) (*NewRoom, error) {
	store.mu.Lock()
	id := store.nextRoomID
	store.nextRoomID++
	r := &NewRoom{
		ID:            id,
		OwnerID:       owner.ID,
		OwnerNickname: owner.Name,
		RoomType:      RoomTypePvp,
		Status:        RoomStatusWaiting,
		Board:         game.NewBoard(),
		BlackPlayerID: 0,
		WhitePlayerID: 0,
		CurrentTurn:   game.Black,
		Players:       make(map[int64]*Player),
		Spectators:    make(map[int64]*Player),
		MoveHistory:   nil,
		StartCh:       make(chan struct{}),
		GameOverCh:    make(chan struct{}),
		CreatedAt:     time.Now(),
		LastActive:    time.Now(),
	}
	store.rooms[id] = r
	store.mu.Unlock()
	return r, nil
}

// CreatePveRoom creates a PVE room. difficulty must be 1, 2, or 3.
// The human player is randomly assigned Black or White; the AI takes the other side.
func CreatePveRoom(owner *Player, difficulty int) (*NewRoom, error) {
	if difficulty < 1 || difficulty > 3 {
		return nil, ErrInvalidDifficulty
	}

	seed := rand.Int63()
	var (
		humanBlack    bool
		blackPlayerID int64
		whitePlayerID int64
		aiPiece       game.Piece
	)
	// Random coin flip: even seed → human is Black.
	if seed%2 == 0 {
		humanBlack = true
		blackPlayerID = owner.ID
		whitePlayerID = -1
		aiPiece = game.White
	} else {
		humanBlack = false
		blackPlayerID = -1
		whitePlayerID = owner.ID
		aiPiece = game.Black
	}
	_ = humanBlack // used implicitly via blackPlayerID/whitePlayerID

	aiSeed := rand.Int63()
	ai := game.NewAI(aiPiece, aiSeed)

	store.mu.Lock()
	id := store.nextRoomID
	store.nextRoomID++
	r := &NewRoom{
		ID:            id,
		OwnerID:       owner.ID,
		OwnerNickname: owner.Name,
		RoomType:      RoomTypePve,
		Status:        RoomStatusWaiting,
		Board:         game.NewBoard(),
		BlackPlayerID: blackPlayerID,
		WhitePlayerID: whitePlayerID,
		CurrentTurn:   game.Black,
		Players:       make(map[int64]*Player),
		Spectators:    make(map[int64]*Player),
		MoveHistory:   nil,
		Difficulty:    difficulty,
		AI:            ai,
		CreatedAt:     time.Now(),
		LastActive:    time.Now(),
	}
	store.rooms[id] = r
	store.mu.Unlock()
	return r, nil
}

// --- Room lookups ---

// GetNewRoom returns the room with the given ID, or (nil, false) if not found.
func GetNewRoom(id int64) (*NewRoom, bool) {
	store.mu.RLock()
	r, ok := store.rooms[id]
	store.mu.RUnlock()
	return r, ok
}

// GetAllRooms returns a snapshot slice of all rooms sorted by ID ascending.
// The slice is a copy; callers must not mutate rooms through it without locking.
func GetAllRooms() []*NewRoom {
	store.mu.RLock()
	list := make([]*NewRoom, 0, len(store.rooms))
	for _, r := range store.rooms {
		list = append(list, r)
	}
	store.mu.RUnlock()
	sort.Slice(list, func(i, j int) bool { return list[i].ID < list[j].ID })
	return list
}

// deleteNewRoom removes a room from the store. Caller must hold store.mu.Lock().
func deleteNewRoom(id int64) {
	delete(store.rooms, id)
}

// --- Room membership ---

// JoinNewRoom adds a player to a room as a human participant.
// Returns ErrRoomNotFound, ErrRoomFull, or ErrRoomPlaying on failure.
// On success, sets player.RoomID.
func JoinNewRoom(roomID int64, player *Player) error {
	store.mu.RLock()
	r, ok := store.rooms[roomID]
	store.mu.RUnlock()
	if !ok {
		return ErrRoomNotFound
	}

	r.Lock()
	defer r.Unlock()

	if r.Status == RoomStatusPlaying {
		return ErrRoomPlaying
	}
	maxPlayers := 2
	if r.RoomType == RoomTypePve {
		maxPlayers = 1
	}
	if len(r.Players) >= maxPlayers {
		return ErrRoomFull
	}

	r.Players[player.ID] = player
	r.LastActive = time.Now()
	player.RoomID = roomID
	player.Role = RolePlayer
	if r.OwnerID == player.ID {
		player.Role = RoleOwner
	}
	return nil
}

// LeaveNewRoom removes a player from their current room (Players or Spectators).
// If the room becomes empty it is deleted from the store.
// Broadcasts nothing — callers handle messaging.
func LeaveNewRoom(player *Player) {
	if player.RoomID == 0 {
		return
	}

	store.mu.RLock()
	r, ok := store.rooms[player.RoomID]
	store.mu.RUnlock()
	if !ok {
		player.RoomID = 0
		return
	}

	r.Lock()

	wasPlayer := false
	if _, found := r.Players[player.ID]; found {
		delete(r.Players, player.ID)
		wasPlayer = true
	}
	if _, found := r.Spectators[player.ID]; found {
		delete(r.Spectators, player.ID)
	}

	// Owner reassignment: if owner left and room still has players, pick another.
	if wasPlayer && r.OwnerID == player.ID && len(r.Players) > 0 {
		for newOwnerID, newOwner := range r.Players {
			r.OwnerID = newOwnerID
			r.OwnerNickname = newOwner.Name
			newOwner.Role = RoleOwner
			break
		}
	}

	noPlayers := len(r.Players) == 0
	roomID := r.ID

	// Collect spectators to eject if all players have left.
	// We do this under lock to get a consistent snapshot, then send after unlock.
	var spectatorsToEject []*Player
	if noPlayers && len(r.Spectators) > 0 {
		spectatorsToEject = make([]*Player, 0, len(r.Spectators))
		for _, sp := range r.Spectators {
			spectatorsToEject = append(spectatorsToEject, sp)
		}
		// Clear spectator map so UnwatchNewRoom calls from their state machines are no-ops.
		r.Spectators = make(map[int64]*Player)
	}

	empty := noPlayers && len(r.Spectators) == 0
	r.Unlock()

	player.RoomID = 0
	player.Role = ""

	// Notify ejected spectators after releasing room lock (never hold lock while sending).
	for _, sp := range spectatorsToEject {
		sp.RoomID = 0
		sp.Role = ""
		// Push a ClientExitResponse so the spectator's state machine can react.
		// The watching state will receive this via player.CmdCh being unblocked
		// only if the response triggers a CmdCh push — but ClientExitResponse is a
		// *send* response, not a request. Push a synthetic WatchGameExit to CmdCh
		// so watchingState.Next() wakes up and transitions to StateHome.
		_ = sp.Send(ejectSpectatorResponse(roomID))
		// Enqueue a WatchGameExit on the spectator's CmdCh so the watching state
		// machine wakes up and transitions back to StateHome cleanly.
		pushWatchGameExitToCmdCh(sp)
	}

	if empty {
		store.mu.Lock()
		deleteNewRoom(roomID)
		store.mu.Unlock()
	}
}

// ejectSpectatorResponse builds the ClientExitResponse sent when a room is closed.
// Uses exit_client_id=0 and a sentinel nickname to signal "room closed" not a kick.
func ejectSpectatorResponse(roomID int64) *newproto.Response {
	return &newproto.Response{
		Payload: &newproto.Response_ClientExit{
			ClientExit: &newproto.ClientExitResponse{
				RoomId:              int32(roomID),
				ExitClientId:        0,
				ExitClientNickname:  "room_closed",
			},
		},
	}
}

// pushWatchGameExitToCmdCh enqueues a synthetic WatchGameExitRequest on the spectator's
// CmdCh so the watchingState state machine unblocks and transitions to StateHome.
// Non-blocking: drops silently if the channel is full or nil.
func pushWatchGameExitToCmdCh(player *Player) {
	if player.CmdCh == nil {
		return
	}
	req := &newproto.Request{
		Payload: &newproto.Request_WatchGameExit{
			WatchGameExit: &newproto.WatchGameExitRequest{},
		},
	}
	select {
	case player.CmdCh <- req:
	default:
		// CmdCh full — spectator will time out or disconnect naturally.
	}
}

// WatchNewRoom adds a player to a room's Spectators list.
// Returns ErrRoomNotFound if the room does not exist.
func WatchNewRoom(roomID int64, player *Player) error {
	store.mu.RLock()
	r, ok := store.rooms[roomID]
	store.mu.RUnlock()
	if !ok {
		return ErrRoomNotFound
	}

	r.Lock()
	r.Spectators[player.ID] = player
	r.LastActive = time.Now()
	r.Unlock()

	player.RoomID = roomID
	player.Role = RoleSpectator
	return nil
}

// UnwatchNewRoom removes a spectator from their room.
func UnwatchNewRoom(player *Player) {
	if player.RoomID == 0 {
		return
	}

	store.mu.RLock()
	r, ok := store.rooms[player.RoomID]
	store.mu.RUnlock()
	if !ok {
		player.RoomID = 0
		return
	}

	r.Lock()
	delete(r.Spectators, player.ID)
	empty := len(r.Players) == 0 && len(r.Spectators) == 0
	roomID := r.ID
	r.Unlock()

	player.RoomID = 0
	player.Role = ""

	if empty {
		store.mu.Lock()
		deleteNewRoom(roomID)
		store.mu.Unlock()
	}
}

// BroadcastToNewRoom is a placeholder kept for BroadcastEvent compatibility.
// The new state machine uses state.broadcastResponse (typed protobuf) instead.
// String-based broadcast is no longer supported after phase-06.
func BroadcastToNewRoom(_ *NewRoom, _ string, _ ...int64) {
	// no-op: all broadcasts now use typed *protocol.Response via player.Send
}
