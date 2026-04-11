package database

// legacy.go — compatibility shim for server/state/*.go and server/state/game/gomoku.go.
//
// These files reference the OLD database API (Room with int64 IDs, Gomoku struct,
// hashmap-backed store functions). They MUST compile but are NOT executed after
// phase-05 replaces the network/state layer. Phase-06 deletes this file entirely.
//
// DO NOT add new production logic here. Shims may panic at runtime with a clear message.

import (
	"sort"
	"sync"
	"sync/atomic"
	"time"

	"github.com/awesome-cap/hashmap"
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/pkg/log"
	modelx "github.com/tiennm99/gomoku/server/pkg/model"
	"github.com/tiennm99/gomoku/server/pkg/network"
	pkgstrings "github.com/tiennm99/gomoku/server/pkg/strings"
)

// ---------------------------------------------------------------------------
// Legacy in-memory store (backed by awesome-cap/hashmap — preserved for compat)
// ---------------------------------------------------------------------------

var roomIds int64 = 0
var players = hashmap.New()
var connPlayers = hashmap.New()
var rooms = hashmap.New()
var roomPlayers = hashmap.New()
var roomSpectators = hashmap.New()
var roomKickedPlayers = hashmap.New()

// ---------------------------------------------------------------------------
// Legacy domain types
// ---------------------------------------------------------------------------

// RoomGame is the interface implemented by each game type's state struct.
// Clean() is called when the room is deleted to release channels and resources.
type RoomGame interface {
	Clean()
}

// Room is the LEGACY room type. It is still referenced by state/*.go and
// state/game/gomoku.go. Do not add new fields here — extend NewRoom instead.
type Room struct {
	legacyMu struct{ sync.Mutex } // embedded via pointer field below
	sync_mu  *legacyMutex        // unused — Room embeds sync.Mutex directly via embedding trick

	ID           int64    `json:"id"`
	Type         int      `json:"type"`
	Game         RoomGame `json:"gameId"`
	State        int      `json:"state"`
	Players      int      `json:"players"`
	Creator      int64    `json:"creator"`
	ActiveTime   time.Time `json:"activeTime"`
	MaxPlayers   int      `json:"maxPlayers"`
	Password     string   `json:"password"`
	EnableChat   bool     `json:"enableChat"`
	EnableShowIP bool     `json:"enableShowIP"`

	mu legacyMutex
}

// legacyMutex wraps sync.Mutex so Room.Lock/Unlock are available without
// embedding sync.Mutex directly (which would conflict with the new RWMutex
// on NewRoom in the same package).
type legacyMutex struct {
	m sync.Mutex
}

func (l *legacyMutex) Lock()   { l.m.Lock() }
func (l *legacyMutex) Unlock() { l.m.Unlock() }

// Lock / Unlock delegate to the embedded legacyMutex so state/*.go can call room.Lock().
func (r *Room) Lock()   { r.mu.Lock() }
func (r *Room) Unlock() { r.mu.Unlock() }

func (r *Room) Model() modelx.Room {
	return modelx.Room{
		ID:        r.ID,
		Type:      r.Type,
		TypeDesc:  consts.GameTypes[r.Type],
		Players:   r.Players,
		State:     r.State,
		StateDesc: consts.RoomStates[r.State],
		Creator:   r.Creator,
	}
}

// Gomoku is the LEGACY game-state struct still referenced by state/game/gomoku.go.
// Fields are unchanged from the original gomoku.go; phase-06 replaces this with
// game.Board embedded directly in NewRoom.
type Gomoku struct {
	sync.Mutex
	Room      *Room                                      `json:"room"`
	PlayerIDs [2]int64                                   `json:"playerIds"`
	Board     [consts.GomokuBoardSize][consts.GomokuBoardSize]int `json:"board"`
	Turn      int                                        `json:"turn"`
	States    map[int64]chan int                          `json:"states"`
	MoveCount int                                        `json:"moveCount"`
	LastColor int                                        `json:"lastColor"`
}

func (g *Gomoku) Clean() {
	for _, ch := range g.States {
		close(ch)
	}
}

// ---------------------------------------------------------------------------
// Legacy store functions — delegate to the hashmap-backed store
// ---------------------------------------------------------------------------

func Connected(conn *network.Conn, info *modelx.AuthInfo) *Player {
	player := &Player{
		ID:     conn.ID(),
		IP:     conn.IP(),
		Name:   pkgstrings.Desensitize(info.Name),
		Amount: 2000,
	}
	player.Conn(conn)
	players.Set(conn.ID(), player)
	connPlayers.Set(conn.ID(), player)
	return player
}

func CreateRoom(creator int64, t int) *Room {
	room := &Room{
		ID:         atomic.AddInt64(&roomIds, 1),
		Type:       t,
		State:      consts.RoomStateWaiting,
		Creator:    creator,
		ActiveTime: time.Now(),
		MaxPlayers: 2,
		EnableChat: true,
	}
	roomPlayers.Set(room.ID, map[int64]bool{})
	roomSpectators.Set(room.ID, map[int64]int{})
	rooms.Set(room.ID, room)
	return room
}

func legacyDeleteRoom(room *Room) {
	if room != nil {
		rooms.Del(room.ID)
		roomPlayers.Del(room.ID)
		roomSpectators.Del(room.ID)
		if room.Game != nil {
			room.Game.Clean()
		}
	}
}

func GetRooms() []*Room {
	list := make([]*Room, 0)
	rooms.Foreach(func(e *hashmap.Entry) {
		list = append(list, e.Value().(*Room))
	})
	sort.Slice(list, func(i, j int) bool { return list[i].ID < list[j].ID })
	return list
}

func GetRoom(roomId int64) *Room {
	return legacyGetRoom(roomId)
}

func legacyGetRoom(roomId int64) *Room {
	if v, ok := rooms.Get(roomId); ok {
		return v.(*Room)
	}
	return nil
}

func GetPlayer(playerId int64) *Player {
	return legacyGetPlayer(playerId)
}

func legacyGetPlayer(playerId int64) *Player {
	if v, ok := players.Get(playerId); ok {
		return v.(*Player)
	}
	return nil
}

func legacyGetRoomPlayers(roomId int64) map[int64]bool {
	if v, ok := roomPlayers.Get(roomId); ok {
		return v.(map[int64]bool)
	}
	return nil
}

func legacyGetRoomSpectators(roomId int64) map[int64]int {
	if v, ok := roomSpectators.Get(roomId); ok {
		return v.(map[int64]int)
	}
	return nil
}

func RoomPlayers(roomId int64) map[int64]bool {
	return legacyGetRoomPlayers(roomId)
}

func RoomSpectators(roomId int64) map[int64]int {
	return legacyGetRoomSpectators(roomId)
}

func IsValidPlayer(roomId, playerId int64) bool {
	room := legacyGetRoom(roomId)
	if room == nil {
		return false
	}
	room.Lock()
	defer room.Unlock()
	if ids := legacyGetRoomPlayers(roomId); ids != nil {
		if _, ok := ids[playerId]; ok {
			return true
		}
	}
	if ids := legacyGetRoomSpectators(roomId); ids != nil {
		if _, ok := ids[playerId]; ok {
			return true
		}
	}
	return false
}

func JoinRoom(roomId, playerId int64) error {
	player := legacyGetPlayer(playerId)
	if player == nil {
		return consts.ErrorsExist
	}
	room := legacyGetRoom(roomId)
	if room == nil {
		return consts.ErrorsRoomInvalid
	}
	room.Lock()
	defer room.Unlock()
	if legacyHasKicked(roomId, playerId) {
		return consts.ErrorsJoinFailForKicked
	}
	room.ActiveTime = time.Now()
	if room.Players >= room.MaxPlayers || room.State == consts.RoomStateRunning {
		ids := legacyGetRoomSpectators(roomId)
		ids[playerId] = len(ids)
		player.RoomID = roomId
		player.Role = RoleSpectator
	} else {
		ids := legacyGetRoomPlayers(roomId)
		ids[playerId] = true
		room.Players++
		player.RoomID = roomId
		player.Role = RolePlayer
		if room.Creator == playerId {
			player.Role = RoleOwner
		}
	}
	return nil
}

func LeaveRoom(roomId, playerId int64) {
	room := legacyGetRoom(roomId)
	if room != nil {
		room.Lock()
		defer room.Unlock()
		legacyLeaveRoom(room, legacyGetPlayer(playerId))
	}
}

func legacyLeaveRoom(room *Room, player *Player) {
	if room == nil || player == nil {
		return
	}
	room.ActiveTime = time.Now()
	playerIds := legacyGetRoomPlayers(room.ID)
	if _, ok := playerIds[player.ID]; ok {
		room.Players--
		player.RoomID = 0
		player.Role = ""
		delete(playerIds, player.ID)
		if len(playerIds) > 0 && room.Creator == player.ID {
			for k := range playerIds {
				room.Creator = k
				if p := legacyGetPlayer(k); p != nil {
					p.Role = RoleOwner
				}
				break
			}
		}
	}
	spectatorIds := legacyGetRoomSpectators(room.ID)
	if _, ok := spectatorIds[player.ID]; ok {
		player.RoomID = 0
		player.Role = ""
		delete(spectatorIds, player.ID)
	}
	if len(playerIds) == 0 && len(spectatorIds) == 0 {
		legacyDeleteRoom(room)
	}
}

func Backfill(roomId int64) *Player {
	room := legacyGetRoom(roomId)
	if room == nil {
		return nil
	}
	room.Lock()
	defer room.Unlock()
	return legacyBackfill(room)
}

func legacyBackfill(room *Room) *Player {
	if room.Players >= room.MaxPlayers {
		return nil
	}
	spectatorIds := legacyGetRoomSpectators(room.ID)
	if len(spectatorIds) == 0 {
		return nil
	}
	type entry struct {
		id    int64
		index int
	}
	spectators := make([]entry, 0, len(spectatorIds))
	for id, index := range spectatorIds {
		spectators = append(spectators, entry{id, index})
	}
	sort.Slice(spectators, func(i, j int) bool { return spectators[i].index < spectators[j].index })
	playerId := spectators[0].id
	delete(spectatorIds, playerId)
	legacyGetRoomPlayers(room.ID)[playerId] = true
	room.Players++
	player := legacyGetPlayer(playerId)
	if player != nil {
		player.Role = RolePlayer
	}
	return player
}

func Kicking(roomId, playerId int64) {
	room := legacyGetRoom(roomId)
	if room == nil {
		return
	}
	room.Lock()
	defer room.Unlock()
	legacyLeaveRoom(room, legacyGetPlayer(playerId))
	kicked, ok := roomKickedPlayers.Get(roomId)
	if !ok {
		kicked = map[int64]bool{}
		roomKickedPlayers.Set(roomId, kicked)
	}
	kicked.(map[int64]bool)[playerId] = true
}

func legacyHasKicked(roomId, playerId int64) bool {
	kicked, ok := roomKickedPlayers.Get(roomId)
	if !ok {
		return false
	}
	_, exists := kicked.(map[int64]bool)[playerId]
	return exists
}

func SetRoomProps(room *Room, k, v string) {
	setter := map[string]func(*Room, string){
		consts.RoomPropsPassword: func(r *Room, v string) {
			if v == "off" {
				r.Password = ""
			} else {
				r.Password = v
			}
		},
		consts.RoomPropsShowIP: func(r *Room, v string) {
			r.EnableShowIP = v == "on"
		},
	}
	if fn, ok := setter[k]; ok {
		fn(room, v)
	}
}

func legacyBroadcast(room *Room, msg string, exclude ...int64) {
	room.ActiveTime = time.Now()
	excludeSet := make(map[int64]bool, len(exclude))
	for _, id := range exclude {
		excludeSet[id] = true
	}
	for playerId := range legacyGetRoomPlayers(room.ID) {
		if p := legacyGetPlayer(playerId); p != nil && !excludeSet[playerId] {
			_ = p.WriteString(">> " + msg)
		}
	}
	for playerId := range legacyGetRoomSpectators(room.ID) {
		if p := legacyGetPlayer(playerId); p != nil && !excludeSet[playerId] {
			_ = p.WriteString(">> " + msg)
		}
	}
}

func Broadcast(roomId int64, msg string, exclude ...int64) {
	room := legacyGetRoom(roomId)
	if room == nil {
		return
	}
	legacyBroadcast(room, msg, exclude...)
}

func BroadcastChat(player *Player, msg string, exclude ...int64) {
	log.Infof("chat msg, player %s[%d] %s say: %s\n", player.Name, player.ID, player.IP, msg)
	Broadcast(player.RoomID, pkgstrings.Desensitize(msg), exclude...)
}

func legacyRoomCancel(room *Room) {
	if room.ActiveTime.Add(24 * time.Hour).Before(time.Now()) {
		log.Infof("room %d timed out (24h), removed.\n", room.ID)
		legacyDeleteRoom(room)
		return
	}
	living := false
	for id := range legacyGetRoomPlayers(room.ID) {
		if p := legacyGetPlayer(id); p != nil && p.online {
			living = true
			break
		}
	}
	if !living {
		for id := range legacyGetRoomSpectators(room.ID) {
			if p := legacyGetPlayer(id); p != nil && p.online {
				living = true
				break
			}
		}
	}
	if !living {
		log.Infof("room %d has no live players, removed.\n", room.ID)
		legacyDeleteRoom(room)
	}
}
