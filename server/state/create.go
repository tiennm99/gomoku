package state

import (
	"bytes"
	"errors"
	"fmt"

	"github.com/ratel-online/server/consts"
	"github.com/ratel-online/server/database"
)

// create handles room creation. Prompts for game type, creates the room, and
// automatically joins the creator. Transitions to waiting state.
type create struct{}

func (*create) Next(player *database.Player) (consts.StateID, error) {
	gameType, err := askForGameType(player)
	if err != nil {
		return 0, err
	}
	room := database.CreateRoom(player.ID, gameType)
	err = player.WriteString(fmt.Sprintf("Create room successful, id : %d\n", room.ID))
	if err != nil {
		return 0, player.WriteError(err)
	}
	err = database.JoinRoom(room.ID, player.ID)
	if err != nil {
		return 0, player.WriteError(err)
	}
	return consts.StateWaiting, nil
}

func (*create) Exit(_ *database.Player) consts.StateID {
	return consts.StateHome
}

// askForGameType displays the list of available game types and waits for the player's selection.
func askForGameType(player *database.Player) (gameType int, err error) {
	buf := bytes.Buffer{}
	buf.WriteString("Please select game type\n")
	for _, id := range consts.GameTypesIds {
		buf.WriteString(fmt.Sprintf("%d.%s\n", id, consts.GameTypes[id]))
	}
	err = player.WriteString(buf.String())
	if err != nil {
		return 0, player.WriteError(err)
	}
	gameType, err = player.AskForInt()
	if err != nil {
		if errors.Is(err, consts.ErrorsExist) {
			return 0, err
		}
		_ = player.WriteError(consts.ErrorsGameTypeInvalid)
		return 0, consts.ErrorsGameTypeInvalid
	}
	if _, ok := consts.GameTypes[gameType]; !ok {
		_ = player.WriteError(consts.ErrorsGameTypeInvalid)
		return 0, consts.ErrorsGameTypeInvalid
	}
	return
}
