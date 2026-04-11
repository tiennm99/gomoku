package network

import (
	"sync"

	"github.com/gorilla/websocket"

	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

// writer owns the WS write path for a single player connection.
// All writes go through the writer goroutine to serialize access to the conn.
type writer struct {
	conn   *websocket.Conn
	mu     sync.Mutex // guards conn.WriteMessage calls from concurrent callers
	sendCh <-chan *protocol.Response
}

// newWriter creates a writer that drains sendCh and writes binary frames to conn.
func newWriter(conn *websocket.Conn, sendCh <-chan *protocol.Response) *writer {
	return &writer{conn: conn, sendCh: sendCh}
}

// run blocks until sendCh is closed or a write error occurs.
// Called as a goroutine; exits cleanly on channel close.
func (w *writer) run() {
	for resp := range w.sendCh {
		data, err := EncodeResponse(resp)
		if err != nil {
			log.Errorf("[writer] encode error: %v\n", err)
			continue
		}
		w.mu.Lock()
		err = w.conn.WriteMessage(websocket.BinaryMessage, data)
		w.mu.Unlock()
		if err != nil {
			log.Errorf("[writer] write error: %v\n", err)
			return
		}
	}
}

// writeRaw sends a pre-encoded binary frame directly, bypassing the sendCh.
// Used in rare inline-response cases where the writer goroutine may not be running yet.
// Thread-safe: holds the write mutex.
func (w *writer) writeRaw(data []byte) error {
	w.mu.Lock()
	defer w.mu.Unlock()
	return w.conn.WriteMessage(websocket.BinaryMessage, data)
}
