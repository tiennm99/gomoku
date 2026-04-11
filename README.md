# Gomoku (Five-in-a-Row)

Multiplayer online Gomoku with PVP, PVE (3 AI difficulties), and spectator mode.
Go server + Phaser 3 browser client communicating over protobuf WebSocket binary frames.

Forked from [ratel-online](https://github.com/ratel-online) by [ainilili](https://github.com/ainilili) and contributors.
Card games removed; gomoku rewritten with a caro-compatible protobuf protocol and Phaser 3 client
(feature set ported from [tiennm99/caro](https://github.com/tiennm99/caro)).

---

## Features

- **PVP** — two human players in a room
- **PVE** — three AI difficulties:
  - Easy — random legal move
  - Medium — heuristic threat scoring
  - Hard — minimax depth 3 with alpha-beta pruning
- **Spectator mode** — watch any in-progress game in real time
- **Owner-controlled start** — room owner starts when ready; other players can join before start
- **Live lobby** — room list updates as rooms open / close
- **Heartbeat / reconnect** — client pings every 5 s; missed pings close the connection cleanly

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
              │  per-player         │  lobby → waiting → game   │
              ├─────────────────────┤                           │
              │  in-memory domain   │  rooms, players (no DB)   │
              ├─────────────────────┤                           │
              │  game engine        │  15×15 board, win detect  │
              └─────────────────────┘                           │
                         │                                      │
              common/proto/*.proto  (single source of truth)────┘
```

**Key design decisions:**

- **Server-authoritative** — all move validation and win detection server-side; browser never modifies board locally
- **Protobuf binary frames** over WebSocket (`gorilla/websocket`); `common/proto/` is the single source of truth
- **State machine per player** — `lobby → waiting → game`; states registered in `server/state/`
- **In-memory store** — rooms and players live in hashmaps; restart loses all state (intentional — games are short-lived)
- **Channel-based turn sync** — game turns flow via `chan` per player, no polling

---

## Project Structure

```
gomoku/
├── server/           Go game server (WebSocket :1999, WS endpoint /gomoku)
│   ├── main.go
│   ├── consts/       state IDs, game constants
│   ├── database/     in-memory room + player store
│   ├── game/         gomoku engine (board, win detection, AI)
│   ├── network/      WebSocket server, connection handler
│   ├── protocol/     protobuf encode/decode helpers
│   ├── state/        state machine (lobby, waiting, game)
│   ├── Dockerfile    multi-stage Go build → distroless runtime
│   └── Makefile      build / test / docker targets
│
├── client/           Phaser 3 browser client (Vite, served by nginx :8080)
│   ├── src/
│   │   ├── scenes/       Phaser scenes (lobby, game, spectate)
│   │   ├── services/     connection, room, game, AI services
│   │   └── generated/    protobuf JS stubs (committed, no build-time protoc)
│   ├── Dockerfile    Vite build → nginx:1.27-alpine
│   └── nginx.conf    SPA fallback, gzip, aggressive asset caching
│
├── common/
│   └── proto/        request.proto / response.proto (shared by server + client)
│
├── docker-compose.yml   two services: server :1999, client :8080
└── docs/                architecture, deployment, code standards
```

---

## Game Rules

- Board: 15 × 15 intersections
- Black moves first
- First player to place 5 stones in a row (horizontal, vertical, or diagonal) wins
- Full board with no winner is a draw

---

## Protocol

- **Transport:** WebSocket binary frames (`ws://<host>:1999/gomoku`)
- **Encoding:** protobuf (see `common/proto/request.proto`, `common/proto/response.proto`)
- **Auth:** client sends `AuthRequest{name}` immediately after connect; server replies with `AuthResponse{playerId, color}`
- **Heartbeat:** client → `HeartbeatRequest` every 5 s; server replies `HeartbeatResponse`; 3 missed → disconnect
- **Auto-reconnect:** client retries with exponential back-off on connection loss

---

## Deployment Notes

See [`docs/deployment-guide.md`](docs/deployment-guide.md) for:
- Docker Compose quick start
- Building individual images
- Reverse proxy / TLS setup (Caddy, Traefik, nginx)

---

## Credits

- [ratel-online](https://github.com/ratel-online) by [ainilili](https://github.com/ainilili) — original Go game server framework (MIT)
- [tiennm99/caro](https://github.com/tiennm99/caro) — feature-set reference: protobuf protocol, AI engine, Phaser 3 client
- [Phaser 3](https://phaser.io) — HTML5 game framework
- [gorilla/websocket](https://github.com/gorilla/websocket) — WebSocket library
- [protobuf](https://protobuf.dev) + [protobufjs](https://github.com/protobufjs/protobuf.js) — binary protocol

Implementation history: [`plans/260411-1101-port-caro-feature-set/plan.md`](plans/260411-1101-port-caro-feature-set/plan.md)

---

## License

Apache 2.0 — see [LICENSE](LICENSE).
