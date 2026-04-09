/**
 * Canvas-based renderer for a 15x15 gomoku board.
 * Handles grid drawing, stone rendering, click-to-place, hover ghost, and game-over overlay.
 */

const BOARD_SIZE = 15;
const STAR_POINTS = [[3,3],[3,11],[7,7],[11,3],[11,11]];

class BoardRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.board = null;
    this.lastMove = null;
    this.interactive = false;
    this.playerColor = 0;
    this.moveCallback = null;
    this.gameOverMsg = null;
    this.ghostPos = null;

    this.canvas.addEventListener('click', (e) => this._onClick(e));
    this.canvas.addEventListener('mousemove', (e) => this._onMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => { this.ghostPos = null; this._draw(); });

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const container = this.canvas.parentElement;
    if (!container) return;
    const size = Math.min(container.clientWidth, container.clientHeight, 600);
    if (size <= 0) return;
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = size * dpr;
    this.canvas.height = size * dpr;
    this.canvas.style.width = size + 'px';
    this.canvas.style.height = size + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.size = size;
    this.padding = 28;
    this.cellSize = (size - 2 * this.padding) / (BOARD_SIZE - 1);
    this._draw();
  }

  render(boardState) {
    this.board = boardState;
    this._draw();
  }

  setLastMove(row, col) {
    this.lastMove = [row, col];
    this._draw();
  }

  setInteractive(enabled) { this.interactive = enabled; }
  setPlayerColor(color) { this.playerColor = color; }
  onMoveSelect(cb) { this.moveCallback = cb; }

  showGameOver(msg) { this.gameOverMsg = msg; this._draw(); }
  clearGameOver() { this.gameOverMsg = null; this._draw(); }

  // --- Private drawing methods ---

  _draw() {
    if (!this.size) return;
    const ctx = this.ctx;
    const s = this.size;

    // Background
    ctx.fillStyle = '#DEB887';
    ctx.fillRect(0, 0, s, s);

    this._drawGrid();
    this._drawStarPoints();
    this._drawLabels();
    if (this.board) this._drawStones();
    if (this.lastMove) this._drawLastMove();
    if (this.ghostPos && this.interactive) this._drawGhost();
    if (this.gameOverMsg) this._drawOverlay();
  }

  _drawGrid() {
    const ctx = this.ctx;
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 1;
    for (let i = 0; i < BOARD_SIZE; i++) {
      const p = this.padding + i * this.cellSize;
      // Horizontal
      ctx.beginPath();
      ctx.moveTo(this.padding, p);
      ctx.lineTo(this.padding + (BOARD_SIZE - 1) * this.cellSize, p);
      ctx.stroke();
      // Vertical
      ctx.beginPath();
      ctx.moveTo(p, this.padding);
      ctx.lineTo(p, this.padding + (BOARD_SIZE - 1) * this.cellSize);
      ctx.stroke();
    }
  }

  _drawStarPoints() {
    const ctx = this.ctx;
    ctx.fillStyle = '#5D4037';
    for (const [r, c] of STAR_POINTS) {
      const x = this.padding + c * this.cellSize;
      const y = this.padding + r * this.cellSize;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  _drawLabels() {
    const ctx = this.ctx;
    ctx.fillStyle = '#5D4037';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < BOARD_SIZE; i++) {
      const x = this.padding + i * this.cellSize;
      // Column labels (A-O) at top
      ctx.fillText(String.fromCharCode(65 + i), x, 10);
      // Row labels (1-15) at left
      ctx.fillText(String(i + 1), 10, this.padding + i * this.cellSize);
    }
  }

  _drawStones() {
    const radius = this.cellSize * 0.43;
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        const color = this.board[r][c];
        if (color === 0) continue;
        const x = this.padding + c * this.cellSize;
        const y = this.padding + r * this.cellSize;
        this._drawStone(x, y, radius, color);
      }
    }
  }

  _drawStone(x, y, radius, color) {
    const ctx = this.ctx;
    const grad = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, radius * 0.1, x, y, radius);
    if (color === 1) {
      grad.addColorStop(0, '#555');
      grad.addColorStop(1, '#111');
    } else {
      grad.addColorStop(0, '#fff');
      grad.addColorStop(1, '#ccc');
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color === 1 ? '#000' : '#999';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  _drawLastMove() {
    const [r, c] = this.lastMove;
    const x = this.padding + c * this.cellSize;
    const y = this.padding + r * this.cellSize;
    this.ctx.fillStyle = '#e94560';
    this.ctx.beginPath();
    this.ctx.arc(x, y, 4, 0, Math.PI * 2);
    this.ctx.fill();
  }

  _drawGhost() {
    const [r, c] = this.ghostPos;
    if (this.board && this.board[r][c] !== 0) return;
    const x = this.padding + c * this.cellSize;
    const y = this.padding + r * this.cellSize;
    const radius = this.cellSize * 0.43;
    this.ctx.globalAlpha = 0.35;
    this._drawStone(x, y, radius, this.playerColor || 1);
    this.ctx.globalAlpha = 1.0;
  }

  _drawOverlay() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, this.size, this.size);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.gameOverMsg, this.size / 2, this.size / 2);
  }

  // --- Event handlers ---

  _pixelToGrid(px, py) {
    const col = Math.round((px - this.padding) / this.cellSize);
    const row = Math.round((py - this.padding) / this.cellSize);
    return [
      Math.max(0, Math.min(BOARD_SIZE - 1, row)),
      Math.max(0, Math.min(BOARD_SIZE - 1, col)),
    ];
  }

  _onClick(e) {
    if (!this.interactive || !this.board) return;
    const rect = this.canvas.getBoundingClientRect();
    const [row, col] = this._pixelToGrid(e.clientX - rect.left, e.clientY - rect.top);
    if (this.board[row][col] !== 0) return;
    if (this.moveCallback) this.moveCallback(row, col);
  }

  _onMouseMove(e) {
    if (!this.interactive || !this.board) return;
    const rect = this.canvas.getBoundingClientRect();
    const [row, col] = this._pixelToGrid(e.clientX - rect.left, e.clientY - rect.top);
    this.ghostPos = [row, col];
    this._draw();
  }
}
