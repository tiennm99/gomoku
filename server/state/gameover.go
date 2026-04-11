package state

import (
	"math/rand"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// gameOverState waits for the player to request a rematch or exit.
//
// In PVP both player goroutines enter this state after the game ends. When
// EITHER player sends GameResetRequest, the room is reset and both goroutines
// must transition to gamePvpState together — otherwise one player would keep
// acting in the fresh game while the other was still stuck in gameover,
// silently dropping their moves.
//
// The cross-goroutine sync uses room.RematchCh (pattern mirrors StartCh in
// waiting state). The first goroutine to enter gameover creates the channel;
// whoever accepts the GameReset closes it, waking the other goroutine.
type gameOverState struct{}

func (*gameOverState) Next(player *lobby.Player) (consts.StateID, error) {
	room, ok := lobby.GetRoom(player.RoomID)
	if !ok {
		// Room gone (e.g. opponent left and room was deleted) — go home.
		return consts.StateHome, nil
	}

	// Lazily create RematchCh on first entry so both goroutines share it.
	room.Lock()
	if room.RematchCh == nil {
		room.RematchCh = make(chan struct{})
	}
	rematchCh := room.RematchCh
	roomType := room.RoomType
	room.Unlock()

	for {
		select {
		case <-rematchCh:
			// Peer accepted a rematch — follow them into the new game.
			if roomType == lobby.RoomTypePve {
				return consts.StateGamePve, nil
			}
			return consts.StateGamePvp, nil

		case req, reqOk := <-player.CmdCh:
			if !reqOk {
				leaveRoom(player, room)
				return 0, ErrClientExit
			}

			switch req.Payload.(type) {
			case *protocol.Request_GameReset:
				return handleGameReset(room)

			case *protocol.Request_ClientExit:
				leaveRoom(player, room)
				// If this left a PVP peer alone in a now-unplayable room,
				// push a synthetic ClientExit onto their CmdCh so their
				// gameoverState goroutine wakes up and transitions home too
				// (instead of silently sitting in gameover while the client
				// believes it's in the lobby — the exact desync reported).
				kickStaleRoomPeers(room)
				return consts.StateHome, nil

			default:
				log.Errorf("[gameover] player %d: unexpected %T, ignoring\n", player.ID, req.Payload)
			}
		}
	}
}

// handleGameReset resets the room, broadcasts a fresh GameStartingResponse,
// and closes RematchCh so the peer gameover goroutine transitions in lockstep.
func handleGameReset(room *lobby.Room) (consts.StateID, error) {
	seed := rand.Int63()
	room.Lock()
	room.Reset(seed)
	room.Status = lobby.RoomStatusPlaying
	room.CurrentTurn = game.Black
	roomType := room.RoomType
	if roomType == lobby.RoomTypePvp {
		// Fresh GameOverCh for the new game round so player goroutines can sync again.
		room.GameOverCh = make(chan struct{})
	}
	// Wake the peer gameover goroutine so both transition into the new game.
	if room.RematchCh != nil {
		close(room.RematchCh)
		room.RematchCh = nil
	}
	room.Unlock()

	// Broadcast fresh GameStartingResponse to all players.
	resp := buildGameStartingResponse(room)
	broadcastResponse(room, resp)

	if roomType == lobby.RoomTypePve {
		return consts.StateGamePve, nil
	}
	return consts.StateGamePvp, nil
}
