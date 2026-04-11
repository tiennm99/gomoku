package state

import (
	"bytes"
	"fmt"
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
)

// welcome is the initial state. Sends a greeting and transitions to home.
type welcome struct{}

func (*welcome) Next(player *database.Player) (consts.StateID, error) {
	buf := bytes.Buffer{}
	buf.WriteString(fmt.Sprintf("Hi %s, Welcome to ratel online! rules at https://github.com/tiennm99/gomoku/server/blob/main/README.md\n", player.Name))
	err := player.WriteString(buf.String())
	if err != nil {
		return 0, player.WriteError(err)
	}
	return consts.StateHome, nil
}

func (*welcome) Exit(player *database.Player) consts.StateID {
	return 0
}
