---
title: "Web Client with Gomoku Game Engine"
description: "Add server-side gomoku game type and vanilla JS web client with Canvas-based board"
status: done
priority: P1
effort: 12h
branch: main
tags: [gomoku, web-client, game-engine, websocket]
created: 2026-04-09
---

# Web Client with Gomoku Game Engine

## Summary

Add gomoku (5-in-a-row) as a new game type to the Go server, then build a vanilla JS web client that connects via WebSocket, navigates the state machine, and renders a 15x15 board on HTML5 Canvas.

## Architecture Overview

```
web/ (new)                   server/ (modified)
  index.html                   consts/const.go        +GameTypeGomoku, +StateGomokuGame
  css/style.css                database/gomoku.go     Gomoku game record struct
  js/                          state/game/gomoku.go   Game state + turn logic
    ws-client.js               state/state.go         Register new state
    state-machine.js           state/waiting.go       Route to gomoku state
    board-renderer.js          state/create.go        (no change needed — uses GameTypes map)
    game-controller.js         network/wss.go         Serve static files from web/
    app.js                     server/main.go         Add -s flag for static dir
```

**Data flow:** Browser --WS JSON--> server `/ws` --> auth --> state machine --> gomoku game state --> channel-based turn sync --> WS JSON back to browser

## Phases

| # | Phase | Status | Effort | File |
|---|-------|--------|--------|------|
| 1 | Server-side gomoku game | Done | 4h | [phase-01](phase-01-server-gomoku-game.md) |
| 2 | Web client foundation | Done | 3h | [phase-02](phase-02-web-client-foundation.md) |
| 3 | Canvas gomoku board engine | Done | 2.5h | [phase-03](phase-03-gomoku-board-engine.md) |
| 4 | Game integration | Done | 1.5h | [phase-04](phase-04-game-integration.md) |
| 5 | Testing | Done | 1h | [phase-05](phase-05-testing.md) |

## Dependencies

```
Phase 1 (server) ──► Phase 4 (integration)
Phase 2 (ws client) ──► Phase 4
Phase 3 (board) ──► Phase 4
Phase 4 ──► Phase 5 (testing)
```

Phases 1, 2, 3 can run in parallel. Phase 4 integrates all. Phase 5 validates.

## Protocol Detail (CRITICAL)

Verified from `core/protocol/websocket.go` and `core/protocol/protocol.go`:

- `Packet` struct: `Body []byte` with JSON tag `"data"`
- **WS Write**: server marshals `Packet` to JSON → `{"data":"<base64>"}`  (Go's `[]byte` → base64 in JSON)
- **WS Read**: client sends `{"data":"<base64>"}` → server unmarshals to `Packet.Body`
- **Transaction markers**: `IsStart = "INTERACTIVE_SIGNAL_START"`, `IsStop = "INTERACTIVE_SIGNAL_STOP"` — sent as `Packet.Body`, so they arrive base64-encoded in `data` field
- Web client must: `btoa(string)` to encode outgoing, `atob(data)` to decode incoming

## Key Decisions

1. **2 players only** — gomoku is 1v1, so `MaxPlayers=2` for gomoku rooms
2. **15x15 board** — standard size, stored as `[15][15]int` (0=empty, 1=black, 2=white)
3. **Protocol reuse** — use existing `Packet{Body}` JSON over WS, no new protocol
4. **Static file serving** — server serves `web/` via `http.Handle("/", ...)` alongside `/ws`
5. **Win detection** — server-side only (authoritative); check 4 directions from last move
6. **No framework** — vanilla JS, HTML5 Canvas, no build step
7. **Base64 encoding** — WS messages wrap `[]byte` as base64 in JSON `data` field; web client must encode/decode

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| State machine expects text commands, web sends JSON | High | High | Web client sends same text strings CLI does (e.g., "2" for New, "9" for Gomoku) |
| Concurrent board access | Medium | High | Use `sync.Mutex` on Gomoku struct, same pattern as Liar game |
| WebSocket message format mismatch | Medium | Medium | Test with browser devtools; server already handles JSON packets |
| Canvas rendering perf | Low | Low | 15x15 is tiny; no optimization needed |
