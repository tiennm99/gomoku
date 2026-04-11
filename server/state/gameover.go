package state

import (
	"math/rand"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// gameOverState waits for the player to request a rematch or exit.
// On GameResetRequest: resets the board, broadcasts GameStartingResponse,
// and transitions back to the appropriate game state (PVP or PVE).
// On ClientExit: removes from room and goes home.
type gameOverState struct{}

func (*gameOverState) Next(player *database.Player) (consts.StateID, error) {
	room, ok := database.GetNewRoom(player.RoomID)
	if !ok {
		// Room gone (e.g. opponent left and room was deleted) — go home.
		return consts.StateHome, nil
	}

	for {
		req, reqOk := <-player.CmdCh
		if !reqOk {
			leaveRoom(player, room)
			return 0, ErrClientExit
		}

		switch req.Payload.(type) {
		case *protocol.Request_GameReset:
			return handleGameReset(room)

		case *protocol.Request_ClientExit:
			leaveRoom(player, room)
			return 0, ErrClientExit

		default:
			log.Errorf("[gameover] player %d: unexpected %T, ignoring\n", player.ID, req.Payload)
		}
	}
}

// handleGameReset resets the room and starts a fresh game.
func handleGameReset(room *database.NewRoom) (consts.StateID, error) {
	seed := rand.Int63()
	room.Lock()
	room.Reset(seed)
	room.Status = database.RoomStatusPlaying
	room.CurrentTurn = game.Black
	roomType := room.RoomType
	if roomType == database.RoomTypePvp {
		// Fresh GameOverCh for the new game round so player goroutines can sync again.
		room.GameOverCh = make(chan struct{})
	}
	room.Unlock()

	// Broadcast fresh GameStartingResponse to all players.
	resp := buildGameStartingResponse(room)
	broadcastResponse(room, resp)

	if roomType == database.RoomTypePve {
		return consts.StateGamePve, nil
	}
	return consts.StateGamePvp, nil
}
