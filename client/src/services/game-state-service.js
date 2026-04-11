/**
 * Game state service — stores all client-side game state.
 * Pure data container with reset methods, no game logic, no DOM access.
 * Subscribes to ClientEventCode events from event-bus to update state.
 * @module game-state-service
 */

import { eventBus } from './event-bus.js';
import { ClientEventCode } from '../config/protocol-constants.js';
import { isSelfExit } from './client-exit-helpers.js';

/**
 * @typedef {Object} MoveEntry
 * @property {number} row
 * @property {number} col
 * @property {string} piece - 'BLACK' or 'WHITE'
 * @property {string} playerNickname
 * @property {number} playerId
 */

class GameStateService {
  constructor() {
    /** @type {number|null} server-assigned client ID received on CLIENT_CONNECT */
    this.clientId = null;
    /** @type {string} local player nickname after NICKNAME_SET */
    this.nickname = '';
    /** @type {number|null} current room ID */
    this.roomId = null;
    /** @type {boolean} true if this client is playing as black */
    this.isBlack = false;
    /** @type {boolean} true if this client is a spectator */
    this.isSpectating = false;
    /** @type {string} whose turn it is: 'BLACK' or 'WHITE' */
    this.currentTurn = 'BLACK';
    /** @type {MoveEntry[]} ordered move history */
    this.moves = [];
    /** @type {number} board dimension */
    this.boardSize = 15;
    /** @type {string} */
    this.blackPlayerNickname = '';
    /** @type {string} */
    this.whitePlayerNickname = '';
    /** @type {number} */
    this.blackPlayerId = -1;
    /** @type {number} */
    this.whitePlayerId = -1;

    this._registerHandlers();
  }

  /** @returns {boolean} true when it is this client's turn to move */
  isMyTurn() {
    if (this.isSpectating) return false;
    const myPiece = this.isBlack ? 'BLACK' : 'WHITE';
    return this.currentTurn === myPiece;
  }

  /** @returns {string} nickname of whoever's turn it is */
  currentPlayerNickname() {
    return this.currentTurn === 'BLACK'
      ? this.blackPlayerNickname
      : this.whitePlayerNickname;
  }

  /** Reset room and game state (on exit). */
  reset() {
    this.roomId = null;
    this.isSpectating = false;
    this.resetBoard();
  }

  /** Reset board state (on new game / rematch). */
  resetBoard() {
    this.moves = [];
    this.currentTurn = 'BLACK';
    this.isBlack = false;
    this.blackPlayerNickname = '';
    this.whitePlayerNickname = '';
    this.blackPlayerId = -1;
    this.whitePlayerId = -1;
  }

  /**
   * Check if a board position is occupied.
   * @param {number} row
   * @param {number} col
   * @returns {boolean}
   */
  isOccupied(row, col) {
    return this.moves.some(m => m.row === row && m.col === col);
  }

  /** @private */
  _registerHandlers() {
    eventBus.on(ClientEventCode.CLIENT_CONNECT, (data) => {
      this.clientId = (data && typeof data === 'object') ? data.clientId : parseInt(data, 10);
    });

    eventBus.on(ClientEventCode.NICKNAME_SET, (data) => {
      if (data && data.nickname) this.nickname = data.nickname;
    });

    eventBus.on(ClientEventCode.ROOM_CREATE_SUCCESS, (data) => {
      // Proto field is `id`, not `roomId`, for RoomCreateSuccessResponse.
      if (data && data.id != null) this.roomId = data.id;
    });

    eventBus.on(ClientEventCode.ROOM_JOIN_SUCCESS, (data) => {
      if (data && data.roomId != null) this.roomId = data.roomId;
    });

    eventBus.on(ClientEventCode.WATCH_GAME_SUCCESS, (data) => {
      // Renamed from caro's GAME_WATCH_SUCCESSFUL to match proto oneof `watchGameSuccess`
      this.isSpectating = true;
      if (data && data.roomId != null) this.roomId = data.roomId;
    });

    eventBus.on(ClientEventCode.GAME_STARTING, (data) => {
      this.resetBoard();
      // A fresh game-starting signal always means this client is a player,
      // not a spectator. Clear stale flag in case a previous watch session
      // left it set (e.g., user transitioned out of watching via a path
      // that didn't emit CLIENT_EXIT).
      this.isSpectating = false;
      this.roomId = data.roomId;
      this.blackPlayerId = data.blackPlayerId;
      this.blackPlayerNickname = data.blackPlayerNickname;
      this.whitePlayerId = data.whitePlayerId;
      this.whitePlayerNickname = data.whitePlayerNickname;
      this.boardSize = data.boardSize || 15;
      this.isBlack = (this.clientId === data.blackPlayerId);
      this.currentTurn = 'BLACK';
    });

    eventBus.on(ClientEventCode.GAME_MOVE_SUCCESS, (data) => {
      this.moves.push(data);
      this.currentTurn = (data.piece === 'BLACK') ? 'WHITE' : 'BLACK';
    });

    eventBus.on(ClientEventCode.SPECTATOR_CANNOT_ACT, () => {
      // Gomoku-specific: spectator tried a player-only action — no state change needed
      console.warn('[GameState] spectator cannot perform this action');
    });

    // Only reset when WE exited, not when a peer leaves a shared room.
    // Otherwise a peer's exit would blow away our own roomId and board,
    // desyncing us from the server's gameoverState.
    eventBus.on(ClientEventCode.CLIENT_EXIT, (data) => {
      if (isSelfExit(data, this.clientId)) this.reset();
    });
  }
}

export const gameState = new GameStateService();
