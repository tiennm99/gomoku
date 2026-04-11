package state

import (
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
)

// welcomeState is the entry point for every new connection.
// server.go already sends ClientConnectResponse + NicknameSetResponse{0}
// before spawning Run(), so this state just transitions immediately.
type welcomeState struct{}

func (*welcomeState) Next(_ *lobby.Player) (consts.StateID, error) {
	return consts.StateSetNickname, nil
}
