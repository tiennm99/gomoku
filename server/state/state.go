// Package state implements the per-player state machine.
// Each player goroutine runs Run(player) which loops through registered states
// until ErrClientExit is returned or the cmdCh is closed.
package state

import (
	"errors"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/pkg/log"
)

// ErrClientExit is the sentinel returned by any state to signal a clean exit.
var ErrClientExit = errors.New("client exit")

// State is the interface each game state implements.
// Next processes one iteration: reads from player.CmdCh, mutates state,
// sends responses, and returns the next StateID (or ErrClientExit).
type State interface {
	Next(player *lobby.Player) (next consts.StateID, err error)
}

var registry = map[consts.StateID]State{}

// register adds a state to the registry. Called from init() in each state file.
func register(id consts.StateID, s State) {
	registry[id] = s
}

func init() {
	register(consts.StateWelcome, &welcomeState{})
	register(consts.StateSetNickname, &setNicknameState{})
	register(consts.StateHome, &homeState{})
	register(consts.StateWaiting, &waitingState{})
	register(consts.StateGamePvp, &gamePvpState{})
	register(consts.StateGamePve, &gamePveState{})
	register(consts.StateGameOver, &gameOverState{})
	register(consts.StateWatching, &watchingState{})
}

// Run is the state machine entry point. Spawned as a goroutine per player by
// server.go. Loops calling state.Next(player) until ErrClientExit or an
// unregistered state is encountered.
//
// On normal exit it removes the player from any room they occupy.
func Run(player *lobby.Player) {
	current := consts.StateWelcome
	defer func() {
		// Cleanup: remove from room if still in one.
		if player.RoomID != 0 {
			lobby.LeaveNewRoom(player)
		}
		lobby.RemovePlayer(player.ID)
		log.Infof("[state] player %d state machine exited\n", player.ID)
	}()

	for {
		s, ok := registry[current]
		if !ok {
			log.Errorf("[state] player %d: unregistered state %d, exiting\n", player.ID, current)
			return
		}

		next, err := s.Next(player)
		if err != nil {
			if errors.Is(err, ErrClientExit) {
				return
			}
			// Non-exit errors: log and exit to avoid stuck goroutine.
			log.Errorf("[state] player %d: state %d returned error: %v\n", player.ID, current, err)
			return
		}
		current = next
	}
}
