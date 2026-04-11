package network

import (
	"time"

	"github.com/gorilla/websocket"

	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/pkg/log"
)

const (
	// maxMessageSize caps inbound WS frame size at 4 KB.
	// Protobuf game messages are tiny; anything larger is malicious or buggy.
	maxMessageSize = 4 * 1024

	// readDeadline is the maximum time to wait for a frame before considering
	// the client dead. Clients send heartbeats every ~50 s; 90 s gives headroom.
	readDeadline = 90 * time.Second
)

// readLoop blocks until the connection closes or an unrecoverable read error occurs.
// It decodes each binary WS frame into a Request and dispatches it.
// On exit it closes the player's CmdCh and removes them from the store.
func readLoop(conn *websocket.Conn, player *database.Player) {
	conn.SetReadLimit(maxMessageSize)
	_ = conn.SetReadDeadline(time.Now().Add(readDeadline))

	// Extend deadline on each ping/pong so the 90 s window is per-message, not absolute.
	conn.SetPongHandler(func(string) error {
		return conn.SetReadDeadline(time.Now().Add(readDeadline))
	})

	defer func() {
		// Signal state machine and writer goroutine that this player is gone.
		if player.CmdCh != nil {
			close(player.CmdCh)
		}
		database.RemovePlayer(player.ID)
		log.Infof("[reader] player %d disconnected\n", player.ID)
	}()

	for {
		msgType, data, err := conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err,
				websocket.CloseGoingAway,
				websocket.CloseNormalClosure,
				websocket.CloseNoStatusReceived) {
				log.Errorf("[reader] player %d read error: %v\n", player.ID, err)
			}
			return
		}
		if msgType != websocket.BinaryMessage {
			log.Errorf("[reader] player %d: unexpected message type %d, dropping\n", player.ID, msgType)
			continue
		}

		// Reset deadline on any incoming frame (heartbeats count).
		_ = conn.SetReadDeadline(time.Now().Add(readDeadline))

		req, err := DecodeRequest(data)
		if err != nil {
			log.Errorf("[reader] player %d decode error: %v\n", player.ID, err)
			continue
		}

		Dispatch(player, req)
	}
}
