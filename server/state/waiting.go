package state

import (
	"bytes"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/state/game"
)

type waiting struct{}

func (s *waiting) Next(player *database.Player) (consts.StateID, error) {
	room := database.GetRoom(player.RoomID)
	if room == nil {
		return 0, consts.ErrorsExist
	}
	s.Backfill(room)

	access, err := s.waitingForStart(player, room)
	if err != nil {
		return 0, err
	}
	if access {
		switch room.Type {
		case consts.GameTypeGomoku:
			return consts.StateGomokuGame, nil
		}
	}
	return s.Exit(player), nil
}

func (s *waiting) Exit(player *database.Player) consts.StateID {
	room := database.GetRoom(player.RoomID)
	if room != nil {
		isOwner := room.Creator == player.ID
		database.LeaveRoom(room.ID, player.ID)
		database.Broadcast(room.ID, fmt.Sprintf("%s exited room! room current has %d players\n", player.Name, room.Players))
		if isOwner {
			newOwner := database.GetPlayer(room.Creator)
			database.Broadcast(room.ID, fmt.Sprintf("%s become new owner\n", newOwner.Name))
		}
		s.Backfill(room)
	}
	return consts.StateHome
}

func (*waiting) Backfill(room *database.Room) {
	if room.State == consts.RoomStateRunning {
		return
	}
	newPlayer := database.Backfill(room.ID)
	if newPlayer != nil {
		database.Broadcast(room.ID, fmt.Sprintf("%s has joined room! room current has %d players\n", newPlayer.Name, room.Players))
	}
}

func (*waiting) Kicking(player *database.Player) {
	room := database.GetRoom(player.RoomID)
	if room != nil {
		database.Broadcast(room.ID, fmt.Sprintf("%s has been kicked!\n", player.Name))
		database.Kicking(room.ID, player.ID)
		database.Broadcast(room.ID, fmt.Sprintf("room current has %d players\n", room.Players))
	}
}

func (s *waiting) waitingForStart(player *database.Player, room *database.Room) (bool, error) {
	access := false
	player.StartTransaction()
	defer player.StopTransaction()
	loopCount := 0
	for {
		loopCount++
		if loopCount%100 == 0 {
			log.Infof("[waitingForStart] Player %d (Room %d) loop count: %d, room.State: %d, access: %v\n", player.ID, player.RoomID, loopCount, room.State, access)
		}
		signal, err := player.AskForStringWithoutTransaction(time.Second)
		if err != nil && err != consts.ErrorsTimeout {
			return access, err
		}

		if !database.IsValidPlayer(room.ID, player.ID) {
			return false, consts.ErrorsPlayerNotInRoom
		}

		if room.State == consts.RoomStateRunning && player.Role == database.RolePlayer {
			access = true
			break
		}
		signal = strings.TrimSpace(strings.ToLower(signal))
		if signal == "" {
			continue
		}

		segments := strings.Split(signal, " ")
		if len(segments) == 1 {
			if segments[0] == "ls" || segments[0] == "v" {
				viewRoomPlayers(room, player)
				continue
			} else if segments[0] == "start" || signal == "s" {
				if room.Creator == player.ID {
					if room.Players <= 1 {
						_ = player.WriteError(consts.ErrorsGamePlayersInsufficient)
						continue
					}
					err = startGame(player, room)
					if err != nil {
						return access, err
					}
					access = true
					break
				}
			}
		} else if len(segments) == 2 {
			if segments[0] == "kicking" || segments[0] == "kill" || segments[0] == "k" {
				if room.Creator == player.ID {
					kickedId, _ := strconv.ParseInt(segments[1], 10, 64)
					if kickedId == player.ID {
						_ = player.WriteError(consts.ErrorsCannotKickYourself)
						continue
					}
					kickedPlayer := database.GetPlayer(kickedId)
					if kickedPlayer == nil || kickedPlayer.RoomID != room.ID {
						_ = player.WriteError(consts.ErrorsPlayerNotInRoom)
						continue
					}
					s.Kicking(kickedPlayer)
					continue
				}
			}
		} else if len(segments) == 3 && room.Creator == player.ID {
			database.SetRoomProps(room, segments[1], segments[2])
			continue
		}

		if room.EnableChat {
			if room.State == consts.RoomStateRunning {
				_ = player.WriteString(fmt.Sprintf("%s\n", consts.ErrorsChatUnopenedDuringGame.Error()))
			} else {
				database.BroadcastChat(player, fmt.Sprintf("%s [%s] say: %s\n", player.Name, player.Role, signal))
			}
		} else {
			_ = player.WriteString(fmt.Sprintf("%s\n", consts.ErrorsChatUnopened.Error()))
		}
	}
	return access, nil
}

func startGame(player *database.Player, room *database.Room) (err error) {
	room.Lock()
	defer room.Unlock()
	switch room.Type {
	case consts.GameTypeGomoku:
		room.Game, err = game.InitGomokuGame(room)
	}
	if err != nil {
		_ = player.WriteError(err)
		return err
	}
	room.State = consts.RoomStateRunning
	return nil
}

func viewRoomPlayers(room *database.Room, currPlayer *database.Player) {
	buf := bytes.Buffer{}
	buf.WriteString(fmt.Sprintf("Room ID: %d\n", room.ID))
	buf.WriteString("Players:\n")
	for playerId := range database.RoomPlayers(room.ID) {
		player := database.GetPlayer(playerId)
		if room.EnableShowIP {
			buf.WriteString(fmt.Sprintf("%s [%s], score: %d, id: %d, ip: %s\n", player.Name, player.Role, player.Amount, player.ID, maskIP(player.IP)))
		} else {
			buf.WriteString(fmt.Sprintf("%s [%s], score: %d, id: %d\n", player.Name, player.Role, player.Amount, player.ID))
		}
	}

	buf.WriteString("\nSpectators:\n")
	for spectatorId := range database.RoomSpectators(room.ID) {
		spectator := database.GetPlayer(spectatorId)
		if room.EnableShowIP {
			buf.WriteString(fmt.Sprintf("%s [spectator], score: %d, id: %d, ip: %s\n", spectator.Name, spectator.Amount, spectator.ID, maskIP(spectator.IP)))
		} else {
			buf.WriteString(fmt.Sprintf("%s [spectator], score: %d, id: %d\n", spectator.Name, spectator.Amount, spectator.ID))
		}
	}

	buf.WriteString("\nSettings:\n")
	buf.WriteString(fmt.Sprintf("%-5s%-5v\n", "ip:", sprintPropsState(room.EnableShowIP)))
	pwd := room.Password
	if pwd != "" {
		if room.Creator != currPlayer.ID {
			pwd = "********"
		}
	} else {
		pwd = "off"
	}
	buf.WriteString(fmt.Sprintf("%-5s%-20v\n", "pwd", pwd))
	_ = currPlayer.WriteString(buf.String())
}

func sprintPropsState(on bool) string {
	if on {
		return "on"
	}
	return "off"
}

func maskIP(ip string) string {
	parts := strings.Split(ip, ".")
	if len(parts) == 4 {
		return parts[0] + "." + parts[1] + ".*.*"
	}
	return "*.*.*.*"
}
