package state

import (
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// gamePveState is the PVE game loop for the human player.
// The AI moves are computed inline (no goroutine — AI is fast).
// If the human is White, AI moves first before entering the human-wait loop.
type gamePveState struct{}

func (*gamePveState) Next(player *lobby.Player) (consts.StateID, error) {
	room, ok := lobby.GetNewRoom(player.RoomID)
	if !ok {
		log.Errorf("[pve] player %d: room not found\n", player.ID)
		return consts.StateHome, nil
	}

	humanPiece := playerPieceInRoom(room, player.ID)
	if humanPiece == game.Empty {
		log.Errorf("[pve] player %d not assigned a piece in room %d\n", player.ID, room.ID)
		return consts.StateHome, nil
	}

	// If human is White, AI (Black) moves first.
	if humanPiece == game.White {
		nextState, done := runAIMove(room)
		if done {
			return nextState, nil
		}
	}

	// Human-wait loop: alternate human move → AI move until game over.
	for {
		req, ok := <-player.CmdCh
		if !ok {
			return consts.StateHome, nil
		}

		switch req.Payload.(type) {
		case *protocol.Request_GameMove:
			mv := req.GetGameMove()
			row, col := int(mv.GetRow()), int(mv.GetCol())

			nextState, done := applyHumanMove(player, room, humanPiece, row, col)
			if done {
				return nextState, nil
			}
			// Human move was rejected — stay in loop without AI move.

		case *protocol.Request_ClientExit:
			leaveRoom(player, room)
			return 0, ErrClientExit

		default:
			log.Errorf("[pve] player %d: unexpected %T\n", player.ID, req.Payload)
		}
	}
}

// applyHumanMove validates/applies the human's move then triggers AI response.
// Returns (nextState, true) when the state should change; (0, false) on invalid move.
func applyHumanMove(player *lobby.Player, room *lobby.NewRoom, humanPiece game.Piece, row, col int) (consts.StateID, bool) {
	if row < 0 || row >= game.BoardSize || col < 0 || col >= game.BoardSize {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_GameMoveOutOfBounds{
				GameMoveOutOfBounds: &protocol.GameMoveOutOfBoundsResponse{},
			},
		})
		return 0, false
	}

	room.Lock()
	result, err := room.ApplyMove(row, col, humanPiece, player.ID)
	room.Unlock()

	if err != nil {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_GameMoveOccupied{
				GameMoveOccupied: &protocol.GameMoveOccupiedResponse{},
			},
		})
		return 0, false
	}

	moveResp := buildMoveSuccessResponse(row, col, humanPiece, player.ID, player.Name)
	broadcastResponse(room, moveResp)

	if result != game.InProgress {
		winner := winnerNicknameFor(room, result)
		broadcastResponse(room, buildGameOverResponse(result, winner))
		room.Lock()
		room.Status = lobby.RoomStatusFinished
		room.Unlock()
		return consts.StateGameOver, true
	}

	// AI's turn.
	return runAIMove(room)
}

// runAIMove computes and applies the AI's next move, broadcasts it, and checks result.
// Returns (nextState, true) if the game ends, (0, false) to continue.
func runAIMove(room *lobby.NewRoom) (consts.StateID, bool) {
	room.RLock()
	ai := room.AI
	board := room.Board.Clone() // safe value copy for AI computation
	difficulty := room.Difficulty
	room.RUnlock()

	if ai == nil {
		log.Errorf("[pve] room %d has nil AI\n", room.ID)
		return consts.StateHome, true
	}

	aiRow, aiCol, ok := ai.NextMove(&board, difficulty)
	if !ok {
		// Board full — draw.
		broadcastResponse(room, buildGameOverResponse(game.Draw, ""))
		room.Lock()
		room.Status = lobby.RoomStatusFinished
		room.Unlock()
		return consts.StateGameOver, true
	}

	// Derive AI's piece from room color assignment (-1 is the AI slot).
	room.RLock()
	var aiPiece game.Piece
	if room.BlackPlayerID == -1 {
		aiPiece = game.Black
	} else {
		aiPiece = game.White
	}
	room.RUnlock()

	room.Lock()
	result, err := room.ApplyMove(aiRow, aiCol, aiPiece, -1)
	room.Unlock()

	if err != nil {
		log.Errorf("[pve] AI produced invalid move (%d,%d): %v\n", aiRow, aiCol, err)
		return consts.StateGameOver, true
	}

	aiMoveResp := buildMoveSuccessResponse(aiRow, aiCol, aiPiece, -1, "AI")
	broadcastResponse(room, aiMoveResp)

	if result != game.InProgress {
		winner := winnerNicknameFor(room, result)
		broadcastResponse(room, buildGameOverResponse(result, winner))
		room.Lock()
		room.Status = lobby.RoomStatusFinished
		room.Unlock()
		return consts.StateGameOver, true
	}

	return 0, false
}
