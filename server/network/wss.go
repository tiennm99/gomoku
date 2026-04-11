package network

import (
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/pkg/protocol"
)

// Websocket is a WebSocket-only HTTP server bound to a single /gomoku endpoint.
type Websocket struct {
	addr string
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// NewWebsocketServer creates a Websocket server listening on addr (e.g. ":1999").
func NewWebsocketServer(addr string) Websocket {
	return Websocket{addr: addr}
}

func (w Websocket) Serve() error {
	http.HandleFunc("/gomoku", serveWs)
	log.Infof("WebSocket server listening on %s/gomoku\n", w.addr)
	return http.ListenAndServe(w.addr, nil)
}

func serveWs(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Error(err)
		return
	}
	err = handle(protocol.NewWebsocketReadWriteCloser(conn))
	if err != nil {
		log.Error(err)
	}
}
