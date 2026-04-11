package main

import (
	"flag"
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/tiennm99/gomoku/server/lobby"
	"github.com/tiennm99/gomoku/server/network"
	"github.com/tiennm99/gomoku/server/pkg/log"
)

var port int

func main() {
	flag.IntVar(&port, "p", 1999, "WebSocket server port")
	flag.Parse()

	// Start the idle-room reaper goroutine.
	lobby.StartCleanup()

	addr := fmt.Sprintf(":%d", port)
	log.Infof("[main] gomoku server starting on ws://localhost%s/gomoku\n", addr)

	srv := network.NewServer(addr)

	// Graceful shutdown on SIGINT / SIGTERM.
	// The server is blocking, so we catch signals in a background goroutine.
	go func() {
		quit := make(chan os.Signal, 1)
		signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
		<-quit
		log.Infof("[main] shutdown signal received, exiting\n")
		os.Exit(0)
	}()

	if err := srv.Serve(); err != nil {
		log.Errorf("[main] server error: %v\n", err)
		os.Exit(1)
	}
}
