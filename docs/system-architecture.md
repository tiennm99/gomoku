# System Architecture

## Overview

Multiplayer Gomoku with a Go server, Phaser 3 browser client, and a shared
protobuf wire format. The server is authoritative for all moves, win detection,
and room lifecycle. All state lives in memory — there is no database.

## Component Diagram

```
┌──────────────────────┐      WebSocket binary (:1999/gomoku)      ┌──────────────────────┐
│  Browser client      │ ◄────────────────────────────────────────► │  Go game server      │
│  (Phaser 3 + Vite)   │              protobuf frames               │                      │
│                      │                                            │  main.go             │
│  scenes/             │                                            │  network/            │
│    boot-scene.js     │                                            │    server.go         │
│    menu-scene.js     │                                            │    reader.go         │
│    game-scene.js     │                                            │    writer.go         │
│                      │                                            │    dispatch.go       │
│  services/           │                                            │    handlers_stateless│
│    event-bus.js      │                                            │                      │
│    connection-service│                                            │  state/              │
│    game-state-service│                                            │    welcome           │
│    client-exit-helpers                                            │    set_nickname      │
│                      │                                            │    home              │
│  ui/                 │                                            │    waiting           │
│    menu-ui.js        │                                            │    game_pvp          │
│    menu-ui-rooms.js  │                                            │    game_pve          │
│    game-ui.js        │                                            │    gameover          │
│                      │                                            │    watching          │
│  objects/            │                                            │                      │
│    board.js          │                                            │  lobby/              │
│    stone.js          │                                            │    store (rooms,     │
│                      │                                            │     players)         │
│  generated/          │                                            │    room, player      │
│    protocol.js       │                                            │    cleanup           │
│    protocol.d.ts     │                                            │                      │
│                      │                                            │  game/               │
│                      │                                            │    board             │
│                      │                                            │    ai (easy/med/hard)│
└──────────────────────┘                                            └──────────────────────┘
                                          ▲                                     ▲
                                          │                                     │
                                          └──────── common/proto/ ─────────────┘
                                                request.proto
                                                response.proto
```

## State Machine

Every connected WebSocket spawns one state machine goroutine. Each state
implements:

```go
type State interface {
    Next(player *lobby.Player) (next consts.StateID, err error)
}
```

The runner (`state/state.go`) loops calling `s.Next(player)` until a state
returns `ErrClientExit` or the player's `CmdCh` is closed.

### State Flow

```
            Welcome
               │
               ▼
         SetNickname
               │
               ▼
              Home ◄──────────────────────────────────────┐
               │                                          │
      ┌────────┼────────────┐                             │
      │        │            │                             │
      ▼        ▼            ▼                             │
   Waiting   GamePve    Watching                          │
      │        │            │                             │
      │        │            └── exit/watch_exit ──────────┤
      │        │                                          │
      │        └── game-over ──┐                          │
      │                        ▼                          │
      │                     GameOver                      │
      │                        │                          │
      │                        └── exit/reset ────────────┤
      │                                                   │
      └── auto-start (2nd player joins) ──► GamePvp ──────┤
                                               │          │
                                               └── end ──► GameOver ─┐
                                                                     │
                                                                     └─►
```

### State Registry

| State | Purpose |
|-------|---------|
| `Welcome` | One-shot entry; server already sent `ClientConnectResponse` + nickname prompt, transition immediately to `SetNickname`. |
| `SetNickname` | Wait for `SetNicknameRequest` (handled statelessly in parallel); polls `player.Name` to advance. |
| `Home` | Main lobby. Accepts `CreateRoomRequest`, `CreatePveRoomRequest`, `JoinRoomRequest`, `WatchGameRequest`, `ClientExitRequest`. |
| `Waiting` | PVP pre-game. Single unified loop for both owner and joiner. Blocks on `room.StartCh` (auto-start) or `CmdCh` (client exit). |
| `GamePvp` | Active PVP game. Two goroutines share the room; synchronize via `room.GameOverCh`. |
| `GamePve` | Active PVE game. Single goroutine; AI moves run inline when it's the AI's turn. |
| `GameOver` | Post-game. Accepts `GameResetRequest` (rematch, synchronizes via `room.RematchCh`) or `ClientExitRequest`. |
| `Watching` | Spectator view. Accepts `WatchGameExitRequest` or `ClientExitRequest`; `GameMoveRequest` is rejected with `SpectatorCannotActResponse`. |

### Cross-goroutine room synchronization

Three channels on the `Room` struct let independent player goroutines wake each
other without polling:

- **`StartCh`** — closed by `handleJoinRoom` when the 2nd player joins. Wakes
  the owner's `waitingState` for PVP auto-start.
- **`GameOverCh`** — closed when one player's `gamePvpState` detects a win or
  a forfeit. Wakes the peer's `gamePvpState` so both transition to `gameOverState`.
- **`RematchCh`** — lazily created by the first goroutine entering
  `gameOverState`; closed by `handleGameReset` on Play Again so the peer also
  transitions into the fresh game.

`gameOverState`'s ClientExit path additionally calls `kickStaleRoomPeers`,
which pushes a synthetic `ClientExitRequest` onto remaining peers' `CmdCh`
if the room becomes unplayable (PVP with <2 humans). This prevents a
desynced peer from sitting in `gameOverState` while its client has
transitioned to the lobby.

## Networking Protocol

### Wire format

- Transport: WebSocket at `ws://<host>:1999/gomoku`
- Payload: binary protobuf `Request` / `Response` messages
- Encoding: `proto.Marshal` / `proto.Unmarshal` on the server
  (`server/network/codec.go`); protobufjs on the client
  (`client/src/services/connection-service.js`)
- Max frame: 4 KB (server read limit)

### Request / Response routing

Each wrapper uses a `oneof payload` — the case name IS the event code.

- `network/dispatch.go` routes incoming `Request` by type:
  - **stateless** (inline on reader goroutine): `Heartbeat`, `SetNickname`,
    `GetRooms`, `SetClientInfo`
  - **stateful** (pushed onto `player.CmdCh` for state machine to consume):
    `CreateRoom`, `CreatePveRoom`, `JoinRoom`, `GameMove`, `GameReset`,
    `WatchGame`, `WatchGameExit`, `ClientExit`
- Client `_onMessage` decodes the binary frame, reads
  `Response.payload` (pbjs oneof tag), maps the case name to a
  `ClientEventCode` string via `RESPONSE_CASE_TO_CLIENT_CODE`, and emits on
  the event bus. Scenes subscribe to those event codes.

### Typed enums

`common/proto/response.proto` defines:

- `Piece { BLACK, WHITE }`
- `GameResult { BLACK_WIN, WHITE_WIN, DRAW }`
- `RoomType { PVP, PVE }`
- `RoomStatus { WAITING, PLAYING, FINISHED }`

These replace previously stringly-typed fields. protobufjs `toJSON` serializes
enums to their UPPERCASE name, so the client's existing string comparisons
(e.g. `data.piece === 'BLACK'`) continue to work without numeric handling.

### Heartbeat + reconnect

- Client sends `HeartbeatRequest` every 50 s.
- Server read deadline: 90 s — any frame (heartbeat or otherwise) resets it.
- On unexpected WS close, client auto-reconnects with exponential back-off
  (1 s → 30 s cap, max 10 attempts). Reconnect creates a fresh server session;
  the client re-sends its nickname from the cached `gameState.nickname`.

### ClientExit semantics

`ClientExitResponse` is broadcast to every player in the room so peers see
who left. The client distinguishes self vs peer via `exit_client_id`:

- `exit_client_id == 0` → bare self-ack (home / watching / room-closed)
- `exit_client_id == clientId` → our own broadcast loopback (self)
- Anything else → a peer left; stay in the current scene and show a toast

This gating lives in `client/src/services/client-exit-helpers.js`.

## In-memory Lobby

All state in `server/lobby/`:

| Store | Key | Value | Purpose |
|-------|-----|-------|---------|
| `store.players` | player ID | `*Player` | All connected players |
| `store.rooms`   | room ID   | `*Room`   | Active game rooms |

Each `Room` holds its own `Players` map, `Spectators` map, embedded
`game.Board`, `MoveHistory`, and the three sync channels.

### Room lifecycle

- Created by `CreatePvpRoom` / `CreatePveRoom` (from `state/home.go`)
- Players added via `JoinRoom`, removed via `LeaveRoom`
- On every `LeaveRoom`, if the room becomes empty (no players, no spectators)
  it is deleted immediately from `store.rooms`
- `cleanup.go` runs an idle reaper every minute and deletes rooms that have
  been empty for > 5 minutes (safety net; normal path is immediate delete)

## Game Engine

`server/game/` is pure — no network, no state machine dependencies.

- `board.go` — 15×15 `Board` value type, `Piece` + `GameResult` enums,
  `MakeMove`, `Clone`, `Reset`, win detection (4 directions from last move)
- `helper.go` — stateless utilities: `ValidMoves`, `FormatBoard`,
  `WinnerMessage`
- `ai.go` / `ai_eval.go` / `ai_minimax.go` — three difficulties:
  - **Easy** — random legal move
  - **Medium** — heuristic: immediate win > immediate block > nearest
    center-weighted
  - **Hard** — minimax depth 3 + alpha-beta pruning, leaf evaluation via
    threat-pattern scoring, candidate pruning (radius-2 Chebyshev neighbourhood
    of existing stones). Typical mid-game move < 1 ms.

## Client Architecture

Phaser 3 scenes + DOM overlay (menus/HUD as plain DOM on top of the canvas
inside `#ui-overlay`).

| Module | Responsibility |
|--------|---------------|
| `scenes/boot-scene.js` | Opens WS connection, transitions to MenuScene |
| `scenes/menu-scene.js` | Nickname entry, lobby, PVP/PVE submenus, waiting room, room list |
| `scenes/game-scene.js` | Phaser board + stones + hover ghost; click → `sendGameMove`; subscribes to move/win events |
| `services/event-bus.js` | Tiny pub/sub singleton |
| `services/connection-service.js` | WS lifecycle, heartbeat, reconnect, typed `send*` helpers, `Response` decode → event-bus emit |
| `services/game-state-service.js` | Client state container: `clientId`, `nickname`, `roomId`, `isBlack`, `currentTurn`, `moves[]` |
| `services/client-exit-helpers.js` | `isSelfExit(data, clientId)` — central self-vs-peer check |
| `ui/menu-ui.js` | Nickname screen, lobby, PVP/PVE submenus |
| `ui/menu-ui-rooms.js` | Room list, PVE difficulty dialog, waiting room |
| `ui/game-ui.js` | HUD (player panels, move history), game-over modal, toast notifications |
| `objects/board.js` | Phaser `Graphics` board: wood background, grid, star points, coord labels |
| `objects/stone.js` | Phaser `Graphics` stone with drop-in tween, last-move marker |

The browser client is fully server-authoritative: clicking the board sends a
`GameMoveRequest` and waits for the server's `GameMoveSuccessResponse`
broadcast before rendering the stone.
