# Deployment Guide

## Prerequisites

| Requirement | Version | Purpose |
|-------------|---------|---------|
| Go | 1.23+ | Build server |
| Node | 22+ | Build browser client |
| Docker + Compose | 20+ / v2+ | Containerized deployment |

---

## Docker Compose (recommended)

Run the full stack — Go server on `:1999` and nginx client on `:8080`:

```bash
docker compose up -d
```

Open http://localhost:8080 in two browser tabs to play.

Stop and remove containers:

```bash
docker compose down
```

Rebuild images after code changes:

```bash
docker compose up -d --build
```

---

## Local Development

```bash
# Terminal 1 — Go server on :1999
go -C server run . -p 1999

# Terminal 2 — Vite dev server on :5173
npm --prefix client install
npm --prefix client run dev
```

Open http://localhost:5173. The client derives the WebSocket URL from
`window.location.hostname`, so it connects to `ws://localhost:1999/gomoku`
automatically in both dev and production.

---

## Building Individual Images

```bash
# Server (Go multi-stage → distroless/static-debian12, < 20 MB)
docker build -t gomoku-server:local ./server

# Client (node:22-alpine build → nginx:1.27-alpine runtime)
docker build -t gomoku-client:local ./client
```

---

## Server Makefile Targets

From `server/`:

```bash
make build        # compile Go binary
make test         # go test ./...
make lint         # go vet ./...
make docker-build # build gomoku-server:local image
make docker-run   # run server container on :1999
make docker-stop  # stop + remove server container
make docker-logs  # tail server container logs
make smoke        # vet + test + binary build gate
make proto        # regenerate protobuf stubs
```

---

## Reverse Proxy / TLS

The server exposes only a WebSocket endpoint at `ws://<host>:1999/gomoku`.
The client is served by nginx at `:8080`.

In production, front both with a reverse proxy that handles TLS termination
(Caddy or Traefik are simplest):

**Caddy example (`Caddyfile`):**

```
gomoku.example.com {
    handle /gomoku* {
        reverse_proxy localhost:1999
    }
    handle {
        reverse_proxy localhost:8080
    }
}
```

**nginx example:**

```nginx
server {
    listen 443 ssl;
    server_name gomoku.example.com;

    # Static client
    location / {
        proxy_pass http://localhost:8080;
    }

    # WebSocket endpoint — must be on the Go server port
    location /gomoku {
        proxy_pass http://localhost:1999;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

Note: if you front both services behind the same hostname, the client will
derive `wss://<hostname>/gomoku` automatically (because it uses
`window.location.hostname` + the hardcoded `:1999` port). For split-port
production setups, the WS URL derivation in
`client/src/services/connection-service.js` must be updated to use port 443.

---

## Environment Variables

Currently none — the server and client have no runtime configuration beyond
the server's `-p` flag. The WS URL is derived at runtime from
`window.location.hostname` in the browser.

Future: JWT auth allowlist, CORS origin restriction, Prometheus metrics
endpoint.

---

## Resource Requirements

| Metric | Estimate |
|--------|----------|
| Server memory | ~20 MB base + ~2 KB per active player |
| Server CPU | Minimal — one goroutine per player, no polling |
| Client image | nginx:1.27-alpine + ~1.6 MB JS bundle |
| Server image | < 20 MB (distroless static) |
| Persistence | None — in-memory only, restart clears all rooms |

---

## Manual Smoke Check

After `docker compose up -d`:

```bash
# nginx client should return 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/

# WebSocket server should return 400 or 426 (upgrade required — healthy)
curl -s -o /dev/null -w "%{http_code}" http://localhost:1999/gomoku
```

Then open http://localhost:8080 in two browser tabs, create a room in one tab,
join from the other, start the game, and make a few moves to confirm end-to-end
WebSocket communication.
