# Deployment Guide

## Prerequisites

| Requirement | Version | Purpose |
|-------------|---------|---------|
| Go | 1.22+ | Build server and CLI client |
| Docker | 20+ | Containerized deployment |
| Docker Compose | v2+ | Orchestration |
| Modern browser | Chrome/Firefox/Edge | Web client |

## Local Development

### 1. Build and Run Server

```bash
cd server
go build -o gomoku-server main.go
./gomoku-server -w 9998 -t 9999 -s ../web
```

This starts:
- **Port 9998**: WebSocket server + web client UI at `http://localhost:9998`
- **Port 9999**: TCP server for CLI clients

### 2. Open Web Client

Open `http://localhost:9998` in two browser tabs. Enter names, connect, create a room, join it, and start playing.

### 3. CLI Client (optional)

```bash
cd client
go run main.go -h 127.0.0.1 -p 9999
```

### Server Flags

| Flag | Default | Description |
|------|---------|-------------|
| `-w` | `9998` | WebSocket port (serves web UI + `/ws` endpoint) |
| `-t` | `9999` | TCP port (CLI client) |
| `-s` | `../web` | Static files directory for web client |
| `-bot` | *(empty)* | QQ bot address (optional) |
| `-bot-token` | *(empty)* | QQ bot token |
| `-bot-group` | `0` | QQ group ID for notifications |

## Docker Deployment

### Development

```bash
cd server
make build    # builds Docker image from repo root context
make run      # starts container, maps ports 9998 + 9999
make logs     # tail container logs
make stop     # stop container
make clean    # remove container and image
```

### Manual Docker Compose

```bash
cd server
docker compose up -d
```

The `docker-compose.yaml` sets build context to the repo root (`..`) so the Dockerfile can access both `server/` and `web/`.

### Standalone Docker Build

From the **repo root**:

```bash
docker build -t gomoku-server:latest -f server/Dockerfile .
docker run -d -p 9998:9998 -p 9999:9999 --name gomoku gomoku-server:latest
```

## Production Deployment

### Reverse Proxy (nginx)

The server handles both HTTP (static files) and WebSocket (`/ws`) on the same port. Your reverse proxy must support WebSocket upgrade:

```nginx
server {
    listen 80;
    server_name gomoku.example.com;

    location / {
        proxy_pass http://gomoku-server:9998;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### HTTPS / TLS

Add TLS termination at the reverse proxy layer. The Go server itself does not handle TLS. Clients will connect via `wss://` automatically when the page is served over HTTPS.

### Resource Requirements

The server is lightweight — all state is in-memory:

| Metric | Estimate |
|--------|----------|
| Memory | ~50MB base + ~1KB per active player |
| CPU | Minimal — one goroutine per player |
| Disk | None (no persistence) |
| Network | ~1KB per move (JSON board broadcast) |

### Container Limits (docker-compose defaults)

- CPU: 2 cores max, 0.5 reserved
- Memory: 512MB max, 128MB reserved
- Log rotation: 10MB per file, 3 files max

### Health Checks

The Docker container includes a health check that tests TCP connectivity to port 9998. For external monitoring:

```bash
# WebSocket port
curl -s -o /dev/null -w "%{http_code}" http://localhost:9998
# Should return 200 (serves index.html)

# TCP port
nc -z localhost 9999
```

## Cross-Compilation

Build server binaries for multiple platforms:

```bash
cd server

# Linux/macOS
bash build.sh        # outputs to target/

# Windows
powershell ./build.ps1  # outputs to target/
```

## Important Notes

### No Persistence

All game state (rooms, players, active games) is stored in memory. A server restart clears everything. This is by design — gomoku games are short-lived sessions, not long-running persistent state.

### No Authentication Required

The web client sends `id: 0` during auth — the server assigns a real ID from its connection counter. No database, no passwords, no sessions. The optional Java `api/` module provides user auth via MySQL if needed, but it is not required for gameplay.

### Single-Process Architecture

The server runs as a single Go process. There is no clustering or horizontal scaling — a single instance handles all connections. For most use cases (dozens of concurrent games), this is sufficient.

### WebSocket Path

The WebSocket endpoint is always at `/ws`. The static file server handles all other paths. Do not configure your reverse proxy to intercept `/ws` — it must pass through to the Go server.
