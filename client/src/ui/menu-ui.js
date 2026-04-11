/**
 * Menu UI stubs — phase-10 implements real DOM overlay.
 * All functions are no-ops that log to console so scenes compile without crashing.
 * @module menu-ui
 */

/** Show the nickname entry screen. */
export function showNicknameScreen() {
  console.log('[menu-ui stub] showNicknameScreen()');
}

/** Show the main lobby / options screen. */
export function showLobby() {
  console.log('[menu-ui stub] showLobby()');
}

/**
 * Show list of available rooms.
 * @param {Array} rooms
 * @param {function} onJoin
 * @param {function} onWatch
 */
export function showRoomList(rooms, onJoin, onWatch) {
  console.log('[menu-ui stub] showRoomList()', rooms);
}

/**
 * Show PVE difficulty dialog.
 * @param {function} onConfirm - called with selected difficulty
 */
export function showCreatePveDialog(onConfirm) {
  console.log('[menu-ui stub] showCreatePveDialog()');
}

/**
 * Show waiting room screen.
 * @param {boolean} isOwner
 * @param {string} ownerNickname
 * @param {number} playerCount
 * @param {function} onStart
 * @param {function} onLeave
 */
export function showWaiting(isOwner, ownerNickname, playerCount, onStart, onLeave) {
  console.log('[menu-ui stub] showWaiting()', { isOwner, ownerNickname, playerCount });
}

/** Hide all menu overlay panels. */
export function hideOverlay() {
  console.log('[menu-ui stub] hideOverlay()');
}
