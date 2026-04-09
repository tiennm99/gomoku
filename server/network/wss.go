package network

import (
    "github.com/gorilla/websocket"
    "github.com/ratel-online/core/log"
    "github.com/ratel-online/core/protocol"
    "net/http"
)

type Websocket struct {
    addr      string
    StaticDir string
}

var upgrader = websocket.Upgrader{
    ReadBufferSize:  1024,
    WriteBufferSize: 1024,
    CheckOrigin: func(r *http.Request) bool {
        return true
    },
}

func NewWebsocketServer(addr string, staticDir string) Websocket {
    return Websocket{addr: addr, StaticDir: staticDir}
}

func (w Websocket) Serve() error {
    http.HandleFunc("/ws", serveWs)
    if w.StaticDir != "" {
        http.Handle("/", http.FileServer(http.Dir(w.StaticDir)))
        log.Infof("Serving static files from %s\n", w.StaticDir)
    }
    log.Infof("Websocket server listener on %s\n", w.addr)
    return http.ListenAndServe(w.addr, nil)
}

func serveWs(w http.ResponseWriter, r *http.Request) {
    conn, err := upgrader.Upgrade(w, r, nil)
    if err != nil {
        log.Error(err)
        return
    }
    err = handle(protocol.NewWebsocketReadWriteCloser(conn))
    if err != nil{
        log.Error(err)
    }
}
