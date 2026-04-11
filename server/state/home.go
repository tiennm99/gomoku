package state

import (
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/game"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// homeState is the main lobby. Blocks on CmdCh waiting for room actions.
// GetRooms / SetNickname / Heartbeat are stateless and never reach CmdCh.
type homeState struct{}

func (*homeState) Next(player *database.Player) (consts.StateID, error) {
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

	case *protocol.Request_ClientExit:
		return 0, ErrClientExit

	default:
		// Unexpected for this state — log and stay.
		log.Errorf("[home] player %d: unexpected request %T, staying\n", player.ID, req.Payload)
		return consts.StateHome, nil
	}
}

func handleCreateRoom(player *database.Player) (consts.StateID, error) {
	room, err := database.CreatePvpRoom(player)
	if err != nil {
		log.Errorf("[home] CreatePvpRoom error player %d: %v\n", player.ID, err)
		return consts.StateHome, nil
	}

	// Owner joins as a player immediately.
	if err := database.JoinNewRoom(room.ID, player); err != nil {
		log.Errorf("[home] JoinNewRoom error player %d room %d: %v\n", player.ID, room.ID, err)
		return consts.StateHome, nil
	}

	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_RoomCreateSuccess{
			RoomCreateSuccess: &protocol.RoomCreateSuccessResponse{
				Id:        int32(room.ID),
				RoomOwner: player.Name,
				RoomType:  "PVP",
			},
		},
	})

	return consts.StateWaiting, nil
}

func handleCreatePveRoom(player *database.Player, req *protocol.Request) (consts.StateID, error) {
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
	room, err := database.CreatePveRoom(player, difficulty)
	if err != nil {
		log.Errorf("[home] CreatePveRoom error player %d: %v\n", player.ID, err)
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_PveDifficultyNotSupport{
				PveDifficultyNotSupport: &protocol.PveDifficultyNotSupportResponse{},
			},
		})
		return consts.StateHome, nil
	}

	if err := database.JoinNewRoom(room.ID, player); err != nil {
		log.Errorf("[home] JoinNewRoom (PVE) error player %d room %d: %v\n", player.ID, room.ID, err)
		return consts.StateHome, nil
	}

	room.Lock()
	room.Status = database.RoomStatusPlaying
	room.CurrentTurn = game.Black // Black always moves first per Gomoku rules.
	room.Unlock()

	// Send GameStartingResponse to the human player.
	resp := buildGameStartingResponse(room, player)
	_ = player.Send(resp)

	return consts.StateGamePve, nil
}

func handleJoinRoom(player *database.Player, req *protocol.Request) (consts.StateID, error) {
	roomID := int64(req.GetJoinRoom().GetRoomId())

	err := database.JoinNewRoom(roomID, player)
	if err != nil {
		switch err {
		case database.ErrRoomFull, database.ErrRoomPlaying:
			owner := ""
			if r, ok := database.GetNewRoom(roomID); ok {
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

	room, ok := database.GetNewRoom(roomID)
	if !ok {
		return consts.StateHome, nil
	}

	room.RLock()
	playerCount := len(room.Players)
	owner := room.OwnerNickname
	room.RUnlock()

	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_RoomJoinSuccess{
			RoomJoinSuccess: &protocol.RoomJoinSuccessResponse{
				ClientId:        int32(player.ID),
				ClientNickname:  player.Name,
				RoomId:          int32(roomID),
				RoomOwner:       owner,
				RoomClientCount: int32(playerCount),
			},
		},
	})

	// Notify existing room members that someone joined.
	broadcastJoined(room, player)

	return consts.StateWaiting, nil
}

// broadcastJoined notifies existing players in the room that joiner has arrived.
func broadcastJoined(room *database.NewRoom, joiner *database.Player) {
	room.RLock()
	targets := make([]*database.Player, 0, len(room.Players))
	for id, p := range room.Players {
		if id != joiner.ID {
			targets = append(targets, p)
		}
	}
	room.RUnlock()

	for _, p := range targets {
		_ = p.Send(&protocol.Response{
			Payload: &protocol.Response_GameReady{
				GameReady: &protocol.GameReadyResponse{
					ClientNickname: joiner.Name,
					Status:         "joined",
					ClientId:       int32(joiner.ID),
				},
			},
		})
	}
}
