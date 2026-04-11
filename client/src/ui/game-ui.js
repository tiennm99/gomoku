/**
 * Game UI — DOM overlay for player info, move history, game over, and toasts.
 * Rendered on top of the Phaser canvas during gameplay via #game-hud-root.
 * @module game-ui
 */

import { connectionService } from '../services/connection-service.js';
import { eventBus } from '../services/event-bus.js';
import { gameState } from '../services/game-state-service.js';
import { ClientEventCode } from '../config/protocol-constants.js';

const hudRoot = () => document.getElementById('game-hud-root');
const toastRoot = () => document.getElementById('toast-container');

/**
 * Show the game HUD (player panels + move history + leave button).
 * Clears any previous HUD content before rendering.
 */
export function showGameHud() {
  const el = hudRoot();
  if (!el) return;
  el.innerHTML = `
    <div class="hud-top">
      <div class="player-panel" id="panel-black">
        <span class="stone-dot black"></span>
        <span class="player-name" id="hud-black-name">${escText(gameState.blackPlayerNickname)}</span>
        <span class="turn-dot" id="turn-black"></span>
      </div>
      <div class="hud-vs">VS</div>
      <div class="player-panel" id="panel-white">
        <span class="stone-dot white"></span>
        <span class="player-name" id="hud-white-name">${escText(gameState.whitePlayerNickname)}</span>
        <span class="turn-dot" id="turn-white"></span>
      </div>
    </div>
    <div class="hud-side" id="move-history">
      <div class="hud-side-title">Moves</div>
      <div class="move-list" id="move-list"></div>
    </div>
    <div class="hud-bottom">
      <button id="btn-exit-game" class="menu-btn danger small">Exit</button>
    </div>
  `;
  el.style.display = 'block';
  document.getElementById('btn-exit-game').addEventListener('click', () => {
    connectionService.sendClientExit();
  });
  updateTurnIndicator(gameState.currentTurn);
}

/**
 * Update the turn indicator dots in the HUD.
 * @param {string} [currentTurn] - 'BLACK' or 'WHITE'
 */
export function updateTurnIndicator(currentTurn) {
  const blackDot = document.getElementById('turn-black');
  const whiteDot = document.getElementById('turn-white');
  if (!blackDot || !whiteDot) return;
  const turn = currentTurn || gameState.currentTurn;
  blackDot.classList.toggle('active', turn === 'BLACK');
  whiteDot.classList.toggle('active', turn === 'WHITE');
}

/**
 * Append a move entry to the scrollable history panel.
 * @param {{ row: number, col: number, piece: string, playerNickname: string }} data
 */
export function addMoveToHistory(data) {
  const list = document.getElementById('move-list');
  if (!list) return;
  const n = gameState.moves.length;
  const col = String.fromCharCode(65 + data.col);
  const row = data.row + 1;
  const div = document.createElement('div');
  div.className = `move-entry ${data.piece.toLowerCase()}`;
  div.textContent = `#${n} ${data.piece === 'BLACK' ? '\u25cf' : '\u25cb'} ${col}${row}`;
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
}

/**
 * Show the game over overlay appended to #game-hud-root.
 * Result is determined by game result + client's piece color (not nickname comparison).
 * @param {{ result: string, winnerNickname?: string }} data
 */
export function showGameOver(data) {
  let resultText, resultClass;
  if (data.result === 'DRAW') {
    resultText = 'Draw!';
    resultClass = 'draw';
  } else if (gameState.isSpectating) {
    resultText = 'Game Over';
    resultClass = 'draw';
  } else {
    const iWon = (data.result === 'BLACK_WIN' && gameState.isBlack)
      || (data.result === 'WHITE_WIN' && !gameState.isBlack);
    resultText = iWon ? 'You Win!' : 'You Lose!';
    resultClass = iWon ? 'win' : 'lose';
  }

  const el = hudRoot();
  if (!el) return;
  const modal = document.createElement('div');
  modal.className = 'game-over-overlay';
  modal.id = 'game-over-modal';
  modal.innerHTML = `
    <div class="game-over-card">
      <div class="result-text ${resultClass}">${resultText}</div>
      ${data.winnerNickname ? `<div class="winner-name">Winner: ${escText(data.winnerNickname)}</div>` : ''}
      <div class="game-over-buttons">
        <button id="btn-rematch" class="menu-btn primary">Play Again</button>
        <button id="btn-exit-lobby" class="menu-btn secondary">Leave</button>
      </div>
    </div>
  `;
  el.appendChild(modal);

  document.getElementById('btn-rematch').addEventListener('click', () => {
    connectionService.sendGameReset();
  });
  document.getElementById('btn-exit-lobby').addEventListener('click', () => {
    connectionService.sendClientExit();
  });

  // Auto-dismiss modal when a new game starts (rematch accepted)
  eventBus.once(ClientEventCode.GAME_STARTING, () => {
    const existing = document.getElementById('game-over-modal');
    if (existing) existing.remove();
  });
}

/**
 * Show a transient toast notification. Auto-removes after 2 s.
 * @param {string} message
 * @param {'info'|'error'|'warn'|'success'} [kind='info']
 */
export function showToast(message, kind = 'info') {
  const container = toastRoot();
  if (!container) return;
  const toast = document.createElement('div');
  // Normalize 'warn' → 'info' style since CSS only has toast-info/error/success
  const cssKind = kind === 'warn' ? 'info' : kind;
  toast.className = `toast toast-${cssKind}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

/** Clear the game HUD root. */
export function hideGameHud() {
  const el = hudRoot();
  if (!el) return;
  el.innerHTML = '';
  el.style.display = 'none';
}

// -------- Error toast subscriptions --------
eventBus.on(ClientEventCode.ROOM_JOIN_FAIL_FULL, () => showToast('Room is full', 'error'));
eventBus.on(ClientEventCode.ROOM_JOIN_FAIL_INEXIST, () => showToast('Room not found', 'error'));
eventBus.on(ClientEventCode.GAME_MOVE_NOT_YOUR_TURN, () => showToast('Not your turn', 'error'));
eventBus.on(ClientEventCode.GAME_MOVE_OCCUPIED, () => showToast('Position occupied', 'error'));
eventBus.on(ClientEventCode.GAME_MOVE_OUT_OF_BOUNDS, () => showToast('Out of bounds', 'error'));
eventBus.on(ClientEventCode.GAME_MOVE_INVALID, () => showToast('Invalid move', 'error'));
eventBus.on(ClientEventCode.PVE_DIFFICULTY_NOT_SUPPORT, () => showToast('Difficulty not supported', 'error'));
eventBus.on(ClientEventCode.SPECTATOR_CANNOT_ACT, () => showToast('Spectators cannot move', 'warn'));
eventBus.on('ws:disconnected', () => showToast('Connection lost. Reconnecting\u2026', 'error'));

// -------- Helpers --------

/**
 * Escape a string for safe DOM textContent insertion (XSS protection).
 * @param {string} str
 * @returns {string}
 */
function escText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
