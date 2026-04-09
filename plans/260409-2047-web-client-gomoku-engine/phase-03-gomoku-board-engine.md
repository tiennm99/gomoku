# Phase 03 — Canvas-Based Gomoku Board Engine

## Context Links
- [Phase 01 — server protocol messages](phase-01-server-gomoku-game.md)
- [Phase 02 — web client foundation](phase-02-web-client-foundation.md)

## Overview
- **Priority:** P1 (blocks Phase 4)
- **Status:** Pending
- **Effort:** 2.5h
- Implement a self-contained Canvas renderer for 15x15 gomoku board with click-to-place interaction

## Key Insights
- 15x15 = 225 intersections — trivially small for Canvas; no perf concerns
- Gomoku stones placed on intersections (not cells), so grid lines drawn first, stones drawn as circles at intersection points
- Board must re-render from full state array on each server update (stateless rendering)
- Click handling: translate pixel coords to nearest grid intersection
- Last move should be highlighted (small marker) so players can track opponent's move

## Requirements

### Functional
- Render 15x15 grid with labeled axes (A-O columns, 1-15 rows)
- Draw black/white stones as filled circles at intersections
- Highlight last placed stone with a colored dot/ring
- Click on intersection to select move (only when it's player's turn)
- Hover effect showing ghost stone at nearest valid intersection
- Emit move event with `(x, y)` coordinates on click
- Display current turn indicator (whose turn + your color)
- Display game-over overlay (winner name or draw)

### Non-Functional
- Single file `web/js/board-renderer.js` under 200 lines
- Works on Canvas element sized to fit container (responsive)
- Crisp rendering on high-DPI displays (devicePixelRatio)
- No external dependencies

## Architecture

### Rendering Pipeline
```
Server sends {"type":"board","board":[[...],...], "last":[x,y], "turn":1}
  → game-controller.js receives, calls boardRenderer.render(boardState)
  → board-renderer.js:
    1. Clear canvas
    2. Draw wood-colored background
    3. Draw 15x15 grid lines
    4. Draw axis labels (A-O, 1-15)
    5. Draw star points (standard 5 points on 15x15)
    6. Iterate board array: draw black/white circle at each occupied intersection
    7. Draw highlight on last move
    8. If game over: draw semi-transparent overlay with result text
```

### Coordinate System
```
Board array: board[row][col] where row=0 is top, col=0 is left
Canvas pixel: (px, py)
Grid intersection: (col, row)

Conversion:
  padding = 30px (for labels)
  cellSize = (canvasSize - 2*padding) / 14
  px = padding + col * cellSize
  py = padding + row * cellSize

  Click → nearest intersection:
    col = Math.round((clickX - padding) / cellSize)
    row = Math.round((clickY - padding) / cellSize)
    Clamp to [0, 14]
```

### Module API
```js
class BoardRenderer {
  constructor(canvasElement)
  
  // Rendering
  render(boardState)           // full re-render from 15x15 array
  setLastMove(x, y)            // highlight last move
  showGameOver(message)        // overlay with result
  clearGameOver()              // remove overlay
  
  // Interaction
  setInteractive(enabled)      // enable/disable click handling
  setPlayerColor(color)        // 1=black, 2=white (for ghost stone)
  onMoveSelect(callback)       // callback(row, col) when player clicks valid intersection
  
  // Sizing
  resize()                     // recalculate dimensions, re-render
}
```

## Related Code Files

### Files to Create
| File | Purpose | Lines (est.) |
|------|---------|-------------|
| `web/js/board-renderer.js` | Canvas rendering + click handling | ~190 |

### Files to Modify
None — this is a standalone module consumed by Phase 4's game-controller.js

## Implementation Steps

### Step 1: Canvas setup and sizing
```js
constructor(canvasElement) {
  this.canvas = canvasElement;
  this.ctx = canvasElement.getContext('2d');
  this.board = null;
  this.lastMove = null;
  this.interactive = false;
  this.playerColor = 0;
  this.moveCallback = null;
  this.gameOverMsg = null;
  this.resize();
  window.addEventListener('resize', () => this.resize());
}

resize() {
  const container = this.canvas.parentElement;
  const size = Math.min(container.clientWidth, container.clientHeight, 600);
  this.canvas.width = size * devicePixelRatio;
  this.canvas.height = size * devicePixelRatio;
  this.canvas.style.width = size + 'px';
  this.canvas.style.height = size + 'px';
  this.ctx.scale(devicePixelRatio, devicePixelRatio);
  this.size = size;
  this.padding = 30;
  this.cellSize = (size - 2 * this.padding) / 14;
  if (this.board) this.render(this.board);
}
```

### Step 2: Grid rendering
- Fill background with wood color (`#DEB887`)
- Draw 15 horizontal + 15 vertical lines in dark brown
- Draw axis labels: columns A-O (top), rows 1-15 (left)
- Draw 5 star points at standard positions: (3,3), (3,11), (7,7), (11,3), (11,11)

### Step 3: Stone rendering
- Iterate `board[row][col]`:
  - If 1 (black): draw filled circle, dark gradient for 3D effect
  - If 2 (white): draw filled circle white with light gray gradient
- Stone radius: `cellSize * 0.43`
- Use radial gradient for visual polish (simple, no perf cost)

### Step 4: Last move highlight
- Draw small red dot (radius 4px) at center of last placed stone
- Visually distinct from stone color

### Step 5: Click handling
```js
this.canvas.addEventListener('click', (e) => {
  if (!this.interactive) return;
  const rect = this.canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const col = Math.round((x - this.padding) / this.cellSize);
  const row = Math.round((y - this.padding) / this.cellSize);
  if (col < 0 || col > 14 || row < 0 || row > 14) return;
  if (this.board && this.board[row][col] !== 0) return;
  if (this.moveCallback) this.moveCallback(row, col);
});
```

### Step 6: Hover ghost stone
- `mousemove` event: calculate nearest intersection, draw semi-transparent stone
- `mouseleave`: clear ghost
- Only show when `interactive === true` and cell is empty
- Implementation: store ghost position, redraw board + ghost on each mousemove (15x15 is fast enough)

### Step 7: Game-over overlay
- Semi-transparent black overlay over canvas
- White text centered: "Black wins!", "White wins!", or "Draw!"
- Shown via `showGameOver(msg)`, cleared on new game

## Todo List
- [ ] Implement `BoardRenderer` constructor with canvas setup
- [ ] Implement `resize()` with high-DPI support
- [ ] Implement grid drawing (lines, labels, star points)
- [ ] Implement stone drawing with gradient
- [ ] Implement last move highlight
- [ ] Implement click-to-select with coordinate conversion
- [ ] Implement hover ghost stone
- [ ] Implement game-over overlay
- [ ] Test: verify rendering at different window sizes
- [ ] Test: verify click coordinates map correctly to grid positions

## Success Criteria
- Board renders correctly at various sizes
- Stones display at correct intersections when given board array
- Click on empty intersection fires callback with correct (row, col)
- Click on occupied intersection is ignored
- Last move visually highlighted
- Game-over overlay displays and clears properly
- No visual artifacts on resize

## Risk Assessment
| Risk | Mitigation |
|------|------------|
| Blurry rendering on Retina/HiDPI | Use `devicePixelRatio` scaling (implemented in resize) |
| Click coord off by one | Unit test coordinate conversion math; visual test with known board state |
| Mousemove perf with full re-render | 15x15 is 225 cells; Canvas handles this in <1ms. No optimization needed. |
| Canvas size 0 on hidden panel | Call `resize()` when game panel becomes visible |
