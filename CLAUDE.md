# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo for a multiplayer gomoku (and other board/card games) platform, forked from [ratel-online](https://github.com/ratel-online). Four independent modules: three Go modules and one Java/Spring Boot API.

## Architecture

```
client (Go CLI) ──TCP/WS──► server (Go game server)
                                │
                                ├── state machine (per-player)
                                ├── in-memory database (hashmaps)
                                └── protocol abstraction (TCP + WebSocket)

core (Go shared lib) ◄── imported by both server and client

api (Java/Spring Boot) ── standalone REST API (user auth, MySQL, Redis)
```

**Key design patterns:**
- **State machine per player** (`server/state/`): each state implements `Next(player) -> (nextStateID, error)`. States registered in `state.go` via `Register()`.
- **Protocol abstraction** (`core/protocol/`): `ReadWriteCloser` interface wraps both TCP (4-byte length-prefixed binary) and WebSocket (JSON). Server and client share same interface.
- **In-memory game store** (`server/database/`): volatile hashmaps for players, rooms, spectators. No persistence — restart loses all state.
- **Channel-based game sync**: game states communicated via `States[playerID] chan int`, not locks.

**Dependency flow:** `server → core`, `client → core`, `api` is isolated (Java).

## Build & Run

### Server (Go)
```bash
cd server
go build -o ratel-server main.go        # build
go run main.go -w 9998 -t 9999          # run (WS + TCP)
```

Server flags: `-w` (WebSocket port, default 9998), `-t` (TCP port, default 9999), `-bot`, `-bot-token`, `-bot-group` (QQ bot).

### Client (Go)
```bash
cd client
go run main.go -h 127.0.0.1 -p 9999    # TCP
go run main.go -h 127.0.0.1 -p 9998    # WebSocket (auto-detected by port)
```

Client flags: `-h` (host), `-p` (port), `-n` (player name, auto-generated if empty).

### Cross-compilation
```bash
cd server && bash build.sh              # Linux/macOS — outputs to target/
cd server && powershell ./build.ps1     # Windows — outputs to target/
```

### Docker
```bash
cd server
make build && make run                  # dev: ports 9998 + 9999
make prod-build && make prod-up         # prod: adds nginx on port 80
make logs                               # view logs
make stop                               # stop
```

### API (Java)
```bash
cd api
mvn spring-boot:run                     # requires MySQL + Redis configured
```
Config in `api/src/main/resources/application.properties`. Database schema in `api/ratel.sql`.

### Tests
```bash
cd server && go test ./...
cd core && go test ./...
cd client && go test ./...
```

## Module Details

### server/
- `main.go`: entry point, starts TCP + WS listeners concurrently
- `state/`: state machine — `welcome → home → join/create → waiting → game`
- `state/game/`: game implementations (dou dizhu, texas, mahjong, uno, liar, runfast)
- `network/`: TCP (`tcp.go`) and WebSocket (`wss.go`) listeners, both call shared `handle()`
- `database/`: in-memory player/room store, game-specific record types
- `consts/`: state IDs, game types, timeouts (20s rob, 40s play, 60s bet), room properties
- `rule/`: game rule validation
- `render/`: terminal UI rendering
- `skill/`: special ability system for skill-mode games

### core/
- `protocol/`: `Packet` struct + `ReadWriteCloser` interface (TCP and WS implementations)
- `model/`: shared types — `AuthInfo`, `Player`, `Room`, `GameEvent`
- `network/`: `Conn` wrapper with auto-assigned IDs and handler loop
- `util/poker/`: card evaluation, hand ranking for multiple game types
- `pkg/holdem/`: Texas hold'em hand evaluation

### client/
- `main.go`: CLI entry, connects via TCP or WS based on port
- `ctx/`: connection context, auth flow, packet listener with start/stop markers
- `shell/`: wraps context, manages player session
- `api/`: login HTTP calls to the Java API (port 9088)

### api/ (Java)
- Spring Boot 2.3.1, MySQL + Redis + MyBatis
- Controllers: `AuthController`, `UserController`, `MailController`
- Single `user` table (see `ratel.sql`)

## Networking Protocol

Auth flow: client sends `AuthInfo` JSON within 3 seconds → server creates player → state machine starts.

Packet format (TCP): `[4-byte big-endian length][JSON payload]`. WebSocket uses native JSON messages.
