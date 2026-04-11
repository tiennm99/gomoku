// Package network provides the WebSocket game server.
// The legacy TCP handler (handle, loginAuth) has been retired in phase-06.
// All connections now go through server.go (WebSocket) via NewServer.
package network
