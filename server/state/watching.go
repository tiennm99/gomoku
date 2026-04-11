// Package state — watchingState handles the read-only spectator view of a game.
// A spectator sits in this state after successfully calling WatchGame from home.
// Live broadcasts (moves, game-over) arrive via player.SendCh (push model) because
// broadcastResponse in game_shared.go already iterates room.Spectators.
// The state machine here only needs to handle explicit control messages on CmdCh.
package state

import (
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// watchingState is the per-player state for a spectator watching an in-progress game.
// Accepted commands:
//   - WatchGameExitRequest → unwatch, show options menu, go to StateHome.
//   - ClientExitRequest    → unwatch, return ErrClientExit (connection close).
//   - GameMoveRequest      → rejected with SpectatorCannotActResponse, stay.
//   - (closed CmdCh)       → unwatch, return ErrClientExit.
//   - any other request    → log and stay (spectator cannot act).
type watchingState struct{}

func (*watchingState) Next(player *database.Player) (consts.StateID, error) {
	req, ok := <-player.CmdCh
	if !ok {
		// Connection closed or channel drained — clean up quietly.
		database.UnwatchNewRoom(player)
		return 0, ErrClientExit
	}

	switch req.Payload.(type) {
	case *protocol.Request_WatchGameExit:
		database.UnwatchNewRoom(player)
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_ShowOptions{
				ShowOptions: &protocol.ShowOptionsResponse{},
			},
		})
		return consts.StateHome, nil

	case *protocol.Request_ClientExit:
		database.UnwatchNewRoom(player)
		return 0, ErrClientExit

	case *protocol.Request_GameMove:
		// Spectators may not make moves.
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_SpectatorCannotAct{
				SpectatorCannotAct: &protocol.SpectatorCannotActResponse{},
			},
		})
		return consts.StateWatching, nil

	default:
		log.Errorf("[watching] player %d: unexpected request %T while spectating, ignoring\n",
			player.ID, req.Payload)
		return consts.StateWatching, nil
	}
}
