# Phase 02 — Web Client Foundation

## Context Links
- [WebSocket handler](../../server/network/wss.go)
- [Auth model](../../core/model/model.go)
- [Protocol](../../core/protocol/protocol.go)
- [Server main](../../server/main.go)

## Overview
- **Priority:** P1 (blocks Phase 4)
- **Status:** Pending
- **Effort:** 3h
- Create `web/` directory with HTML shell, WebSocket client module, state machine navigator, and static file serving from Go server

## Key Insights
- Server WebSocket at `/ws` uses gorilla/websocket; expects `{"data":"..."}` JSON packets — but actually the WS ReadWriteCloser sends raw JSON `Packet{Body}` which is just `{"data":"<bytes>"}`. Looking at `protocol.go` more carefully: the WS implementation sends `Packet.Body` as the message body directly (not wrapped). The client should send/receive raw strings/JSON, not length-prefixed.
- Auth: client must send `AuthInfo{id, name, score}` JSON as first message within 3 seconds
- State machine is text-based: server sends text prompts, client responds with text. E.g., server sends "1.Join\n2.New\n", client sends "2"
- Transaction markers: server sends `IsStart` (start accepting input) and `IsStop` (stop accepting input) — web client needs to detect these to know when input is expected
- `IsStart` and `IsStop` are defined in `core/consts` — need to check their values

### Static File Serving
- Add `http.Handle("/", http.FileServer(http.Dir("web/")))` in `wss.go` alongside the `/ws` handler
- This serves the web client without needing a separate server

## Requirements

### Functional
- HTML page with connection UI (name input, connect button)
- WebSocket connection to server `/ws` endpoint
- Auto-send `AuthInfo` JSON on connect
- Display server messages in a scrollable log panel
- Text input for sending commands during state navigation
- State-aware UI: show relevant controls per state (home menu, room list, game board)
- Detect JSON messages from server (gomoku game events) vs plain text

### Non-Functional
- Vanilla JS, no build step, no framework
- Each JS file under 200 lines
- Works in modern browsers (Chrome, Firefox, Edge)
- Responsive layout (desktop primary, mobile tolerable)

## Architecture

### File Structure
```
web/
  index.html           -- HTML shell, layout structure (~80 lines)
  css/
    style.css          -- All styles (~150 lines)
  js/
    ws-client.js       -- WebSocket connection + auth (~80 lines)
    state-machine.js   -- State detection + UI routing (~120 lines)
    board-renderer.js  -- Phase 3 (Canvas board)
    game-controller.js -- Phase 4 (game integration)
    app.js             -- Entry point, wires modules (~60 lines)
```

### Data Flow
```
User clicks Connect
  → app.js creates WsClient(host, name)
  → ws-client.js opens WebSocket to ws://host:9998/ws
  → sends AuthInfo JSON: {"id":0,"name":"PlayerName","score":0}
  → server responds with welcome text
  → state-machine.js detects state from server messages
  → renders appropriate UI panel
  → user clicks button / types command
  → ws-client.js sends text string to server
```

### Module API Design

**ws-client.js** — `WsClient` class
```js
class WsClient {
  constructor(url)
  connect(authInfo)          // opens WS, sends auth
  send(message)              // sends string to server
  onMessage(callback)        // register message handler
  onOpen(callback)
  onClose(callback)
  onError(callback)
  disconnect()
}
```

**state-machine.js** — `StateMachine` class
```js
class StateMachine {
  constructor(wsClient, uiElements)
  handleMessage(data)        // parse server message, update UI
  sendCommand(cmd)           // send command string
  getState()                 // returns current detected state
  onStateChange(callback)    // fires when state transitions
}
```

States detected by message content:
- `"1.Join"` → HOME state → show Join/New buttons
- `"Please select game type"` → CREATE state → show game type buttons
- `"Create room successful"` → WAITING state → show start button + player list
- `"has joined room"` → WAITING state
- `{"type":"board",...}` → GAME state → show canvas board
- `{"type":"turn",...}` → GAME state, your turn

## Related Code Files

### Files to Create
| File | Purpose | Lines (est.) |
|------|---------|-------------|
| `web/index.html` | HTML shell with panels | ~80 |
| `web/css/style.css` | Layout and styling | ~150 |
| `web/js/ws-client.js` | WebSocket connection manager | ~80 |
| `web/js/state-machine.js` | State detection and UI routing | ~120 |
| `web/js/app.js` | Entry point | ~60 |

### Files to Modify
| File | Change |
|------|--------|
| `server/network/wss.go` | Add static file serving: `http.Handle("/", http.FileServer(...))` |

## Implementation Steps

### Step 1: Check IsStart/IsStop constants
Read `core/consts/` to find exact values of `IsStart` and `IsStop` markers.

### Step 2: Modify `server/network/wss.go` for static file serving
Add before `http.HandleFunc("/ws", serveWs)`:
```go
http.Handle("/", http.FileServer(http.Dir("web")))
```
This serves files from `web/` directory relative to server working dir. No new flags needed — server is run from repo root or `server/` dir.

Alternatively, add a `-s` flag to `server/main.go` for configurable static dir path:
```go
flag.StringVar(&StaticDir, "s", "../web", "Static files directory")
```
Pass it through to the websocket server. Default `../web` works when running from `server/`.

### Step 3: Create `web/index.html`
HTML structure:
```
<div id="app">
  <div id="connect-panel">  -- name input + connect button
  <div id="home-panel">     -- Join / New buttons (hidden initially)
  <div id="create-panel">   -- Game type selection (hidden)
  <div id="waiting-panel">  -- Room info + Start button (hidden)
  <div id="game-panel">     -- Canvas + game controls (hidden)
  <div id="log-panel">      -- Message log (always visible)
  <div id="input-panel">    -- Text input + send button
</div>
<script type="module" src="js/app.js"></script>
```

### Step 4: Create `web/css/style.css`
- Flexbox layout: sidebar (log) + main (panels)
- Dark theme (game-appropriate)
- Panel show/hide via `.hidden` class
- Responsive: stack vertically on narrow screens

### Step 5: Create `web/js/ws-client.js`
- `WsClient` class with event callbacks
- `connect(authInfo)`: open `new WebSocket(url)`, on open send `JSON.stringify(authInfo)`
- `send(msg)`: `ws.send(JSON.stringify({data: msg}))` — need to verify if server expects raw string or wrapped packet
- Actually, looking at WebSocket protocol implementation: the gorilla WS `ReadMessage()` returns raw bytes. The `protocol.WebsocketReadWriteCloser.Read()` likely reads the raw message and wraps in `Packet{Body}`. So client should send the raw string directly, not JSON-wrapped.
- **CRITICAL**: Need to verify the exact WS protocol in `core/protocol/` WebSocket implementation.

### Step 6: Create `web/js/state-machine.js`
- Parse incoming messages
- Try `JSON.parse()` — if valid JSON with `type` field, it's a game event
- Otherwise, match against known text patterns to detect state
- Show/hide panels based on detected state
- Expose `onStateChange` for game controller to hook into

### Step 7: Create `web/js/app.js`
- Import and wire `WsClient` + `StateMachine`
- Bind DOM event listeners (connect button, command input, panel buttons)
- Home panel buttons send "1" (join) or "2" (new)
- Create panel buttons send game type number
- Waiting panel start button sends "start"

## Todo List
- [ ] Check `core/consts/` for IsStart/IsStop values
- [ ] Check `core/protocol/` for WebSocket read/write implementation (raw vs wrapped)
- [ ] Add static file serving to `server/network/wss.go`
- [ ] Create `web/index.html`
- [ ] Create `web/css/style.css`
- [ ] Create `web/js/ws-client.js`
- [ ] Create `web/js/state-machine.js`
- [ ] Create `web/js/app.js`
- [ ] Test: open browser, connect, see welcome message, navigate to home

## Success Criteria
- Browser loads `http://localhost:9998/` and shows connect UI
- Entering name and clicking Connect establishes WS to `/ws`
- Server welcome message appears in log
- Clicking "New" sends "2", server responds with game type list
- Clicking "Gomoku" sends "9", room is created
- State transitions detected and panels switch correctly

## Risk Assessment
| Risk | Mitigation |
|------|------------|
| WS protocol mismatch (raw vs JSON-wrapped) | Must verify `core/protocol/websocket.go` before implementation; test with browser devtools Network tab |
| IsStart/IsStop markers interfere with JSON parsing | Detect and strip these markers in `ws-client.js` before passing to state machine |
| Static file serving path depends on CWD | Use configurable `-s` flag with sensible default; document in README |
| CORS issues if served separately | Not applicable — same origin since static files served by same server |

## Security Considerations
- No credentials stored in browser (ID=0, server assigns real ID)
- WebSocket `CheckOrigin` already returns true (existing code)
- No localStorage/cookies used for auth
