# Gomoku (Five-in-a-Row)

Multiplayer online Gomoku with PVP, PVE (3 AI difficulties), and spectator mode.
Go server + Phaser 3 browser client over a typed protobuf WebSocket.

---

## Features

- **PVP** — two human players in a room. Game auto-starts as soon as the
  second player joins — no explicit "Start Game" click.
- **PVE** — three AI difficulties:
  - Easy — random legal move
  - Medium — heuristic threat scoring (win > block > center-weighted)
  - Hard — minimax depth 3 with alpha-beta pruning
- **Spectator mode** — watch any in-progress game in real time
- **Live lobby** — room list refreshes on demand
- **Heartbeat / auto-reconnect** — client pings every 50 s; server closes idle
  connections after 90 s; client reconnects with exponential back-off

---

## Quick Start

### Docker (recommended)

```bash
docker compose up -d
```

- Browser client: http://localhost:8080
- WebSocket endpoint: ws://localhost:1999/gomoku

Tear down:

```bash
docker compose down
```

### Local Development

**Prerequisites:** Go 1.23+, Node 22+

```bash
# Terminal 1 — Go server
go -C server run . -p 1999

# Terminal 2 — Vite dev server
npm --prefix client install
npm --prefix client run dev
```

Open http://localhost:5173 in two browser tabs to play against yourself.

---

## Architecture

```
Browser tab A ─────────────────────────────────────────────────┐
Browser tab B ──► http://localhost:8080  (nginx / client:8080) │
                         │                                      │
                   Phaser 3 + protobufjs                        │
                         │ WS binary frames                     │
                         ▼                                      │
              ws://localhost:1999/gomoku  (Go server)           │
                         │                                      │
              ┌──────────┴──────────┐                           │
              │  state machine      │  one goroutine per player │
              │  per-player         │  home → waiting → game    │
              ├─────────────────────┤                           │
              │  in-memory lobby    │  rooms, players (no DB)   │
              ├─────────────────────┤                           │
              │  game engine        │  15×15 board, win detect  │
              └─────────────────────┘                           │
                         │                                      │
              common/proto/*.proto  (single source of truth)────┘
```

**Key design decisions:**

- **Server-authoritative** — all move validation and win detection server-side;
  browser never modifies board locally
- **Protobuf binary frames** over WebSocket (`gorilla/websocket`); `common/proto/`
  is the single source of truth, enums replace stringly-typed fields
- **State machine per player** — `home → waiting → game → gameover`; states
  registered in `server/state/`
- **Auto-start PVP** — handleJoinRoom flips the room to Playing the instant a
  second player joins; both goroutines transition via `room.StartCh`
- **In-memory store** — rooms and players live in hashmaps; restart clears all
  state (intentional — games are short-lived)

---

## Project Structure

```
gomoku/
├── server/              Go game server (:1999, endpoint /gomoku)
│   ├── main.go
│   ├── consts/          StateID enum, difficulty constants
│   ├── game/            pure game engine: Board, win detection, AI
│   ├── lobby/           in-memory Player + Room store
│   ├── network/         WS upgrade, reader/writer, dispatch
│   ├── protocol/        generated Go protobuf stubs
│   ├── state/           per-player state machine
│   ├── Dockerfile       multi-stage → distroless/static-debian12
│   └── Makefile         build / test / docker / proto targets
│
├── client/              Phaser 3 browser client (Vite, nginx :8080)
│   ├── src/
│   │   ├── config/          game-config, protocol-constants
│   │   ├── scenes/          boot, menu, game
│   │   ├── services/        event-bus, connection-service, game-state-service
│   │   ├── ui/              menu-ui, menu-ui-rooms, game-ui (DOM overlay)
│   │   ├── objects/         Phaser Board, Stone
│   │   └── generated/       committed protobuf JS stubs
│   ├── Dockerfile       Vite build → nginx:1.27-alpine
│   └── nginx.conf       SPA fallback, gzip, asset caching
│
├── common/proto/        request.proto / response.proto (shared wire format)
├── docker-compose.yml   two services: server :1999, client :8080
└── docs/                architecture + deployment guide
```

---

## Game Rules

- Board: 15 × 15 intersections
- Black moves first
- First player to place 5 stones in a row (horizontal, vertical, or diagonal) wins
- Full board with no winner is a draw

---

## Protocol

- **Transport:** WebSocket binary frames at `ws://<host>:1999/gomoku`
- **Encoding:** protobuf (see `common/proto/request.proto`,
  `common/proto/response.proto`). The `oneof payload` case IS the event code.
- **Nickname handshake:** on connect the server sends `ClientConnectResponse`
  then `NicknameSetResponse{invalid_length: 0}` as a prompt. The client replies
  with `SetNicknameRequest{nickname}`. On success the server sends
  `NicknameSetResponse{invalid_length: 0}` + `ShowOptionsResponse` and the
  client shows the lobby.
- **Heartbeat:** client → `HeartbeatRequest` every 50 s. Server closes the WS
  if no frame is received within 90 s. Client auto-reconnects on close with
  exponential back-off (up to 10 attempts).

---

## Deployment

See [`docs/deployment-guide.md`](docs/deployment-guide.md) for:
- Docker Compose quick start
- Building individual images
- Reverse proxy / TLS setup (Caddy, Traefik, nginx)

---

## Credits

Based on [ratel-online](https://github.com/ratel-online) by
[ainilili](https://github.com/ainilili) (MIT).

## License

Apache 2.0 — see [LICENSE](LICENSE).
