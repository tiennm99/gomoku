package state

import (
	"math/rand"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// waitingState handles the pre-game lobby for PVP rooms.
//
// Owner path: loops on CmdCh accepting GameStartingRequest (only when
// room.PlayerCount() == 2). On valid start, randomises colors, broadcasts
// GameStartingResponse to both players, transitions to StateGamePvp.
//
// Joiner path: loops on CmdCh. Transitions to StateGamePvp when it receives
// a GameStartingRequest (the owner's broadcast pushes it via the start channel).
// The implementation uses a StartCh (chan struct{}) on the room so the joiner
// can select on both CmdCh and the room's start signal without polling.
type waitingState struct{}

func (*waitingState) Next(player *database.Player) (consts.StateID, error) {
	room, ok := database.GetNewRoom(player.RoomID)
	if !ok {
		log.Errorf("[waiting] player %d: room %d not found\n", player.ID, player.RoomID)
		return consts.StateHome, nil
	}

	isOwner := room.IsOwner(player.ID)
	if isOwner {
		return ownerWait(player, room)
	}
	return joinerWait(player, room)
}

// ownerWait loops until the owner triggers a valid GameStartingRequest or exits.
func ownerWait(player *database.Player, room *database.NewRoom) (consts.StateID, error) {
	for {
		req, ok := <-player.CmdCh
		if !ok {
			leaveRoom(player, room)
			return 0, ErrClientExit
		}

		switch req.Payload.(type) {
		case *protocol.Request_GameStarting:
			room.RLock()
			count := room.PlayerCount()
			room.RUnlock()

			if count < 2 {
				// Not enough players — reject and stay.
				_ = player.Send(&protocol.Response{
					Payload: &protocol.Response_RoomPlayFailNotFound{
						RoomPlayFailNotFound: &protocol.RoomPlayFailNotFoundResponse{},
					},
				})
				continue
			}

			// Randomise color assignment for fairness.
			assignColors(room)

			// Broadcast GameStartingResponse to all players in room.
			resp := buildGameStartingResponse(room)
			broadcastResponse(room, resp)

			// Mark room as playing.
			room.Lock()
			room.Status = database.RoomStatusPlaying
			room.CurrentTurn = game.Black
			// Signal joiner via StartCh if present.
			if room.StartCh != nil {
				close(room.StartCh)
				room.StartCh = nil
			}
			room.Unlock()

			return consts.StateGamePvp, nil

		case *protocol.Request_ClientExit:
			leaveRoom(player, room)
			return 0, ErrClientExit

		default:
			log.Errorf("[waiting/owner] player %d: unexpected %T, ignoring\n", player.ID, req.Payload)
		}
	}
}

// joinerWait blocks until the owner starts the game (via StartCh) or the joiner exits.
func joinerWait(player *database.Player, room *database.NewRoom) (consts.StateID, error) {
	room.RLock()
	startCh := room.StartCh
	room.RUnlock()

	for {
		if startCh == nil {
			// StartCh not set or already closed — check status.
			room.RLock()
			status := room.Status
			room.RUnlock()
			if status == database.RoomStatusPlaying {
				return consts.StateGamePvp, nil
			}
			// Fall back to CmdCh-only select.
			startCh = make(chan struct{}) // never closed; effectively disables the case
		}

		select {
		case <-startCh:
			// Owner started the game.
			return consts.StateGamePvp, nil

		case req, ok := <-player.CmdCh:
			if !ok {
				leaveRoom(player, room)
				return 0, ErrClientExit
			}
			switch req.Payload.(type) {
			case *protocol.Request_ClientExit:
				leaveRoom(player, room)
				return 0, ErrClientExit
			default:
				// Non-exit requests ignored in joiner waiting state.
				log.Errorf("[waiting/joiner] player %d: unexpected %T, ignoring\n", player.ID, req.Payload)
			}
		}
	}
}

// assignColors randomly assigns Black/White to the two players in a PVP room.
// Caller must NOT hold room.Lock() before calling — acquires it internally.
func assignColors(room *database.NewRoom) {
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
// Notifies remaining players via ClientExitResponse.
func leaveRoom(player *database.Player, room *database.NewRoom) {
	roomID := room.ID
	database.LeaveNewRoom(player)

	room.RLock()
	targets := make([]*database.Player, 0, len(room.Players))
	for _, p := range room.Players {
		targets = append(targets, p)
	}
	room.RUnlock()

	exitResp := &protocol.Response{
		Payload: &protocol.Response_ClientExit{
			ClientExit: &protocol.ClientExitResponse{
				RoomId:             int32(roomID),
				ExitClientId:       int32(player.ID),
				ExitClientNickname: player.Name,
			},
		},
	}
	for _, p := range targets {
		_ = p.Send(exitResp)
	}
}
