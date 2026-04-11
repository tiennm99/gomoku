package network

import (
	"net/http"
	"time"

	"github.com/gorilla/websocket"

	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
	"github.com/tiennm99/gomoku/server/state"
)

const (
	// sendChSize is the number of outbound responses that can be buffered
	// per player before back-pressure kicks in and Send() returns an error.
	sendChSize = 32

	// cmdChSize is the number of stateful requests queued for the state machine.
	// Phase-06 rewrites the state machine; for now it remains the legacy loop.
	cmdChSize = 16
)

// upgrader accepts any origin for development. Phase-11 hardens this with an allowlist.
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// Server is the WebSocket-only game server.
// It binds a single HTTP endpoint: /gomoku
type Server struct {
	addr string
}

// NewServer creates a Server that will listen on addr (e.g. ":1999").
func NewServer(addr string) *Server {
	return &Server{addr: addr}
}

// Serve registers the /gomoku handler and blocks on ListenAndServe.
func (s *Server) Serve() error {
	mux := http.NewServeMux()
	mux.HandleFunc("/gomoku", s.handleWS)
	log.Infof("[server] WebSocket server listening on %s/gomoku\n", s.addr)
	return http.ListenAndServe(s.addr, mux)
}

// handleWS upgrades the HTTP connection to WebSocket, registers the player,
// wires I/O channels, then spawns reader + writer goroutines.
func (s *Server) handleWS(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Errorf("[server] WS upgrade failed: %v\n", err)
		return
	}

	// Register player with an empty nickname (set later via SetNicknameRequest).
	player := lobby.RegisterPlayer("")
	player.SendCh = make(chan *protocol.Response, sendChSize)
	player.CmdCh = make(chan *protocol.Request, cmdChSize)
	player.LastHeartbeat = time.Now()

	log.Infof("[server] player %d connected from %s\n", player.ID, r.RemoteAddr)

	// Send ClientConnectResponse so the client knows its assigned ID.
	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_ClientConnect{
			ClientConnect: &protocol.ClientConnectResponse{
				ClientId: int32(player.ID),
			},
		},
	})

	// Send initial nickname prompt (invalid_length = 0 signals "prompt mode").
	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_NicknameSet{
			NicknameSet: &protocol.NicknameSetResponse{InvalidLength: 0},
		},
	})

	wr := newWriter(conn, player.SendCh)

	// Writer goroutine: serialises all WS writes.
	go wr.run()

	// State machine goroutine: reads typed *protocol.Request from player.CmdCh.
	// Stateful requests are routed here by Dispatch; stateless ones handled inline.
	go state.Run(player)

	// Reader loop: blocks until WS close or error, then cleans up.
	readLoop(conn, player)
}
