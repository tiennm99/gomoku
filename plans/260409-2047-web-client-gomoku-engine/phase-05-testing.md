# Phase 05 — Testing

## Context Links
- [Phase 01 — server gomoku](phase-01-server-gomoku-game.md)
- [Phase 04 — integration](phase-04-game-integration.md)

## Overview
- **Priority:** P2
- **Status:** Pending
- **Effort:** 1h
- Server-side unit tests for gomoku game logic + manual integration test checklist for web client

## Key Insights
- Existing test pattern: `go test ./...` in each module
- No existing test infrastructure for browser testing — manual test checklist is pragmatic (YAGNI)
- Critical to test: win detection (4 directions + edge cases), move validation, turn alternation
- Board state serialization tested implicitly through integration

## Requirements

### Functional
- Unit tests for win detection in all 4 directions
- Unit tests for edge cases: board corners, board full (draw), invalid moves
- Unit tests for game initialization (2 players, correct turn assignment)
- Manual integration test checklist for end-to-end web client flow

### Non-Functional
- Tests run via `cd server && go test ./...`
- No test file exceeds 200 lines

## Architecture

### Test Matrix

| Component | Test Type | What | Coverage |
|-----------|-----------|------|----------|
| `checkWin()` | Unit | Horizontal 5-in-row | gomoku_test.go |
| `checkWin()` | Unit | Vertical 5-in-row | gomoku_test.go |
| `checkWin()` | Unit | Diagonal (↘) 5-in-row | gomoku_test.go |
| `checkWin()` | Unit | Anti-diagonal (↗) 5-in-row | gomoku_test.go |
| `checkWin()` | Unit | No win (4-in-row) | gomoku_test.go |
| `checkWin()` | Unit | Win at board edge/corner | gomoku_test.go |
| `InitGomokuGame()` | Unit | 2 players assigned, board empty, turn=1 | gomoku_test.go |
| Move validation | Unit | Out of bounds rejected | gomoku_test.go |
| Move validation | Unit | Occupied cell rejected | gomoku_test.go |
| Move validation | Unit | Wrong turn rejected | gomoku_test.go |
| Draw detection | Unit | Full board, no winner | gomoku_test.go |
| WS connect + auth | Integration (manual) | Browser connects, auth succeeds | checklist |
| State navigation | Integration (manual) | Home → Create → Waiting → Game | checklist |
| Full game | Integration (manual) | Two tabs play to win | checklist |
| Disconnect | Integration (manual) | One tab closes mid-game | checklist |

## Related Code Files

### Files to Create
| File | Purpose | Lines (est.) |
|------|---------|-------------|
| `server/state/game/gomoku_test.go` | Unit tests for win detection and move validation | ~180 |

### Files to Modify
None

## Implementation Steps

### Step 1: Create `server/state/game/gomoku_test.go`

Test structure:
```go
package game

import "testing"

func TestCheckWin_Horizontal(t *testing.T) {
    var board [15][15]int
    // Place 5 black stones horizontally at row 7, cols 3-7
    for c := 3; c <= 7; c++ {
        board[7][c] = 1
    }
    if !checkWin(board, 7, 5, 1) { // check from middle stone
        t.Error("expected horizontal win")
    }
}

func TestCheckWin_Vertical(t *testing.T) { ... }
func TestCheckWin_Diagonal(t *testing.T) { ... }
func TestCheckWin_AntiDiagonal(t *testing.T) { ... }

func TestCheckWin_NoWin_FourInRow(t *testing.T) {
    var board [15][15]int
    for c := 3; c <= 6; c++ {
        board[7][c] = 1
    }
    if checkWin(board, 7, 5, 1) {
        t.Error("4-in-row should not win")
    }
}

func TestCheckWin_EdgeOfBoard(t *testing.T) {
    var board [15][15]int
    // 5 stones at row 0, cols 0-4
    for c := 0; c <= 4; c++ {
        board[0][c] = 1
    }
    if !checkWin(board, 0, 2, 1) {
        t.Error("expected edge win")
    }
}

func TestCheckWin_CornerWin(t *testing.T) {
    var board [15][15]int
    // Diagonal from (0,0) to (4,4)
    for i := 0; i <= 4; i++ {
        board[i][i] = 2
    }
    if !checkWin(board, 0, 0, 2) {
        t.Error("expected corner diagonal win")
    }
}

func TestIsBoardFull(t *testing.T) {
    var board [15][15]int
    for r := 0; r < 15; r++ {
        for c := 0; c < 15; c++ {
            board[r][c] = 1 + (r+c)%2
        }
    }
    // 225 moves, board should be full
    if !isBoardFull(board) {
        t.Error("expected full board")
    }
}
```

NOTE: `checkWin` and `isBoardFull` must be exported or the test must be in the same package. Since test file is in `package game`, unexported functions are accessible.

### Step 2: Run tests
```bash
cd server && go test ./state/game/ -v -run TestCheckWin
cd server && go test ./... 
```

### Step 3: Manual integration test checklist

Execute in order with two browser tabs:

**Connection & Auth**
- [ ] Open `http://localhost:9998/` — page loads with connect panel
- [ ] Enter name "Player1", click Connect — welcome message appears in log
- [ ] Open second tab, enter "Player2", connect — welcome message appears

**Room Creation & Join**
- [ ] Tab1: click "New" — game type list shown
- [ ] Tab1: click "Gomoku" — room created message, waiting panel shown
- [ ] Tab2: click "Join" — room list shown with gomoku room
- [ ] Tab2: select room — joins room, waiting panel shown
- [ ] Tab1: click "Start" — game starts, board appears on both tabs

**Gameplay**
- [ ] Tab with black turn: board interactive, turn indicator says "Your turn"
- [ ] Other tab: board not interactive, says "Opponent's turn"
- [ ] Click empty intersection — move sent, board updates on both tabs
- [ ] Click occupied intersection — nothing happens (client-side check)
- [ ] Turns alternate correctly between tabs
- [ ] Last move highlighted with red dot on both tabs

**Win Detection**
- [ ] Play until 5-in-a-row — game-over overlay appears on both tabs
- [ ] Winner name displayed correctly
- [ ] Both tabs return to waiting state after game over

**Edge Cases**
- [ ] Close one tab mid-game — other tab gets disconnect message
- [ ] Resize browser window — board re-renders correctly
- [ ] Rapid clicking — only one move sent per turn

## Todo List
- [ ] Create `server/state/game/gomoku_test.go` with win detection tests
- [ ] Add move validation tests
- [ ] Add draw detection test
- [ ] Run `go test ./...` — all pass
- [ ] Execute manual integration checklist
- [ ] Fix any issues found during manual testing

## Success Criteria
- All unit tests pass: `go test ./state/game/ -v` shows 0 failures
- `go test ./...` across server module passes (no regressions)
- Manual integration checklist: all items checked
- No panics or goroutine leaks observed in server logs during manual test

## Risk Assessment
| Risk | Mitigation |
|------|------------|
| `checkWin` not exported for testing | Test file in same package (`package game`) — accesses unexported functions |
| Existing tests break from new constants | New constants are additive; no existing behavior changed |
| Manual testing misses edge case | Test matrix covers critical paths; expand checklist if bugs found post-release |

## Rollback Plan
- Revert all gomoku-related files (new files only, no existing files broken)
- Remove `GameTypeGomoku` from constants and registration
- Remove `web/` directory
- Server returns to pre-gomoku state with zero impact on existing games
