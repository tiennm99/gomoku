package state

import (
	"strings"

	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/pkg/async"
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/state/game"
)

var states = map[consts.StateID]State{}

func init() {
	register(consts.StateWelcome, &welcome{})
	register(consts.StateHome, &home{})
	register(consts.StateJoin, &join{})
	register(consts.StateCreate, &create{})
	register(consts.StateWaiting, &waiting{})
	register(consts.StateGomokuGame, &game.GomokuGame{})
}

func register(id consts.StateID, state State) {
	states[id] = state
}

type State interface {
	Next(player *database.Player) (consts.StateID, error)
	Exit(player *database.Player) consts.StateID
}

func Run(player *database.Player) {
	player.State(consts.StateWelcome)
	defer func() {
		if err := recover(); err != nil {
			async.PrintStackTrace(err)
		}
		log.Infof("player %s state machine break up.\n", player)
	}()
	loopCount := 0
	for {
		loopCount++
		if loopCount%100 == 0 {
			log.Infof("[State.Run] Player %d loop count: %d, current state: %d\n", player.ID, loopCount, player.GetState())
		}
		state := states[player.GetState()]
		stateId, err := state.Next(player)
		if err != nil {
			if err1, ok := err.(consts.Error); ok {
				if err1.Exit {
					stateId = state.Exit(player)
				}
			} else {
				log.Error(err)
				state.Exit(player)
				break
			}
		}
		if stateId > 0 {
			player.State(stateId)
		}
	}
}

func isExit(signal string) bool {
	signal = strings.ToLower(signal)
	return isX(signal, "exit", "e")
}

func isLs(signal string) bool {
	return isX(signal, "ls")
}

func isX(signal string, x ...string) bool {
	signal = strings.ToLower(signal)
	for _, v := range x {
		if v == signal {
			return true
		}
	}
	return false
}
