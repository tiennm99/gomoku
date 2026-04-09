# Gomoku Online

A multiplayer Gomoku (Five-in-a-Row) game with a Go server and web client. Players connect via WebSocket, create or join rooms, and play on a 15x15 board rendered on HTML5 Canvas.

Based on [Ratel Online](https://github.com/ratel-online/).

## Quick Start

```bash
# Build and run the server
cd server
go build -o gomoku-server main.go
./gomoku-server -w 9998 -t 9999 -s ../web

# Open http://localhost:9998 in your browser
# Open a second tab to play against yourself
```

## Project Structure

```
gomoku/
  server/     Go game server (WebSocket + TCP, state machine, in-memory DB)
  core/       Shared Go library (protocol, models, networking)
  client/     Go CLI client (terminal-based)
  web/        Browser client (vanilla JS, HTML5 Canvas)
  api/        Java REST API (user auth, MySQL — optional, not required for play)
```

## Architecture

```
Browser (web/)  ──WebSocket──>  server/ (:9998)
                                   |
CLI (client/)   ──TCP/WS─────>    |── state machine (per player)
                                   |── in-memory database (rooms, players)
                                   |── gomoku game engine (15x15, win detection)
                                   |
                                   |── serves web/ as static files at /
                                   |── WebSocket endpoint at /ws

core/  ── shared protocol, models, networking (imported by server + client)
```

**Key design decisions:**
- **Server-authoritative**: All move validation and win detection happens server-side. The web client never updates the board locally — it waits for the server's broadcast.
- **State machine per player**: Each connected player runs through states: `welcome -> home -> join/create -> waiting -> game`. States are registered in `server/state/state.go`.
- **In-memory store**: All game state lives in memory. Server restart loses all rooms and games. This is intentional — gomoku games are short-lived.
- **No build step for web client**: Vanilla JS, no bundler, no npm. Just serve the files.

## How to Play

### Web Client (recommended)

1. Start the server (see Quick Start above)
2. Open `http://localhost:9998` in your browser
3. Enter a player name and click **Connect**
4. Click **New Room** to create a gomoku room
5. Select **Gomoku** from the game type list
6. Share the room with another player (they click **Join Room** and select the room ID)
7. Room owner clicks **Start Game** when both players are in
8. Black plays first — click on a board intersection to place a stone
9. First player to get 5 in a row (horizontal, vertical, or diagonal) wins

### CLI Client

```bash
cd client
go run main.go -h 127.0.0.1 -p 9999    # TCP connection
go run main.go -h 127.0.0.1 -p 9998    # WebSocket connection
```

In the CLI, type numbers to navigate menus and `row,col` to place stones (e.g., `7,7`).

### Room Commands (in waiting state)

| Command | Description |
|---------|-------------|
| `start` or `s` | Start the game (owner only, needs 2 players) |
| `ls` or `v` | View room players and settings |
| `kicking <id>` or `k <id>` | Kick a player by ID (owner only) |
| `set pwd <password>` | Set room password |
| `set ip on/off` | Show/hide player IPs |
| `exit` or `e` | Leave the room |

## Server Configuration

```bash
./gomoku-server [flags]
```

| Flag | Default | Description |
|------|---------|-------------|
| `-w` | `9998` | WebSocket port (also serves web client) |
| `-t` | `9999` | TCP port (for CLI client) |
| `-s` | `../web` | Path to web client static files directory |
| `-bot` | (empty) | QQ bot connection address (optional) |
| `-bot-token` | (empty) | QQ bot authentication token |
| `-bot-group` | `0` | QQ bot group ID for notifications |

## Deployment

### Docker

```bash
cd server

# Development
make build && make run
# -> WebSocket + Web UI at http://localhost:9998
# -> TCP at localhost:9999

# View logs
make logs

# Stop
make stop

# Clean up
make clean
```

### Docker Compose (manual)

```bash
cd server
docker compose up -d
```

This exposes:
- Port `9998`: WebSocket server + web client UI
- Port `9999`: TCP server for CLI clients

### Production

For production deployment behind a reverse proxy:

1. Build the Docker image: `docker build -t gomoku-server:latest server/`
2. Run with your orchestrator (Docker Compose, Kubernetes, etc.)
3. Point a reverse proxy (nginx, Caddy) at port `9998` with WebSocket upgrade support
4. Ensure the `/ws` path proxies WebSocket connections correctly

Example nginx config:
```nginx
server {
    listen 80;
    server_name gomoku.example.com;

    location / {
        proxy_pass http://localhost:9998;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

### Cross-compilation

```bash
cd server
bash build.sh          # Linux/macOS — outputs to target/
powershell ./build.ps1 # Windows — outputs to target/
```

## Development

### Prerequisites

- Go 1.22+
- Modern browser (Chrome, Firefox, Edge) for web client
- Docker + Docker Compose (optional, for containerized deployment)

### Build

```bash
cd server && go build ./...
cd core && go build ./...
cd client && go build ./...
```

### Tests

```bash
cd server && go test ./...
cd core && go test ./...
```

### Protocol

The server uses a JSON-over-WebSocket protocol:

- **Wire format**: `{"data":"<base64-encoded-payload>"}` — Go's `[]byte` serializes as base64 in JSON
- **Auth flow**: Client sends `{"id":0, "name":"PlayerName", "score":0}` within 3 seconds of connecting
- **State signals**: `INTERACTIVE_SIGNAL_START` / `INTERACTIVE_SIGNAL_STOP` control when the client can send input
- **Game messages** (JSON): `{"type":"board",...}`, `{"type":"turn",...}`, `{"type":"gameover",...}`
- **Text messages**: Plain strings for menus, errors, and chat

## Credits

Built upon [Ratel Online](https://github.com/ratel-online) by [ainilili](https://github.com/ainilili) and contributors. Licensed under MIT — see `LICENSE` files in each subdirectory.
