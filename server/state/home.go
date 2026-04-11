package state

import (
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// homeState is the main lobby. Blocks on CmdCh waiting for room actions.
// GetRooms / SetNickname / Heartbeat are stateless and never reach CmdCh.
type homeState struct{}

func (*homeState) Next(player *lobby.Player) (consts.StateID, error) {
	req, ok := <-player.CmdCh
	if !ok {
		return 0, ErrClientExit
	}

	switch req.Payload.(type) {
	case *protocol.Request_CreateRoom:
		return handleCreateRoom(player)

	case *protocol.Request_CreatePveRoom:
		return handleCreatePveRoom(player, req)

	case *protocol.Request_JoinRoom:
		return handleJoinRoom(player, req)

	case *protocol.Request_WatchGame:
		return handleWatchGame(player, req)

	case *protocol.Request_ClientExit:
		return 0, ErrClientExit

	default:
		// Unexpected for this state — log and stay.
		log.Errorf("[home] player %d: unexpected request %T, staying\n", player.ID, req.Payload)
		return consts.StateHome, nil
	}
}

func handleCreateRoom(player *lobby.Player) (consts.StateID, error) {
	room, err := lobby.CreatePvpRoom(player)
	if err != nil {
		log.Errorf("[home] CreatePvpRoom error player %d: %v\n", player.ID, err)
		return consts.StateHome, nil
	}

	// Owner joins as a player immediately.
	if err := lobby.JoinRoom(room.ID, player); err != nil {
		log.Errorf("[home] JoinRoom error player %d room %d: %v\n", player.ID, room.ID, err)
		return consts.StateHome, nil
	}

	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_RoomCreateSuccess{
			RoomCreateSuccess: &protocol.RoomCreateSuccessResponse{
				Id:        int32(room.ID),
				RoomOwner: player.Name,
				RoomType:  protocol.RoomType_PVP,
			},
		},
	})

	return consts.StateWaiting, nil
}

func handleCreatePveRoom(player *lobby.Player, req *protocol.Request) (consts.StateID, error) {
	difficulty := int(req.GetCreatePveRoom().GetDifficulty())
	if difficulty < consts.DifficultyEasy || difficulty > consts.DifficultyHard {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_PveDifficultyNotSupport{
				PveDifficultyNotSupport: &protocol.PveDifficultyNotSupportResponse{},
			},
		})
		return consts.StateHome, nil
	}

	// CreatePveRoom already randomizes human color and creates the AI.
	room, err := lobby.CreatePveRoom(player, difficulty)
	if err != nil {
		log.Errorf("[home] CreatePveRoom error player %d: %v\n", player.ID, err)
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_PveDifficultyNotSupport{
				PveDifficultyNotSupport: &protocol.PveDifficultyNotSupportResponse{},
			},
		})
		return consts.StateHome, nil
	}

	if err := lobby.JoinRoom(room.ID, player); err != nil {
		log.Errorf("[home] JoinRoom (PVE) error player %d room %d: %v\n", player.ID, room.ID, err)
		return consts.StateHome, nil
	}

	room.Lock()
	room.Status = lobby.RoomStatusPlaying
	room.CurrentTurn = game.Black // Black always moves first per Gomoku rules.
	room.Unlock()

	// Send GameStartingResponse to the human player.
	resp := buildGameStartingResponse(room)
	_ = player.Send(resp)

	return consts.StateGamePve, nil
}

func handleJoinRoom(player *lobby.Player, req *protocol.Request) (consts.StateID, error) {
	roomID := int64(req.GetJoinRoom().GetRoomId())

	err := lobby.JoinRoom(roomID, player)
	if err != nil {
		switch err {
		case lobby.ErrRoomFull, lobby.ErrRoomPlaying:
			owner := ""
			if r, ok := lobby.GetRoom(roomID); ok {
				owner = r.OwnerNickname
			}
			_ = player.Send(&protocol.Response{
				Payload: &protocol.Response_RoomJoinFailFull{
					RoomJoinFailFull: &protocol.RoomJoinFailFullResponse{
						RoomId:    int32(roomID),
						RoomOwner: owner,
					},
				},
			})
		default:
			_ = player.Send(&protocol.Response{
				Payload: &protocol.Response_RoomJoinFailNotFound{
					RoomJoinFailNotFound: &protocol.RoomJoinFailNotFoundResponse{
						RoomId: int32(roomID),
					},
				},
			})
		}
		return consts.StateHome, nil
	}

	room, ok := lobby.GetRoom(roomID)
	if !ok {
		return consts.StateHome, nil
	}

	room.RLock()
	playerCount := len(room.Players)
	owner := room.OwnerNickname
	room.RUnlock()

	// Broadcast RoomJoinSuccessResponse to ALL players in the room (owner + joiner).
	// The owner uses this to update the live waiting-room player count and enable
	// the Start Game button; the joiner uses this to render their passive waiting view.
	resp := &protocol.Response{
		Payload: &protocol.Response_RoomJoinSuccess{
			RoomJoinSuccess: &protocol.RoomJoinSuccessResponse{
				ClientId:        int32(player.ID),
				ClientNickname:  player.Name,
				RoomId:          int32(roomID),
				RoomOwner:       owner,
				RoomClientCount: int32(playerCount),
			},
		},
	}
	broadcastResponse(room, resp)

	return consts.StateWaiting, nil
}

func handleWatchGame(player *lobby.Player, req *protocol.Request) (consts.StateID, error) {
	roomID := int64(req.GetWatchGame().GetRoomId())

	room, ok := lobby.GetRoom(roomID)
	if !ok {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_RoomPlayFailNotFound{
				RoomPlayFailNotFound: &protocol.RoomPlayFailNotFoundResponse{},
			},
		})
		return consts.StateHome, nil
	}

	if err := lobby.WatchRoom(roomID, player); err != nil {
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_RoomPlayFailNotFound{
				RoomPlayFailNotFound: &protocol.RoomPlayFailNotFoundResponse{},
			},
		})
		return consts.StateHome, nil
	}

	sendRoomSnapshot(player, room)
	return consts.StateWatching, nil
}

