package state

import (
	"math/rand"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// waitingState handles the pre-game lobby for PVP rooms.
//
// Auto-start semantics: the game begins automatically as soon as a second
// player joins — no explicit "Start Game" click. handleJoinRoom (on the
// joiner's goroutine) does the color assignment + Playing-state flip +
// GameStartingResponse broadcast + closes StartCh. Both the owner sitting
// here and the joiner receive the broadcast; the owner wakes via StartCh
// and the joiner transitions directly from home into gamePvpState.
//
// This state therefore has one job: wait for either StartCh (game starting)
// or ClientExit (player leaves the room before the game begins).
type waitingState struct{}

func (*waitingState) Next(player *lobby.Player) (consts.StateID, error) {
	room, ok := lobby.GetRoom(player.RoomID)
	if !ok {
		log.Errorf("[waiting] player %d: room %d not found\n", player.ID, player.RoomID)
		return consts.StateHome, nil
	}

	// Snapshot StartCh + Status. If the game has already started (joiner
	// auto-start fired before this goroutine got scheduled) transition right
	// away — no need to block on the now-closed channel.
	room.RLock()
	startCh := room.StartCh
	status := room.Status
	room.RUnlock()
	if status == lobby.RoomStatusPlaying {
		return consts.StateGamePvp, nil
	}
	if startCh == nil {
		// Edge case: StartCh was cleared but status is still Waiting. Shouldn't
		// normally happen; fall through to CmdCh-only loop via a never-closed
		// placeholder so we can still handle ClientExit.
		startCh = make(chan struct{})
	}

	for {
		select {
		case <-startCh:
			return consts.StateGamePvp, nil

		case req, reqOk := <-player.CmdCh:
			if !reqOk {
				// WS closed — bail out of the state machine entirely.
				leaveRoom(player, room)
				return 0, ErrClientExit
			}
			switch req.Payload.(type) {
			case *protocol.Request_ClientExit:
				leaveRoom(player, room)
				return consts.StateHome, nil
			default:
				log.Errorf("[waiting] player %d: unexpected %T, ignoring\n", player.ID, req.Payload)
			}
		}
	}
}

// assignColors randomly assigns Black/White to the two players in a PVP room.
// Caller must NOT hold room.Lock() before calling — acquires it internally.
func assignColors(room *lobby.Room) {
	room.Lock()
	playerIDs := make([]int64, 0, 2)
	for id := range room.Players {
		playerIDs = append(playerIDs, id)
	}
	room.Unlock()

	if len(playerIDs) < 2 {
		return
	}

	// Shuffle to randomise which player gets Black.
	rand.Shuffle(len(playerIDs), func(i, j int) {
		playerIDs[i], playerIDs[j] = playerIDs[j], playerIDs[i]
	})

	room.Lock()
	room.BlackPlayerID = playerIDs[0]
	room.WhitePlayerID = playerIDs[1]
	room.Unlock()
}

// leaveRoom removes player from their current room cleanly.
// Broadcasts ClientExitResponse to everyone in the room BEFORE removing the
// player, so the exiting player also receives their own exit confirmation
// (used by the client to transition UI back to the lobby). The client
// distinguishes self vs peer via exit_client_id.
func leaveRoom(player *lobby.Player, room *lobby.Room) {
	exitResp := &protocol.Response{
		Payload: &protocol.Response_ClientExit{
			ClientExit: &protocol.ClientExitResponse{
				RoomId:             int32(room.ID),
				ExitClientId:       int32(player.ID),
				ExitClientNickname: player.Name,
			},
		},
	}
	// Broadcast first (player still in room.Players + room.Spectators).
	broadcastResponse(room, exitResp)
	// Then remove from the room.
	lobby.LeaveRoom(player)
}

// kickStaleRoomPeers pushes a synthetic ClientExitRequest onto every remaining
// player's CmdCh if the room is now unplayable (PVP with fewer than 2 human
// players). Used after leaveRoom in the gameover path to prevent peers from
// sitting in gameoverState forever once the game cannot continue.
//
// Safe to call with a room that was already deleted from the store — the
// caller holds a reference; we just drain room.Players for peers still around.
func kickStaleRoomPeers(room *lobby.Room) {
	room.RLock()
	roomType := room.RoomType
	peers := make([]*lobby.Player, 0, len(room.Players))
	for _, p := range room.Players {
		peers = append(peers, p)
	}
	room.RUnlock()

	if roomType != lobby.RoomTypePvp {
		return
	}
	if len(peers) >= 2 {
		return // still playable
	}

	syntheticExit := &protocol.Request{
		Payload: &protocol.Request_ClientExit{ClientExit: &protocol.ClientExitRequest{}},
	}
	for _, p := range peers {
		if p.CmdCh == nil {
			continue
		}
		select {
		case p.CmdCh <- syntheticExit:
		default:
			// CmdCh full — idle reaper will clean up the room eventually.
		}
	}
}
