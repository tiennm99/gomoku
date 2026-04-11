/**
 * Menu UI — DOM overlay for nickname, lobby, PVP/PVE menus, room list, waiting room.
 * Targets #menu-root inside #ui-overlay. All user strings use textContent (XSS safe).
 * Heavy screens (room list, PVE dialog, waiting room) live in menu-ui-rooms.js.
 * @module menu-ui
 */

import { connectionService } from '../services/connection-service.js';
import { gameState } from '../services/game-state-service.js';
import { ClientEventCode } from '../config/protocol-constants.js';
import { showToast } from './game-ui.js';
import { eventBus } from '../services/event-bus.js';
import { showRoomList, showPveDifficultyPanel, showWaiting } from './menu-ui-rooms.js';

// Re-export showRoomList and showWaiting so menu-scene.js imports from one place
export { showRoomList, showWaiting };

const menuRoot = () => document.getElementById('menu-root');

/** Inject a panel HTML string into #menu-root. */
function showPanel(html) {
  const el = menuRoot();
  if (el) el.innerHTML = html;
}

/** Hide all menu overlay panels. */
export function hideOverlay() {
  const el = menuRoot();
  if (el) el.innerHTML = '';
}

// -------- Nickname screen --------

/** Show nickname entry screen. Server enforces max 10 chars. */
export function showNicknameScreen() {
  showPanel(`
    <div class="menu-panel">
      <h1 class="menu-title">Gomoku</h1>
      <p class="menu-subtitle">Five in a row wins</p>
      <label for="input-nickname" class="sr-only">Nickname</label>
      <input type="text" id="input-nickname" class="menu-input"
        placeholder="Enter nickname (max 10)\u2026" maxlength="10" autocomplete="off" />
      <button id="btn-play" class="menu-btn primary">Play</button>
    </div>
  `);
  const input = document.getElementById('input-nickname');
  const btn = document.getElementById('btn-play');
  const submit = () => {
    const name = input.value.trim();
    if (!name || name.length > 10) return;
    gameState.nickname = name;
    connectionService.sendSetNickname(name);
  };
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  input.focus();
}

// -------- Lobby --------

/** Show lobby with PVP and PVE options. */
export function showLobby() {
  showPanel(`
    <div class="menu-panel">
      <h2 class="menu-title">Lobby</h2>
      <p class="menu-subtitle">Welcome, <span class="accent" id="lobby-nickname"></span></p>
      <button id="btn-pvp" class="menu-btn primary">Player vs Player</button>
      <button id="btn-pve" class="menu-btn primary">Player vs AI</button>
    </div>
  `);
  document.getElementById('lobby-nickname').textContent = gameState.nickname;
  document.getElementById('btn-pvp').addEventListener('click', _showPvpMenu);
  document.getElementById('btn-pve').addEventListener('click', _showPveMenu);
}

/** @private */
function _showPvpMenu() {
  showPanel(`
    <div class="menu-panel">
      <h2 class="menu-title">Player vs Player</h2>
      <button id="btn-create" class="menu-btn primary">Create Room</button>
      <button id="btn-rooms" class="menu-btn secondary">Join Room</button>
      <button id="btn-back" class="menu-btn ghost">\u2190 Back</button>
    </div>
  `);
  document.getElementById('btn-create').addEventListener('click', () => connectionService.sendCreateRoom());
  document.getElementById('btn-rooms').addEventListener('click', () => connectionService.sendGetRooms());
  document.getElementById('btn-back').addEventListener('click', showLobby);
}

/** @private */
function _showPveMenu() {
  showPveDifficultyPanel(
    (difficulty) => connectionService.sendCreatePveRoom(difficulty),
    showLobby,
  );
}

/**
 * Show PVE difficulty dialog — exported stub matching phase-09 stub interface.
 * @param {function(number): void} onConfirm - called with difficulty 1/2/3
 */
export function showCreatePveDialog(onConfirm) {
  showPveDifficultyPanel(onConfirm, showLobby);
}

// -------- Server event wiring --------

// Nickname rejected by server — re-show screen with error toast
eventBus.on(ClientEventCode.NICKNAME_SET, (data) => {
  const invalidLength = data && typeof data === 'object' ? (data.invalidLength || 0) : 0;
  if (invalidLength > 0) {
    showToast(`Nickname must be 1\u201310 characters (got ${invalidLength})`, 'error');
    gameState.nickname = '';
    showNicknameScreen();
  }
});

// Return to lobby when client exits or is kicked
eventBus.on(ClientEventCode.CLIENT_EXIT, showLobby);
