# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

Multiplayer Gomoku (Five-in-a-Row). Go server + Phaser 3 browser client
communicating over a typed protobuf WebSocket on `ws://host:1999/gomoku`.
Server is authoritative for all move validation, win detection, and room
lifecycle. No persistence — all state is in-memory.

## Architecture

```
browser (Phaser 3 + protobufjs)
    │  WS binary frames
    ▼
ws://host:1999/gomoku  (Go server)
    │
    ├── state machine (one goroutine per player)
    │     welcome → set_nickname → home → waiting → game_pvp/game_pve → game_over
    │
    ├── lobby store  (in-memory: players, rooms, spectators)
    ├── game engine  (15×15 board, win detection, AI)
    └── protocol     (protobuf stubs generated from common/proto/)
```

Key design patterns:
- **State machine per player** (`server/state/`): each state implements
  `Next(player) -> (nextStateID, error)`. Registered in `state.go`. Players
  communicate across goroutines via channels on the `Room` struct
  (`StartCh`, `GameOverCh`, `RematchCh`).
- **Typed protobuf protocol** (`common/proto/{request,response}.proto`): single
  source of truth for the wire format. Enums (`Piece`, `GameResult`, `RoomType`,
  `RoomStatus`) replace stringly-typed fields for compile-time safety.
- **In-memory lobby** (`server/lobby/`): rooms + players + spectators in
  hashmaps. Restart clears everything.
- **Server-authoritative moves**: client clicks send `GameMoveRequest`; the
  browser never modifies its own board until the server broadcasts
  `GameMoveSuccessResponse`.
- **Auto-start PVP**: handleJoinRoom flips the room to Playing and broadcasts
  `GameStartingResponse` as soon as the second player joins — no "Start Game"
  click from the owner. See `server/state/waiting.go`.

## Build & Run

### Docker Compose (full stack)

```bash
docker compose up -d
# browser at http://localhost:8080
# WebSocket at ws://localhost:1999/gomoku
```

### Local dev

```bash
# Terminal 1 — Go server
go -C server run . -p 1999

# Terminal 2 — Vite dev server
npm --prefix client install
npm --prefix client run dev
# open http://localhost:5173
```

### Tests

```bash
go -C server vet ./...
go -C server test ./...
npm --prefix client run build    # client has no unit tests; build is the gate
```

### Regenerate protobuf stubs (after editing common/proto/)

```bash
make -C server proto              # Go stubs via protoc
npm --prefix client run proto:gen # JS + .d.ts stubs via pbjs/pbts
```

## Layout

```
gomoku/
├── common/proto/       request.proto + response.proto  (wire format)
├── server/
│   ├── main.go         entry; flags: -p <port>
│   ├── consts/         StateID enum + difficulty constants
│   ├── game/           pure game engine (Board, AI easy/medium/hard)
│   ├── lobby/          in-memory Player + Room store
│   ├── network/        WS upgrade, reader/writer, dispatch
│   ├── protocol/       generated Go protobuf stubs
│   ├── state/          per-player state machine
│   └── pkg/log/        tiny logging wrapper
├── client/src/
│   ├── config/         game-config + protocol-constants
│   ├── scenes/         Phaser scenes: boot, menu, game
│   ├── services/       event-bus, connection-service, game-state-service
│   ├── ui/             DOM overlay: menu-ui, menu-ui-rooms, game-ui
│   ├── objects/        Phaser display objects: Board, Stone
│   └── generated/      generated JS protobuf stubs
├── docs/               deployment guide + system architecture
└── docker-compose.yml  server :1999 + client :8080
```

## Protocol notes

- All frames are binary protobuf `Request` / `Response` messages. The oneof
  case name in the proto IS the event code.
- The client maps each decoded `Response` oneof case to a local event-bus
  event in `client/src/services/connection-service.js`
  (`RESPONSE_CASE_TO_CLIENT_CODE`).
- **ClientExitResponse** is broadcast to every player in the room so peers can
  see "X left". The client distinguishes self from peer via `exit_client_id`
  in `client/src/services/client-exit-helpers.js` — only a self-exit
  transitions the UI back to the lobby.
- **Heartbeat**: client sends `HeartbeatRequest` every 50 s; server has a 90 s
  read deadline, missed heartbeats close the WS.
- **Enum serialization**: protobufjs `toJSON` converts proto enums to their
  UPPERCASE string name (`BLACK`, `WHITE`, `BLACK_WIN`, …) at the `event-bus`
  boundary. Client comparisons use those strings.

## AI

- `server/game/ai.go`, `ai_eval.go`, `ai_minimax.go`.
- Easy: random legal move.
- Medium: heuristic threat-score evaluator (immediate win > immediate block >
  center-weighted).
- Hard: minimax depth 3 with alpha-beta pruning and candidate pruning
  (radius-2 Chebyshev neighbourhood of existing stones to keep branching
  factor bounded).

## When editing

- **Proto changes**: regen both Go and JS stubs; run `go -C server build ./...`
  and `npm --prefix client run build` before committing.
- **State machine changes**: there are flow tests in `server/state/flow_test.go`
  that drive end-to-end scenarios (create → leave → create, rematch, forfeit,
  PVP→PVE transition, join auto-start). They're the regression gate for any
  state transition change.
- **Client scene lifecycle**: `GameScene._cleanup()` explicitly unregisters
  both event-bus listeners and Phaser input listeners. Add any new subscription
  to _cleanup() to keep scene restarts idempotent.
