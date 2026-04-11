package state

import (
	"bytes"
	"fmt"
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"strconv"
)

// join displays the room list and lets the player pick one to join.
// If the room has a password, the player must enter it before joining.
type join struct{}

func (s *join) Next(player *database.Player) (consts.StateID, error) {
	buf := bytes.Buffer{}
	rooms := database.GetRooms()
	buf.WriteString(fmt.Sprintf("%-10s%-10s%-10s%-10s\n", "ID", "Type", "Players", "State"))
	for _, room := range rooms {
		pwdFlag := ""
		if room.Password != "" {
			pwdFlag = "*"
		}
		buf.WriteString(fmt.Sprintf("%-10d%-10s%-10d%-10s\n", room.ID, pwdFlag+consts.GameTypes[room.Type], room.Players, consts.RoomStates[room.State]))
	}
	err := player.WriteString(buf.String())
	if err != nil {
		return 0, player.WriteError(err)
	}
	signal, err := player.AskForString()
	if err != nil {
		return 0, player.WriteError(err)
	}
	if isExit(signal) {
		return s.Exit(player), nil
	}
	if isLs(signal) {
		return consts.StateJoin, nil
	}
	roomId, err := strconv.ParseInt(signal, 10, 64)
	if err != nil {
		return 0, player.WriteError(consts.ErrorsRoomInvalid)
	}
	room := database.GetRoom(roomId)
	if room == nil {
		return 0, player.WriteError(consts.ErrorsRoomInvalid)
	}

	pwd := room.Password
	if pwd != "" {
		err = verifyPassword(player, pwd)
		if err != nil {
			return 0, player.WriteError(err)
		}
	}
	err = database.JoinRoom(roomId, player.ID)
	if err != nil {
		return 0, player.WriteError(err)
	}
	if room.State != consts.RoomStateRunning {
		database.Broadcast(roomId, fmt.Sprintf("%s [%s] joined room! room current has %d players\n", player.Name, player.Role, room.Players))
	} else {
		_ = player.WriteString("You have joined a running game, please wait for the game to finish.\n")
	}
	return consts.StateWaiting, nil
}

func (*join) Exit(player *database.Player) consts.StateID {
	return consts.StateHome
}

// verifyPassword prompts the player for the room password and validates it.
func verifyPassword(player *database.Player, pwd string) error {
	err := player.WriteString("Please input room password: \n")
	if err != nil {
		return err
	}
	password, err := player.AskForString()
	if err != nil {
		return err
	}
	if password != pwd {
		return consts.ErrorsRoomPassword
	}
	return nil
}
