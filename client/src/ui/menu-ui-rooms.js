/**
 * Menu UI — room list, PVE dialog, and waiting room screens.
 * Split from menu-ui.js to keep each file under 200 lines.
 * @module menu-ui-rooms
 */

import { connectionService } from '../services/connection-service.js';
import { gameState } from '../services/game-state-service.js';

const menuRoot = () => document.getElementById('menu-root');

/**
 * Build and inject a DOM panel into #menu-root.
 * @param {string} html
 */
function showPanel(html) {
  const el = menuRoot();
  if (el) el.innerHTML = html;
}

// -------- Room list --------

/**
 * Show available room list. Each room gets Join + Watch buttons.
 * Join/Watch are wired internally via connectionService (callbacks unused).
 * @param {Array} rooms - array of room summary objects
 * @param {function} _onJoin - unused
 * @param {function} _onWatch - unused
 * @param {function} onBack - called when "Back" is clicked
 */
export function showRoomList(rooms, _onJoin, _onWatch, onBack) {
  const rows = Array.isArray(rooms) ? rooms : [];
  const tableBody = rows.length === 0
    ? '<tr><td colspan="4" class="empty-state">No rooms available</td></tr>'
    : rows.map(r => {
        const id = r.roomId || r.id || '';
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
  if (typeof onBack === 'function') {
    document.getElementById('btn-back').addEventListener('click', onBack);
  }
}

// -------- PVE difficulty dialog --------

/**
 * Show PVE difficulty selection panel.
 * @param {function(number): void} onConfirm - called with difficulty 1/2/3
 * @param {function} onBack - called when "Back" is clicked
 */
export function showPveDifficultyPanel(onConfirm, onBack) {
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
  document.getElementById('btn-easy').addEventListener('click', () => onConfirm(1));
  document.getElementById('btn-medium').addEventListener('click', () => onConfirm(2));
  document.getElementById('btn-hard').addEventListener('click', () => onConfirm(3));
  if (typeof onBack === 'function') {
    document.getElementById('btn-back').addEventListener('click', onBack);
  }
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
 * @param {function|null} onStart - owner only; called after Start Game clicked
 * @param {function|null} onLeave - called after Leave button clicked
 * @returns {{ update: function(number, string): void }}
 */
export function showWaiting(isOwner, ownerNickname, playerCount, onStart, onLeave) {
  showPanel(`
    <div class="menu-panel">
      <h2 class="menu-title">Waiting Room</h2>
      <p class="menu-subtitle">Room ID: <span class="accent" id="wait-room-id"></span></p>
      <p>Owner: <span class="accent" id="wait-owner-name"></span></p>
      <div class="spinner"></div>
      <p id="wait-status-msg" class="menu-subtitle"></p>
      <button id="btn-start-game" class="menu-btn primary" style="display:none">Start Game</button>
      <button id="btn-leave-room" class="menu-btn danger">Leave Room</button>
    </div>
  `);

  // Populate safe text nodes
  const roomIdEl = document.getElementById('wait-room-id');
  const ownerEl = document.getElementById('wait-owner-name');
  if (roomIdEl) roomIdEl.textContent = String(gameState.roomId || '');
  if (ownerEl) ownerEl.textContent = ownerNickname || '';

  const statusEl = document.getElementById('wait-status-msg');
  const startBtn = document.getElementById('btn-start-game');
  const leaveBtn = document.getElementById('btn-leave-room');

  leaveBtn.addEventListener('click', () => {
    connectionService.sendClientExit();
    if (typeof onLeave === 'function') onLeave();
  });

  if (isOwner && startBtn) {
    startBtn.style.display = '';
    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
      connectionService.sendGameStarting();
      if (typeof onStart === 'function') onStart();
    });
  }

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
     * Push a live update (ROOM_JOIN_SUCCESS / CLIENT_EXIT).
     * @param {number} newCount
     * @param {string} [opponentNickname]
     */
    update(newCount, opponentNickname) { syncStatus(newCount, opponentNickname); },
  };
}
