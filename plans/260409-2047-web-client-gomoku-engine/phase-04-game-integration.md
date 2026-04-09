# Phase 04 — Game Integration

## Context Links
- [Phase 01 — server protocol](phase-01-server-gomoku-game.md)
- [Phase 02 — WS client + state machine](phase-02-web-client-foundation.md)
- [Phase 03 — board renderer](phase-03-gomoku-board-engine.md)

## Overview
- **Priority:** P1
- **Status:** Pending
- **Effort:** 1.5h
- Wire the board renderer to the state machine and WS client, creating the game controller that translates server messages into board updates and player clicks into server commands

## Key Insights
- Server sends mixed content: plain text for state machine navigation, JSON objects for gomoku game events
- Game controller activates when state machine detects GAME state
- Player clicks → `"row,col"` string sent to server (matching server's expected `"x,y"` input format)
- Server is authoritative: client never updates board locally on click — waits for server broadcast
- Two players in same browser tab is not a goal; each tab is one player

## Requirements

### Functional
- `GameController` class bridges `StateMachine`, `WsClient`, and `BoardRenderer`
- Detect JSON game messages: `board`, `move`, `turn`, `gameover`
- On `board` message: render full board, set last move highlight
- On `turn` message: enable board interactivity if it's this player's turn
- On `move` message: update log with move description
- On `gameover` message: show overlay, disable interaction, show "Play Again" option
- On player click: send `"row,col"` to server, disable interaction until next turn
- Show player color assignment (black/white) in UI
- Show turn indicator: "Your turn" / "Opponent's turn"

### Non-Functional
- Single file `web/js/game-controller.js` under 150 lines
- Clean separation: game controller does not touch Canvas directly (delegates to board renderer)

## Architecture

### Message Flow (Full Round Trip)
```
1. Server: {"type":"turn","color":1}     → controller enables board clicks
2. Player clicks (7, 7)                   → controller sends "7,7" via WS
3. Server validates, updates board
4. Server: {"type":"board","board":[...],"last":[7,7],"turn":2}  → controller renders board
5. Server: {"type":"turn","color":2}      → sent to opponent's connection
6. Opponent clicks (7,8)                  → opponent's controller sends "7,8"
7. Server: {"type":"board",...}           → both players get updated board
   ...repeat until win/draw...
8. Server: {"type":"gameover","winner":"PlayerA"} → both controllers show overlay
```

### Module API
```js
class GameController {
  constructor(wsClient, stateMachine, boardRenderer, uiElements)
  
  handleGameMessage(data)     // called by state machine for JSON game messages
  onBoardClick(row, col)      // called by board renderer on valid click
  setPlayerInfo(color, name)  // set this player's color assignment
  reset()                     // clean up for new game
}
```

### Integration Points

**state-machine.js additions:**
- In `handleMessage()`, try JSON parse; if `type` field exists, delegate to `gameController.handleGameMessage(parsed)`
- On state change to GAME: show game panel, call `boardRenderer.resize()`
- On state change away from GAME: call `gameController.reset()`

**app.js additions:**
- Import `BoardRenderer` and `GameController`
- Create instances after DOM ready
- Wire: `boardRenderer.onMoveSelect((r,c) => gameController.onBoardClick(r,c))`
- Wire: `stateMachine.setGameController(gameController)`

## Related Code Files

### Files to Create
| File | Purpose | Lines (est.) |
|------|---------|-------------|
| `web/js/game-controller.js` | Game event handling + command sending | ~120 |

### Files to Modify
| File | Change |
|------|--------|
| `web/js/state-machine.js` | Add JSON message detection, delegate game messages to controller |
| `web/js/app.js` | Import and wire BoardRenderer + GameController |
| `web/index.html` | Ensure game panel has canvas element and turn indicator |

## Implementation Steps

### Step 1: Create `web/js/game-controller.js`
```js
class GameController {
  constructor(wsClient, boardRenderer, ui) {
    this.ws = wsClient;
    this.board = boardRenderer;
    this.ui = ui;  // { turnIndicator, colorLabel, gameOverPanel }
    this.myColor = 0;
    this.myTurn = false;
    
    this.board.onMoveSelect((row, col) => this.onBoardClick(row, col));
  }

  handleGameMessage(msg) {
    switch (msg.type) {
      case 'board':  this.onBoard(msg); break;
      case 'turn':   this.onTurn(msg); break;
      case 'move':   this.onMove(msg); break;
      case 'gameover': this.onGameOver(msg); break;
    }
  }

  onBoard(msg) {
    this.board.render(msg.board);
    if (msg.last) this.board.setLastMove(msg.last[0], msg.last[1]);
  }

  onTurn(msg) {
    this.myColor = msg.color;
    this.myTurn = true;
    this.board.setInteractive(true);
    this.board.setPlayerColor(this.myColor);
    this.ui.turnIndicator.textContent = 'Your turn';
    this.ui.colorLabel.textContent = this.myColor === 1 ? 'Black' : 'White';
  }

  onMove(msg) {
    // Log move info
    this.myTurn = false;
    this.board.setInteractive(false);
    this.ui.turnIndicator.textContent = "Opponent's turn";
  }

  onBoardClick(row, col) {
    if (!this.myTurn) return;
    this.ws.send(row + ',' + col);
    this.myTurn = false;
    this.board.setInteractive(false);
    this.ui.turnIndicator.textContent = 'Waiting...';
  }

  onGameOver(msg) {
    this.board.setInteractive(false);
    const text = msg.draw ? 'Draw!' :
      (msg.winner + ' wins!');
    this.board.showGameOver(text);
    this.ui.turnIndicator.textContent = 'Game Over';
  }

  reset() {
    this.myColor = 0;
    this.myTurn = false;
    this.board.setInteractive(false);
    this.board.clearGameOver();
  }
}
```

### Step 2: Update `web/js/state-machine.js`
Add to `handleMessage(data)`:
```js
// Try parsing as JSON game event
try {
  const parsed = JSON.parse(data);
  if (parsed && parsed.type) {
    if (this.gameController) {
      this.gameController.handleGameMessage(parsed);
    }
    return; // Don't process as text
  }
} catch (e) {
  // Not JSON, continue with text processing
}
```

Add method:
```js
setGameController(controller) { this.gameController = controller; }
```

### Step 3: Update `web/js/app.js`
After DOM ready:
```js
const canvas = document.getElementById('game-canvas');
const boardRenderer = new BoardRenderer(canvas);
const gameController = new GameController(wsClient, boardRenderer, {
  turnIndicator: document.getElementById('turn-indicator'),
  colorLabel: document.getElementById('color-label'),
});
stateMachine.setGameController(gameController);
```

### Step 4: Update `web/index.html` game panel
```html
<div id="game-panel" class="panel hidden">
  <div id="game-info">
    <span id="color-label"></span>
    <span id="turn-indicator"></span>
  </div>
  <canvas id="game-canvas"></canvas>
</div>
```

## Todo List
- [ ] Create `web/js/game-controller.js`
- [ ] Update `web/js/state-machine.js` with JSON detection and game controller delegation
- [ ] Update `web/js/app.js` to wire all modules
- [ ] Update `web/index.html` game panel markup
- [ ] Test: two browser tabs connect, create gomoku room, start game
- [ ] Test: click sends correct coordinates, board updates on both clients
- [ ] Test: win detection triggers game-over overlay on both clients
- [ ] Test: after game over, both clients return to waiting state

## Success Criteria
- Two players in separate browser tabs can play a full gomoku game
- Board updates reflect on both clients after each move
- Turn indicator correctly shows whose turn it is
- Invalid moves (occupied cell) show error from server, turn remains
- Game-over overlay displays correct winner
- After game ends, room returns to waiting state

## Risk Assessment
| Risk | Mitigation |
|------|------------|
| Server sends board update before turn message | Controller handles messages independently; board renders regardless of turn state |
| JSON parse catches non-game JSON (e.g., room info) | Check for `type` field specifically; other JSON objects don't have it |
| Player disconnects mid-game | Server's `Offline()` + `roomCancel()` handles cleanup; other player's channel read will get closed-channel error |
| Race: click sent but turn changes before server processes | Server validates it's the player's turn; rejects if not. Client disables board on click. |

## Security Considerations
- Client never modifies board locally — server is authoritative
- Move validation entirely server-side
- No client-side game state that could be tampered with
