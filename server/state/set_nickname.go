package state

import (
	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/database"
)

// setNicknameState waits until the player's nickname has been confirmed, then
// transitions to home.
//
// Nickname validation and the NicknameSetResponse / ShowOptionsResponse are
// handled inline by network.handleSetNickname (stateless dispatch path) —
// SetNicknameRequest never reaches CmdCh. This state therefore just polls
// player.Name until the stateless handler has written it, then proceeds.
//
// The state blocks on CmdCh so it can also detect disconnection (channel close).
// Any stateful request that arrives before home is expected means nickname was
// already committed; the request is re-pushed to the front of CmdCh if possible,
// or dropped (the client will retry from the home screen it already received).
type setNicknameState struct{}

func (*setNicknameState) Next(player *database.Player) (consts.StateID, error) {
	// If nickname already set by stateless handler, proceed immediately.
	if player.Name != "" {
		return consts.StateHome, nil
	}

	// Block until a request arrives or CmdCh is closed.
	req, ok := <-player.CmdCh
	if !ok {
		return 0, ErrClientExit
	}

	// A stateful request arrived. By the time stateful requests come in,
	// handleSetNickname should have set player.Name already.
	// If Name is still empty, assign a default to unblock the flow.
	if player.Name == "" {
		player.Name = "Player"
	}

	// Re-enqueue the request so homeState can process it.
	select {
	case player.CmdCh <- req:
	default:
		// Channel full — drop; client will see home screen and retry.
	}

	return consts.StateHome, nil
}
