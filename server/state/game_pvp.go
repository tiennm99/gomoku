package state

import (
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// gamePvpState is the main PVP game loop for one player goroutine.
// Both player goroutines run this state concurrently; each blocks on its
// own CmdCh waiting for its turn. Move validation enforces turn order.
// When one goroutine detects game-over, it closes room.GameOverCh so the
// other goroutine unblocks and also transitions to StateGameOver.
type gamePvpState struct{}

func (*gamePvpState) Next(player *lobby.Player) (consts.StateID, error) {
	room, ok := lobby.GetRoom(player.RoomID)
	if !ok {
		log.Errorf("[pvp] player %d: room not found\n", player.ID)
		return consts.StateHome, nil
	}

	// gameOverCh allows the "other" goroutine to signal game end.
	room.RLock()
	gameOverCh := room.GameOverCh
	room.RUnlock()

	for {
		var req *protocol.Request
		var chanOk bool

		if gameOverCh != nil {
			select {
			case req, chanOk = <-player.CmdCh:
			case <-gameOverCh:
				// Other player triggered game-over — transition.
				return consts.StateGameOver, nil
			}
		} else {
			req, chanOk = <-player.CmdCh
		}

		if !chanOk {
			// Player disconnected — forfeit.
			signalGameOver(room)
			broadcastForfeit(room, player)
			return consts.StateGameOver, nil
		}

		switch req.Payload.(type) {
		case *protocol.Request_GameMove:
			mv := req.GetGameMove()
			row, col := int(mv.GetRow()), int(mv.GetCol())

			nextState, done := applyPvpMove(player, room, row, col)
			if done {
				return nextState, nil
			}
			// Stay in loop — invalid move or not player's turn.

		case *protocol.Request_ClientExit:
			signalGameOver(room)
			broadcastForfeit(room, player)
			leaveRoom(player, room)
			return 0, ErrClientExit

		default:
			log.Errorf("[pvp] player %d: unexpected %T\n", player.ID, req.Payload)
		}
	}
}

// signalGameOver closes room.GameOverCh exactly once so the other player goroutine
// unblocks and transitions to StateGameOver.
func signalGameOver(room *lobby.Room) {
	room.Lock()
	ch := room.GameOverCh
	if ch != nil {
		room.GameOverCh = nil // prevent double close
	}
	room.Unlock()
	if ch != nil {
		close(ch)
	}
}

// applyPvpMove validates and applies a move. Returns (nextState, true) when
// the state should change; (0, false) when move is rejected (stay in loop).
func applyPvpMove(player *lobby.Player, room *lobby.Room, row, col int) (consts.StateID, bool) {
	myPiece := playerPieceInRoom(room, player.ID)
	if myPiece == game.Empty {
		log.Errorf("[pvp] player %d not assigned a piece in room %d\n", player.ID, room.ID)
		return consts.StateHome, true
	}

	room.RLock()
	currentTurn := room.CurrentTurn
	room.RUnlock()

	if currentTurn != myPiece {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_GameMoveNotYourTurn{
				GameMoveNotYourTurn: &protocol.GameMoveNotYourTurnResponse{},
			},
		})
		return 0, false
	}

	if row < 0 || row >= game.BoardSize || col < 0 || col >= game.BoardSize {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_GameMoveOutOfBounds{
				GameMoveOutOfBounds: &protocol.GameMoveOutOfBoundsResponse{},
			},
		})
		return 0, false
	}

	room.Lock()
	result, err := room.ApplyMove(row, col, myPiece, player.ID)
	room.Unlock()

	if err != nil {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_GameMoveOccupied{
				GameMoveOccupied: &protocol.GameMoveOccupiedResponse{},
			},
		})
		return 0, false
	}

	moveResp := buildMoveSuccessResponse(row, col, myPiece, player.ID, player.Name)
	broadcastResponse(room, moveResp)

	if result != game.InProgress {
		winner := winnerNicknameFor(room, result)
		broadcastResponse(room, buildGameOverResponse(result, winner))

		room.Lock()
		room.Status = lobby.RoomStatusFinished
		room.Unlock()

		// Signal the other player goroutine.
		signalGameOver(room)

		return consts.StateGameOver, true
	}

	return 0, false
}

// broadcastForfeit sends a GameOver response declaring the opponent as winner.
func broadcastForfeit(room *lobby.Room, disconnected *lobby.Player) {
	room.RLock()
	var winner *lobby.Player
	for id, p := range room.Players {
		if id != disconnected.ID {
			winner = p
			break
		}
	}
	room.RUnlock()

	winnerName := "Unknown"
	if winner != nil {
		winnerName = winner.Name
	}

	// Use a neutral result string; caller supplies winner name.
	broadcastResponse(room, buildGameOverResponse(game.BlackWin, winnerName))

	room.Lock()
	room.Status = lobby.RoomStatusFinished
	room.Unlock()
}
