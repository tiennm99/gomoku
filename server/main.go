package main

import (
	"flag"
	"strconv"

	"github.com/tiennm99/gomoku/server/network"
	"github.com/tiennm99/gomoku/server/pkg/log"
)

var port int

func main() {
	flag.IntVar(&port, "p", 1999, "WebSocket server port")
	flag.Parse()

	addr := ":" + strconv.Itoa(port)
	log.Infof("Starting gomoku server on %s/gomoku\n", addr)
	wsServer := network.NewWebsocketServer(addr)
	log.Panic(wsServer.Serve())
}