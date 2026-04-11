/**
 * Menu UI — DOM overlay for nickname, lobby, PVP/PVE menus, room list, waiting room.
 * Targets #menu-root inside #ui-overlay. All strings use textContent (XSS safe).
 * @module menu-ui
 */

import { connectionService } from '../services/connection-service.js';
import { gameState } from '../services/game-state-service.js';
import { ClientEventCode } from '../config/protocol-constants.js';
import { showToast } from './game-ui.js';
import { eventBus } from '../services/event-bus.js';

const menuRoot = () => document.getElementById('menu-root');

/** Clear #menu-root and optionally set display. */
function clearRoot() {
  const el = menuRoot();
  if (el) el.innerHTML = '';
}

/**
 * Build and inject a DOM panel into #menu-root.
 * @param {string} html - panel inner HTML (only UI strings — user data via textContent)
 */
function showPanel(html) {
  const el = menuRoot();
  if (!el) return;
  el.innerHTML = html;
}

/** Hide all menu overlay panels. */
export function hideOverlay() {
  clearRoot();
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

/** Show lobby (main menu) with PVP and PVE options. */
export function showLobby() {
  showPanel(`
    <div class="menu-panel">
      <h2 class="menu-title">Lobby</h2>
      <p class="menu-subtitle">Welcome, <span class="accent" id="lobby-nickname"></span></p>
      <button id="btn-pvp" class="menu-btn primary">Player vs Player</button>
      <button id="btn-pve" class="menu-btn primary">Player vs AI</button>
    </div>
  `);
  // Use textContent for user-supplied nickname — XSS safe
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
  document.getElementById('btn-create').addEventListener('click', () => {
    connectionService.sendCreateRoom();
  });
  document.getElementById('btn-rooms').addEventListener('click', () => {
    connectionService.sendGetRooms();
  });
  document.getElementById('btn-back').addEventListener('click', showLobby);
}

/** @private */
function _showPveMenu() {
  showPanel(`
    <div class="menu-panel">
      <h2 class="menu-title">Player vs AI</h2>
      <p class="menu-subtitle">Select difficulty</p>
      <button id="btn-easy" class="menu-btn primary">Easy</button>
      <button id="btn-medium" class="menu-btn primary">Medium</button>
      <button id="btn-hard" class="menu-btn primary">Hard</button>
      <button id="btn-back" class="menu-btn ghost">\u2190 Back</button>
    </div>
  `);
  document.getElementById('btn-easy').addEventListener('click', () => connectionService.sendCreatePveRoom(1));
  document.getElementById('btn-medium').addEventListener('click', () => connectionService.sendCreatePveRoom(2));
  document.getElementById('btn-hard').addEventListener('click', () => connectionService.sendCreatePveRoom(3));
  document.getElementById('btn-back').addEventListener('click', showLobby);
}

// -------- Room list --------

/**
 * Show available room list. Each room gets Join + Watch buttons.
 * @param {Array} rooms - array of room summary objects
 * @param {function} _onJoin - unused (wired via connectionService internally)
 * @param {function} _onWatch - unused (wired via connectionService internally)
 */
export function showRoomList(rooms, _onJoin, _onWatch) {
  const rows = Array.isArray(rooms) ? rooms : [];
  const tableBody = rows.length === 0
    ? '<tr><td colspan="4" class="empty-state">No rooms available</td></tr>'
    : rows.map(r => {
        const id = r.roomId || r.id || '';
        const owner = r.roomOwner || r.ownerNickname || '';
        const count = r.roomClientCount != null ? r.roomClientCount : (r.playerCount || 0);
        return `
          <tr>
            <td>${id}</td>
            <td class="room-owner-cell" data-owner="${id}"></td>
            <td>${count}/2</td>
            <td>
              <button class="menu-btn small primary" data-join="${id}">Join</button>
              <button class="menu-btn small secondary" data-watch="${id}">Watch</button>
            </td>
          </tr>`;
      }).join('');

  showPanel(`
    <div class="menu-panel wide">
      <h2 class="menu-title">Available Rooms</h2>
      <table class="room-table">
        <thead><tr><th>ID</th><th>Owner</th><th>Players</th><th>Actions</th></tr></thead>
        <tbody>${tableBody}</tbody>
      </table>
      <div class="menu-row">
        <button id="btn-refresh" class="menu-btn secondary">\u21bb Refresh</button>
        <button id="btn-back" class="menu-btn ghost">\u2190 Back</button>
      </div>
    </div>
  `);

  // Set owner names via textContent (XSS safe)
  rows.forEach(r => {
    const id = r.roomId || r.id || '';
    const owner = r.roomOwner || r.ownerNickname || '';
    const cell = menuRoot().querySelector(`[data-owner="${id}"]`);
    if (cell) cell.textContent = owner;
  });

  menuRoot().querySelectorAll('[data-join]').forEach(btn => {
    btn.addEventListener('click', () => connectionService.sendJoinRoom(parseInt(btn.dataset.join, 10)));
  });
  menuRoot().querySelectorAll('[data-watch]').forEach(btn => {
    btn.addEventListener('click', () => connectionService.sendWatchGame(parseInt(btn.dataset.watch, 10)));
  });
  document.getElementById('btn-refresh').addEventListener('click', () => connectionService.sendGetRooms());
  document.getElementById('btn-back').addEventListener('click', _showPvpMenu);
}

// -------- PVE dialog --------

/**
 * Show PVE difficulty dialog.
 * @param {function(number): void} onConfirm - called with difficulty 1/2/3
 */
export function showCreatePveDialog(onConfirm) {
  _showPveMenu();
  // Override easy/med/hard to use provided callback instead of sending directly
  ['btn-easy', 'btn-medium', 'btn-hard'].forEach((id, i) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    // Clone to strip previous listener, then re-attach
    const fresh = btn.cloneNode(true);
    btn.replaceWith(fresh);
    fresh.addEventListener('click', () => onConfirm(i + 1));
  });
}

// -------- Waiting room (role-aware) --------

/**
 * Show waiting room with owner/joiner split.
 * Owner sees "Start Game" button (enabled only when playerCount === 2).
 * Joiner sees passive wait message — no button.
 *
 * Returns an `update(newPlayerCount, opponentNickname)` function for live updates.
 *
 * @param {boolean} isOwner
 * @param {string} ownerNickname
 * @param {number} playerCount - initial count (1 for owner, 2 for joiner)
 * @param {function|null} onStart - owner only; called when Start Game clicked
 * @param {function} onLeave - called when Leave button clicked
 * @returns {{ update: function(number, string): void }}
 */
export function showWaiting(isOwner, ownerNickname, playerCount, onStart, onLeave) {
  showPanel(`
    <div class="menu-panel">
      <h2 class="menu-title">Waiting Room</h2>
      <p class="menu-subtitle">Room ID: <span class="accent" id="wait-room-id"></span></p>
      <p>Owner: <span class="accent" id="wait-owner-name"></span></p>
      <div class="spinner" id="wait-spinner"></div>
      <p id="wait-status-msg" class="menu-subtitle"></p>
      <button id="btn-start-game" class="menu-btn primary" style="display:none">Start Game</button>
      <button id="btn-leave-room" class="menu-btn danger">Leave Room</button>
    </div>
  `);

  // Populate static text via textContent
  const roomIdEl = document.getElementById('wait-room-id');
  const ownerEl = document.getElementById('wait-owner-name');
  if (roomIdEl) roomIdEl.textContent = String(gameState.roomId || '');
  if (ownerEl) ownerEl.textContent = ownerNickname || '';

  const statusEl = document.getElementById('wait-status-msg');
  const startBtn = document.getElementById('btn-start-game');
  const leaveBtn = document.getElementById('btn-leave-room');

  // Leave button
  leaveBtn.addEventListener('click', () => {
    connectionService.sendClientExit();
    if (typeof onLeave === 'function') onLeave();
  });

  // Start button (owner only)
  if (isOwner && startBtn) {
    startBtn.style.display = '';
    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
      connectionService.sendGameStarting();
      if (typeof onStart === 'function') onStart();
    });
  }

  /** Sync UI to the current playerCount. @param {number} count @param {string} [opponentName] */
  function syncStatus(count, opponentName) {
    if (isOwner) {
      if (count >= 2) {
        if (statusEl) {
          statusEl.textContent = opponentName
            ? `Opponent joined: ${opponentName}`
            : 'Opponent joined!';
        }
        if (startBtn) startBtn.disabled = false;
      } else {
        if (statusEl) statusEl.textContent = 'Waiting for opponent\u2026';
        if (startBtn) startBtn.disabled = true;
      }
    } else {
      if (statusEl) {
        statusEl.textContent = `Waiting for ${ownerNickname || 'owner'} to start the game\u2026`;
      }
    }
  }

  syncStatus(playerCount);

  return {
    /**
     * Push a live player-count update (from ROOM_JOIN_SUCCESS / CLIENT_EXIT).
     * @param {number} newCount
     * @param {string} [opponentNickname]
     */
    update(newCount, opponentNickname) {
      syncStatus(newCount, opponentNickname);
    },
  };
}

// -------- Server event wiring --------

// Nickname rejected — re-show nickname screen with error
eventBus.on(ClientEventCode.NICKNAME_SET, (data) => {
  const invalidLength = data && typeof data === 'object' ? (data.invalidLength || 0) : 0;
  if (invalidLength > 0) {
    showToast(`Nickname must be 1\u201310 characters (got ${invalidLength})`, 'error');
    gameState.nickname = '';
    showNicknameScreen();
  }
});

// Return to lobby on disconnect/kick
eventBus.on(ClientEventCode.CLIENT_EXIT, showLobby);
