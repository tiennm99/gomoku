# System Architecture

## Overview

Gomoku Online is a multiplayer game platform with a Go server, vanilla JS web client, and optional CLI client. The server manages all game state in memory and communicates with clients over WebSocket (web) and TCP (CLI).

## Component Diagram

```
+-------------------+     WebSocket (:9998)     +-------------------+
|   Web Client      | ◄──────────────────────►  |   Game Server     |
|   (browser)       |     /ws endpoint          |   (Go)            |
|                   |                           |                   |
|  ws-client.js     |     HTTP (:9998)          |  main.go          |
|  state-machine.js | ◄────── static files ──── |  network/wss.go   |
|  board-renderer.js|     / endpoint            |  network/tcp.go   |
|  game-controller.js                           |  network/network.go
|  app.js           |                           |                   |
+-------------------+                           |  state/           |
                                                |    state.go       |
+-------------------+     TCP (:9999)           |    welcome.go     |
|   CLI Client      | ◄──────────────────────►  |    home.go        |
|   (Go terminal)   |     binary protocol       |    join.go        |
+-------------------+                           |    create.go      |
                                                |    waiting.go     |
                                                |    game/gomoku.go |
                                                |                   |
                                                |  database/        |
                                                |    model.go       |
                                                |    database.go    |
                                                |    gomoku.go      |
                                                |                   |
                                                |  consts/const.go  |
                                                +-------------------+
```

## State Machine

Every connected player runs a per-goroutine state machine. States are registered in `state/state.go` and each implements the `State` interface:

```go
type State interface {
    Next(player *database.Player) (consts.StateID, error)
    Exit(player *database.Player) consts.StateID
}
```

### State Flow

```
Welcome ──► Home ──► Join ──► Waiting ──► GomokuGame ──► Waiting
                 └── Create ──► Waiting          (game ends)
                                   │
                                   └── Home (player exits room)
```

| State | ID | Description |
|-------|-----|-------------|
| Welcome | 1 | Sends greeting, auto-transitions to Home |
| Home | 2 | Menu: "1.Join" or "2.New" |
| Join | 3 | Lists rooms, player picks one by ID |
| Create | 4 | Lists game types, creates room, auto-joins |
| Waiting | 5 | Room lobby: owner starts game, players chat/wait |
| GomokuGame | 6 | Active gomoku game loop |

## Networking Protocol

### Wire Formats

**WebSocket** (`/ws` on port 9998):
- JSON packets: `{"data":"<base64-encoded-payload>"}`
- Go's `[]byte` serializes as base64 in JSON, so the web client must `btoa()`/`atob()`

**TCP** (port 9999):
- Binary: `[4-byte big-endian length][payload bytes]`
- Same logical `Packet{Body}` struct, different encoding

### Auth Flow

1. Client connects (WS or TCP)
2. Server waits up to 3 seconds for an `AuthInfo` JSON packet
3. `AuthInfo` fields: `id` (0 for web clients, server assigns real ID), `name`, `score`
4. Server creates a `Player`, starts the state machine goroutine
5. Connection enters the read loop (`Player.Listening()`)

### Transaction Markers

The server uses `INTERACTIVE_SIGNAL_START` and `INTERACTIVE_SIGNAL_STOP` to tell the client when input is expected. The web client enables/disables interactivity based on these signals.

### Gomoku Game Messages

Server sends JSON strings (not wrapped in the usual `Packet` format — they're the `Body` content):

| Message | Direction | Description |
|---------|-----------|-------------|
| `{"type":"info","color":1}` | server→client | Your color assignment (1=black, 2=white) |
| `{"type":"board","board":[[...]],"last":[r,c],"turn":1}` | server→client | Full 15x15 board state after each move |
| `{"type":"turn","color":1}` | server→client | It's your turn to play |
| `{"type":"gameover","winner":"Name"}` | server→client | Game ended with a winner |
| `{"type":"gameover","draw":true}` | server→client | Game ended in a draw |
| `"7,7"` | client→server | Place stone at row 7, column 7 |

## In-Memory Database

All state lives in concurrent hashmaps (no persistence):

| Store | Key | Value | Purpose |
|-------|-----|-------|---------|
| `players` | player ID | `*Player` | All players ever connected |
| `connPlayers` | player ID | `*Player` | Currently connected players |
| `rooms` | room ID | `*Room` | Active game rooms |
| `roomPlayers` | room ID | `map[playerID]bool` | Players in each room |
| `roomSpectators` | room ID | `map[playerID]int` | Spectators (with join order) |

Rooms are auto-cleaned after 24 hours of inactivity or when all players disconnect.

## Gomoku Game Engine

- **Board**: 15x15 integer array (0=empty, 1=black, 2=white)
- **Turn sync**: channel-based — `States[playerID] chan int` with buffer size 2
- **Move validation**: bounds check, cell empty, correct turn (all server-side)
- **Win detection**: checks 4 directions (horizontal, vertical, 2 diagonals) from last placed stone, counting consecutive same-color stones in both directions
- **Draw**: board full (225 moves) with no winner
- **Concurrency**: `sync.Mutex` on the `Gomoku` struct protects board reads/writes

## Web Client Architecture

Vanilla JavaScript, no framework, no build step. Five modules loaded via `<script>` tags:

| Module | Responsibility |
|--------|---------------|
| `ws-client.js` | WebSocket connection, base64 encode/decode, auth, transaction markers |
| `state-machine.js` | Detects server state from message text patterns, shows/hides UI panels |
| `board-renderer.js` | Canvas 15x15 board, gradient stones, click-to-place, hover ghost, game-over overlay |
| `game-controller.js` | Bridges WS client and board renderer — routes game JSON messages |
| `app.js` | Entry point — wires modules, binds DOM events |

The web client is fully server-authoritative: clicking the board sends `"row,col"` to the server and waits for the server's board broadcast before rendering.
