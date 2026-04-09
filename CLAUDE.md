# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multiplayer Gomoku (Five-in-a-Row) platform. Go game server with WebSocket/TCP support, vanilla JS web client with HTML5 Canvas board, and a shared Go core library. Forked from [ratel-online](https://github.com/ratel-online) with card games removed — gomoku is the only game type.

## Architecture

```
web/ (browser)  ──WS──►  server/ (:9998, serves static files + /ws endpoint)
client/ (CLI)   ──TCP──►  server/ (:9999)
                              │
                              ├── state machine (per-player goroutine)
                              │     welcome → home → join/create → waiting → game
                              ├── in-memory database (hashmaps, no persistence)
                              ├── gomoku engine (15x15 board, win detection)
                              └── protocol abstraction (TCP + WebSocket)

core/ (Go shared lib) ◄── imported by server and client
api/ (Java/Spring Boot) ── standalone REST API (optional, not needed for play)
```

**Key design patterns:**
- **State machine per player** (`server/state/`): each state implements `Next(player) -> (nextStateID, error)`. States registered in `state.go` via `Register()`.
- **Protocol abstraction** (`core/protocol/`): `ReadWriteCloser` interface wraps both TCP (4-byte length-prefixed binary) and WebSocket (JSON `{"data":"<base64>"}` packets).
- **In-memory game store** (`server/database/`): volatile hashmaps for players, rooms, spectators. No persistence — restart loses all state.
- **Channel-based game sync**: game turns communicated via `States[playerID] chan int`, not locks. Mutex protects board reads/writes.
- **Server-authoritative**: all move validation and win detection server-side. Web client never modifies board locally.

## Build & Run

### Server (Go)
```bash
cd server
go build -o gomoku-server main.go
go run main.go -w 9998 -t 9999 -s ../web
# Web UI at http://localhost:9998, WebSocket at ws://localhost:9998/ws
```

Server flags: `-w` (WebSocket port, default 9998), `-t` (TCP port, default 9999), `-s` (static files dir, default `../web`), `-bot`, `-bot-token`, `-bot-group` (QQ bot).

### Client (Go CLI)
```bash
cd client
go run main.go -h 127.0.0.1 -p 9999    # TCP
go run main.go -h 127.0.0.1 -p 9998    # WebSocket
```

### Docker
```bash
cd server
make build && make run      # dev: ports 9998 + 9999
make logs                   # view logs
make stop                   # stop
```

### Tests
```bash
cd server && go test ./...
cd core && go test ./...
```

## Module Details

### server/
- `main.go`: entry point, starts TCP + WS listeners concurrently
- `consts/const.go`: state IDs (`StateWelcome` through `StateGomokuGame`), `GameTypeGomoku=1`, board size (15), timeouts, error constants
- `state/state.go`: state machine runner — registers states, loops `Next()` calls per player
- `state/welcome.go`, `home.go`, `join.go`, `create.go`: menu navigation states
- `state/waiting.go`: room lobby — start game, kick players, set room props
- `state/game/gomoku.go`: gomoku game loop — turn handling, move validation, win detection (4 directions), board broadcast
- `database/model.go`: `Player`, `Room`, `RoomGame` interface — core domain types
- `database/gomoku.go`: `Gomoku` struct — board state, player IDs, turn tracking, channel-based sync
- `database/database.go`: in-memory store — room CRUD, player management, broadcast helpers
- `network/network.go`: connection handler — auth, state machine bootstrap
- `network/wss.go`: WebSocket server + static file serving
- `network/tcp.go`: TCP server
- `bot/bot.go`: QQ bot integration (optional)

### core/
- `protocol/protocol.go`: `Packet` struct + `ReadWriteCloser` interface
- `protocol/websocket.go`: WebSocket implementation (JSON `{"data":"<base64>"}`)
- `protocol/tcp.go`: TCP implementation (4-byte length-prefixed binary)
- `model/model.go`: shared types — `AuthInfo`, `Player`, `Room`
- `network/`: `Conn` wrapper with auto-assigned IDs and handler loop

### web/
- `index.html`: HTML shell with panels (connect, home, create, waiting, game, log sidebar)
- `js/ws-client.js`: WebSocket client — base64 encode/decode, auth, transaction markers
- `js/state-machine.js`: detects server state from message patterns, routes UI panels
- `js/board-renderer.js`: Canvas 15x15 board — gradient stones, click handling, hover ghost, game-over overlay
- `js/game-controller.js`: bridges WS client + board renderer — handles turn/board/gameover messages
- `js/app.js`: entry point — wires all modules, DOM event bindings

### client/
- `main.go`: CLI entry, connects via TCP or WS based on port
- `ctx/`: connection context, auth flow, packet listener
- `shell/`: wraps context, manages player session

### api/ (Java)
- Spring Boot 2.3.1, MySQL + Redis + MyBatis (optional, not required for gameplay)

## Networking Protocol

**Auth flow**: client sends `AuthInfo{id, name, score}` JSON within 3 seconds → server creates player → state machine starts.

**Packet format**: TCP uses `[4-byte big-endian length][payload]`. WebSocket uses JSON `{"data":"<base64-encoded-payload>"}`.

**Game messages** (server → client, JSON strings):
- `{"type":"info","color":1}` — player color assignment (1=black, 2=white)
- `{"type":"board","board":[[...]],"last":[r,c],"turn":1}` — full board state
- `{"type":"turn","color":1}` — it's your turn
- `{"type":"gameover","winner":"Name"}` or `{"type":"gameover","draw":true}`

**Player input** (client → server): plain strings — `"1"` for join, `"2"` for new, `"7,7"` for moves.
