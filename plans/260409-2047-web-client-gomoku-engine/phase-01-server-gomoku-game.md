# Phase 01 — Server-Side Gomoku Game

## Context Links
- [Liar game (reference pattern)](../../server/state/game/liar.go)
- [Liar DB model](../../server/database/liar.go)
- [Constants](../../server/consts/const.go)
- [State registration](../../server/state/state.go)
- [Waiting state routing](../../server/state/waiting.go)
- [Database room creation](../../server/database/database.go)

## Overview
- **Priority:** P1 (blocks Phase 4)
- **Status:** Pending
- **Effort:** 4h
- Add gomoku as game type 9 with a new state ID, database model, game logic, and win detection

## Key Insights
- Existing pattern: each game has a `database/*.go` struct implementing `RoomGame` interface (`Clean()`) and a `state/game/*.go` struct implementing `State` interface (`Next()`, `Exit()`)
- Channel-based turn sync: `States[playerID] chan int` — send state constant to unblock the player's goroutine
- Server is authoritative — all move validation and win detection server-side
- Text-based protocol: player sends string input, server parses it. Web client must send same strings.
- Gomoku is 2-player, so `MaxPlayers=2`, `MinPlayers` check in waiting state needs bypass (currently hardcoded to 3)

## Requirements

### Functional
- Game type `GameTypeGomoku = 9` with display name "Gomoku"
- State `StateGomokuGame` for the game loop
- 15x15 board, 2 players (black=player1, white=player2)
- Players alternate turns by sending `"x,y"` coordinates (0-indexed)
- Server validates: in bounds, cell empty, correct turn
- Win: 5 consecutive stones in any direction (horizontal, vertical, diagonal, anti-diagonal)
- Draw: board full with no winner
- On game end: broadcast result, reset room to waiting state

### Non-Functional
- Files under 200 lines each
- Follow existing mutex/channel patterns

## Architecture

### Data Flow
```
Player sends "x,y" string
  → server/state/game/gomoku.go handlePlay()
    → validate move (bounds, empty, turn)
    → update board[x][y]
    → check win (4 directions from last move)
    → broadcast board state + move to both players
    → if win/draw: send game-end state to both channels
    → else: send play state to opponent's channel
```

### Gomoku Protocol Messages (server → client)
All messages are plain strings (same as other games), sent via `player.WriteString()`:
- **Board state:** JSON object `{"type":"board","board":[[0,0,...],...],"last":[x,y],"turn":1}`
- **Move result:** `{"type":"move","player":"Name","x":3,"y":7}`
- **Game over:** `{"type":"gameover","winner":"Name"}` or `{"type":"gameover","draw":true}`
- **Error:** plain string like `"Invalid move. \n"`
- **Your turn:** `{"type":"turn","color":1}` (1=black, 2=white)

NOTE: Using JSON objects instead of plain text for game events so the web client can parse them. The CLI client will just display them as strings. Prefixed messages with structured JSON allow the web client to detect and parse game-specific data.

## Related Code Files

### Files to Create
| File | Purpose | Lines (est.) |
|------|---------|-------------|
| `server/consts/gomoku.go` | Gomoku-specific constants (board size, timeout) | ~15 |
| `server/database/gomoku.go` | `Gomoku` struct implementing `RoomGame` | ~50 |
| `server/state/game/gomoku.go` | `GomokuGame` struct implementing `State` — game loop | ~190 |

### Files to Modify
| File | Change |
|------|--------|
| `server/consts/const.go` | Add `StateGomokuGame`, `GameTypeGomoku=9`, add to `GameTypes` map and `GameTypesIds` slice |
| `server/state/state.go` | Register `StateGomokuGame` → `&game.GomokuGame{}` |
| `server/state/waiting.go` | Add `case consts.GameTypeGomoku: return consts.StateGomokuGame` in switch; add `case consts.GameTypeGomoku:` in `startGame()` |
| `server/database/database.go` | Add `case consts.GameTypeGomoku:` in `CreateRoom()` for `MaxPlayers=2` |

## Implementation Steps

### Step 1: Add constants (`server/consts/const.go`)
1. Add `StateGomokuGame` after `StateLiarGame` in the `StateID` iota block
2. Add `GameTypeGomoku = 9`
3. Add entry to `GameTypes` map: `GameTypeGomoku: "Gomoku"`
4. Append `GameTypeGomoku` to `GameTypesIds` slice

### Step 2: Create gomoku constants (`server/consts/gomoku.go`)
```go
package consts

const (
    GomokuBoardSize  = 15
    GomokuPlayTimeout = 60 * time.Second
)
```

### Step 3: Create database model (`server/database/gomoku.go`)
```go
package database

type Gomoku struct {
    sync.Mutex
    Room      *Room              `json:"room"`
    PlayerIDs [2]int64           `json:"playerIds"`  // [0]=black, [1]=white
    Board     [15][15]int        `json:"board"`       // 0=empty, 1=black, 2=white
    Turn      int                `json:"turn"`        // 1=black, 2=white
    States    map[int64]chan int `json:"states"`
    MoveCount int                `json:"moveCount"`
}

func (g *Gomoku) Clean() {
    for _, ch := range g.States {
        close(ch)
    }
}
```

### Step 4: Create game logic (`server/state/game/gomoku.go`)
Implement `GomokuGame` struct with:
- `Next(player)` — main loop: listen on `States[player.ID]` channel, dispatch to `handlePlay` or `handleGameEnd`
- `Exit(player)` — return `consts.StateHome`
- `handlePlay(player, game)` — prompt for move, validate, update board, check win, advance turn
- `checkWin(board, x, y, color)` — check 4 directions from (x,y), return true if 5+ consecutive
- `broadcastBoard(game)` — send board state JSON to all players
- `InitGomokuGame(room)` — create `Gomoku` struct, assign black/white randomly, send first turn

### Step 5: Register state (`server/state/state.go`)
Add import for gomoku and register: `register(consts.StateGomokuGame, &game.GomokuGame{})`

### Step 6: Route in waiting state (`server/state/waiting.go`)
In `Next()` switch: `case consts.GameTypeGomoku: return consts.StateGomokuGame, nil`
In `startGame()` switch: `case consts.GameTypeGomoku: room.Game, err = game.InitGomokuGame(room)`

### Step 7: Room creation defaults (`server/database/database.go`)
In `CreateRoom()` switch: `case consts.GameTypeGomoku: room.MaxPlayers = 2`

## Todo List
- [ ] Add `StateGomokuGame` and `GameTypeGomoku` to `server/consts/const.go`
- [ ] Create `server/consts/gomoku.go` with board size and timeout
- [ ] Create `server/database/gomoku.go` with `Gomoku` struct
- [ ] Create `server/state/game/gomoku.go` with game loop and win detection
- [ ] Register state in `server/state/state.go`
- [ ] Add routing in `server/state/waiting.go`
- [ ] Add room defaults in `server/database/database.go`
- [ ] Verify `go build` passes

## Success Criteria
- `go build ./...` succeeds in `server/`
- Gomoku appears in game type selection (type 9)
- Two CLI clients can create/join a gomoku room, take turns, and reach win/draw
- Invalid moves rejected with error message
- Win detection correct for all 4 directions

## Risk Assessment
| Risk | Mitigation |
|------|------------|
| MinPlayers=3 blocks 2-player start | Waiting state checks `room.Players <= 1`, not against MinPlayers constant; 2 players will pass |
| Channel deadlock if player disconnects | `Clean()` closes channels; `Offline()` triggers cleanup — same pattern as existing games |
| Existing `Model()` on Player assumes card game | Gomoku doesn't call `Player.Model()` — no conflict |

## Security Considerations
- Server validates all moves (no client trust)
- Move coordinates bounds-checked before array access
- Mutex protects concurrent board access
