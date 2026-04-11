/**
 * Game UI stubs — phase-10 implements real DOM HUD overlay.
 * All functions are no-ops that log to console so GameScene compiles without crashing.
 * @module game-ui
 */

/** Show the in-game HUD (timer, turn indicator, history panel). */
export function showGameHud() {
  console.log('[game-ui stub] showGameHud()');
}

/**
 * Update the turn indicator in the HUD.
 * @param {string} [currentTurn] - 'BLACK' or 'WHITE'
 */
export function updateTurnIndicator(currentTurn) {
  console.log('[game-ui stub] updateTurnIndicator()', currentTurn);
}

/**
 * Append a move entry to the move history panel.
 * @param {{ row: number, col: number, piece: string, playerNickname: string }} move
 */
export function addMoveToHistory(move) {
  console.log('[game-ui stub] addMoveToHistory()', move);
}

/**
 * Show the game over overlay.
 * @param {{ result: string, winnerNickname?: string }} data
 */
export function showGameOver(data) {
  console.log('[game-ui stub] showGameOver()', data);
}

/**
 * Show a transient toast notification.
 * @param {string} msg
 * @param {'info'|'error'|'warn'} [kind]
 */
export function showToast(msg, kind = 'info') {
  console.log(`[game-ui stub] showToast(${kind}):`, msg);
}

/** Hide the in-game HUD overlay. */
export function hideGameHud() {
  console.log('[game-ui stub] hideGameHud()');
}
