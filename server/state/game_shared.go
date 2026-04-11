package state

import (
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/protocol"
)

// buildGameStartingResponse constructs a GameStartingResponse from room state.
// Caller must hold at least room.RLock() or read under protection.
// This function acquires RLock internally for safety.
func buildGameStartingResponse(room *database.NewRoom, forPlayer *database.Player) *protocol.Response {
	room.RLock()
	blackID := room.BlackPlayerID
	whiteID := room.WhitePlayerID
	roomID := room.ID
	room.RUnlock()

	blackNickname := resolveNickname(room, blackID)
	whiteNickname := resolveNickname(room, whiteID)

	return &protocol.Response{
		Payload: &protocol.Response_GameStarting{
			GameStarting: &protocol.GameStartingResponse{
				RoomId:              int32(roomID),
				BlackPlayerId:       int32(blackID),
				BlackPlayerNickname: blackNickname,
				WhitePlayerId:       int32(whiteID),
				WhitePlayerNickname: whiteNickname,
				BoardSize:           int32(game.BoardSize),
			},
		},
	}
}

// resolveNickname maps a playerID to a nickname. Returns "AI" for -1 (PVE AI slot).
func resolveNickname(room *database.NewRoom, playerID int64) string {
	if playerID == -1 {
		return "AI"
	}
	room.RLock()
	p, ok := room.Players[playerID]
	room.RUnlock()
	if ok {
		return p.Name
	}
	return "Unknown"
}

// buildMoveSuccessResponse constructs a GameMoveSuccessResponse.
func buildMoveSuccessResponse(row, col int, piece game.Piece, playerID int64, nickname string) *protocol.Response {
	pieceStr := "black"
	if piece == game.White {
		pieceStr = "white"
	}
	return &protocol.Response{
		Payload: &protocol.Response_GameMoveSuccess{
			GameMoveSuccess: &protocol.GameMoveSuccessResponse{
				Row:            int32(row),
				Col:            int32(col),
				Piece:          pieceStr,
				PlayerNickname: nickname,
				PlayerId:       int32(playerID),
			},
		},
	}
}

// buildGameOverResponse constructs a GameOverResponse.
// result: game.BlackWin / game.WhiteWin / game.Draw
// winnerNickname: name of winning player, empty string for draw.
func buildGameOverResponse(result game.GameResult, winnerNickname string) *protocol.Response {
	resultStr := "draw"
	switch result {
	case game.BlackWin:
		resultStr = "black_win"
	case game.WhiteWin:
		resultStr = "white_win"
	}
	return &protocol.Response{
		Payload: &protocol.Response_GameOver{
			GameOver: &protocol.GameOverResponse{
				Result:         resultStr,
				WinnerNickname: winnerNickname,
			},
		},
	}
}

// broadcastResponse sends resp to all players and spectators in the room.
// Acquires RLock internally; must NOT be called while holding room.Lock().
func broadcastResponse(room *database.NewRoom, resp *protocol.Response) {
	room.RLock()
	targets := make([]*database.Player, 0, len(room.Players)+len(room.Spectators))
	for _, p := range room.Players {
		targets = append(targets, p)
	}
	for _, p := range room.Spectators {
		targets = append(targets, p)
	}
	room.RUnlock()

	for _, p := range targets {
		_ = p.Send(resp)
	}
}

// playerPieceInRoom returns the game.Piece assigned to playerID in room.
// Returns game.Empty if not assigned.
func playerPieceInRoom(room *database.NewRoom, playerID int64) game.Piece {
	room.RLock()
	black := room.BlackPlayerID
	white := room.WhitePlayerID
	room.RUnlock()
	if black == playerID {
		return game.Black
	}
	if white == playerID {
		return game.White
	}
	return game.Empty
}

// winnerNicknameFor returns the display name of the winner given a GameResult.
// Returns empty string for a draw.
func winnerNicknameFor(room *database.NewRoom, result game.GameResult) string {
	room.RLock()
	blackID := room.BlackPlayerID
	whiteID := room.WhitePlayerID
	players := room.Players
	room.RUnlock()

	var winnerID int64
	switch result {
	case game.BlackWin:
		winnerID = blackID
	case game.WhiteWin:
		winnerID = whiteID
	default:
		return ""
	}
	if winnerID == -1 {
		return "AI"
	}
	if p, ok := players[winnerID]; ok {
		return p.Name
	}
	return "Unknown"
}
