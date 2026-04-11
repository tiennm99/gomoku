package network

import (
	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// Dispatch routes an incoming Request to the appropriate handler.
//
// Stateless requests (heartbeat, get_rooms, set_nickname, set_client_info,
// client_exit) are handled inline on the reader goroutine — they must return fast.
//
// Stateful requests (create_room, join_room, game_move, etc.) are pushed onto
// player.CmdCh for the state machine goroutine (phase-06) to consume in order.
//
// Overflow policy: if CmdCh is full, the request is logged and dropped rather
// than blocking the reader goroutine (prevents backpressure deadlocks).
func Dispatch(player *lobby.Player, req *protocol.Request) {
	switch req.Payload.(type) {
	// --- Stateless handlers (inline) ---
	case *protocol.Request_Heartbeat:
		handleHeartbeat(player, req)

	case *protocol.Request_SetNickname:
		handleSetNickname(player, req)

	case *protocol.Request_GetRooms:
		handleGetRooms(player, req)

	case *protocol.Request_SetClientInfo:
		handleSetClientInfo(player, req)

	case *protocol.Request_ClientExit:
		handleClientExit(player, req)

	// --- Stateful handlers (pushed to cmdCh for state machine) ---
	case *protocol.Request_CreateRoom,
		*protocol.Request_CreatePveRoom,
		*protocol.Request_JoinRoom,
		*protocol.Request_GameStarting,
		*protocol.Request_GameMove,
		*protocol.Request_GameReset,
		*protocol.Request_WatchGame,
		*protocol.Request_WatchGameExit:
		pushToCmdCh(player, req)

	default:
		log.Errorf("[dispatch] player %d: unhandled request type %T, dropping\n", player.ID, req.Payload)
	}
}

// pushToCmdCh enqueues req on player.CmdCh without blocking.
// If the channel is full or nil, the request is dropped with a warning.
func pushToCmdCh(player *lobby.Player, req *protocol.Request) {
	if player.CmdCh == nil {
		log.Errorf("[dispatch] player %d: CmdCh is nil, dropping %T\n", player.ID, req.Payload)
		return
	}
	select {
	case player.CmdCh <- req:
	default:
		log.Errorf("[dispatch] player %d: CmdCh full (cap %d), dropping %T\n",
			player.ID, cap(player.CmdCh), req.Payload)
	}
}
