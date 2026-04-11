/**
 * GameScene — renders the Gomoku board, handles pointer input and move events.
 * Uses Board for grid geometry, Stone for piece objects, DOM overlay for HUD.
 * Board and Stone are stubs in phase-09 — phase-10 replaces with real Phaser objects.
 * @module game-scene
 */

import Phaser from 'phaser';
import { Board } from '../objects/board.js';
import { Stone, createLastMoveMarker } from '../objects/stone.js';
import { eventBus } from '../services/event-bus.js';
import { gameState } from '../services/game-state-service.js';
import { connectionService } from '../services/connection-service.js';
import { ClientEventCode } from '../config/protocol-constants.js';
import {
  showGameHud,
  updateTurnIndicator,
  addMoveToHistory,
  showGameOver,
  showToast,
  hideGameHud,
} from '../ui/game-ui.js';
import { showLobby } from '../ui/menu-ui.js';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    /** @type {Board|null} */
    this.board = null;
    /** @type {Stone[]} */
    this.stones = [];
    /** @type {{ setDepth: function, destroy: function }|null} */
    this.lastMarker = null;
    /** @type {Phaser.GameObjects.Graphics|null} */
    this.hoverGraphic = null;
    /** @type {{ row: number, col: number }|null} */
    this.hoverPos = null;
    /** @type {AudioContext|null} */
    this._audioCtx = null;

    // Bind for stable on/off references
    this._onMoveSuccess = this._onMoveSuccess.bind(this);
    this._onGameOver = this._onGameOver.bind(this);
    this._onClientExit = this._onClientExit.bind(this);
    this._onGameStarting = this._onGameStarting.bind(this);
    this._onMoveInvalid = this._onMoveInvalid.bind(this);
    this._onMoveOccupied = this._onMoveOccupied.bind(this);
    this._onMoveOutOfBounds = this._onMoveOutOfBounds.bind(this);
    this._onMoveNotYourTurn = this._onMoveNotYourTurn.bind(this);
    this._onSpectatorCannotAct = this._onSpectatorCannotAct.bind(this);
  }

  create() {
    this.cameras.main.setBackgroundColor('#1a1a2e');

    this.board = new Board(this, 800);
    this.stones = [];
    this.lastMarker = null;

    // Hover preview graphic (phase-10 will fill this with real visuals)
    this.hoverGraphic = this.add.graphics();
    this.hoverGraphic.setDepth(5);

    // Pointer handlers
    this.input.on('pointerdown', this._handleClick, this);
    this.input.on('pointermove', this._handleHover, this);

    // Lazily create AudioContext on first user gesture (browser autoplay policy)
    this.input.once('pointerdown', () => {
      this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    });

    // Show HUD
    showGameHud();

    // Replay any moves already in state (spectate / rejoin scenario)
    for (const move of gameState.moves) {
      this._placeStone(move.row, move.col, move.piece, false);
    }

    // Register event handlers
    eventBus.on(ClientEventCode.GAME_MOVE_SUCCESS, this._onMoveSuccess);
    eventBus.on(ClientEventCode.GAME_MOVE_INVALID, this._onMoveInvalid);
    eventBus.on(ClientEventCode.GAME_MOVE_OCCUPIED, this._onMoveOccupied);
    eventBus.on(ClientEventCode.GAME_MOVE_OUT_OF_BOUNDS, this._onMoveOutOfBounds);
    eventBus.on(ClientEventCode.GAME_MOVE_NOT_YOUR_TURN, this._onMoveNotYourTurn);
    eventBus.on(ClientEventCode.SPECTATOR_CANNOT_ACT, this._onSpectatorCannotAct);
    eventBus.on(ClientEventCode.GAME_OVER, this._onGameOver);
    eventBus.on(ClientEventCode.CLIENT_EXIT, this._onClientExit);
    eventBus.on(ClientEventCode.GAME_STARTING, this._onGameStarting);
  }

  /**
   * Place a stone at (row, col). Updates last-move marker.
   * @param {number} row
   * @param {number} col
   * @param {string} piece - 'BLACK' or 'WHITE'
   * @param {boolean} [animate]
   * @private
   */
  _placeStone(row, col, piece, animate = true) {
    const x = this.board.gridX(col);
    const y = this.board.gridY(row);
    const stone = new Stone(this, x, y, piece, this.board.getCellSize(), animate);
    stone.setDepth(10);
    this.stones.push(stone);

    if (this.lastMarker) this.lastMarker.destroy();
    this.lastMarker = createLastMoveMarker(this, x, y);
    this.lastMarker.setDepth(15);
  }

  /** @private */
  _playStoneSound() {
    if (!this._audioCtx) return;
    try {
      const osc = this._audioCtx.createOscillator();
      const gain = this._audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this._audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.value = 800;
      gain.gain.setValueAtTime(0.12, this._audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this._audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(this._audioCtx.currentTime + 0.08);
    } catch (_) { /* ignore — suspended AudioContext or missing browser support */ }
  }

  /**
   * Handle board click — compute grid position and send move if it's this client's turn.
   * @param {Phaser.Input.Pointer} pointer
   * @private
   */
  _handleClick(pointer) {
    if (gameState.isSpectating || !gameState.isMyTurn()) return;
    const pos = this.board.pixelToGrid(pointer.x, pointer.y);
    if (!pos) return;
    if (gameState.isOccupied(pos.row, pos.col)) return;
    connectionService.sendGameMove(pos.row, pos.col);
  }

  /**
   * Handle pointer hover — show ghost stone preview on this client's turn.
   * Avoids redundant redraws when the pointer stays within the same cell.
   * @param {Phaser.Input.Pointer} pointer
   * @private
   */
  _handleHover(pointer) {
    if (gameState.isSpectating || !gameState.isMyTurn()) {
      if (this.hoverPos) { this.hoverGraphic.clear(); this.hoverPos = null; }
      return;
    }
    const pos = this.board.pixelToGrid(pointer.x, pointer.y);
    if (!pos || gameState.isOccupied(pos.row, pos.col)) {
      if (this.hoverPos) { this.hoverGraphic.clear(); this.hoverPos = null; }
      return;
    }
    // Same cell — keep existing preview
    if (this.hoverPos && this.hoverPos.row === pos.row && this.hoverPos.col === pos.col) return;
    this.hoverGraphic.clear();
    this.hoverPos = pos;
    const x = this.board.gridX(pos.col);
    const y = this.board.gridY(pos.row);
    const color = gameState.isBlack ? 0x222222 : 0xf5f5f5;
    this.hoverGraphic.fillStyle(color, 0.35);
    this.hoverGraphic.fillCircle(x, y, this.board.getCellSize() * 0.43);
  }

  /**
   * Server confirmed move — place stone and update HUD.
   * @param {{ row: number, col: number, piece: string, playerNickname: string }} data
   * @private
   */
  _onMoveSuccess(data) {
    this._placeStone(data.row, data.col, data.piece, true);
    this._playStoneSound();
    addMoveToHistory(data);
    updateTurnIndicator(gameState.currentTurn);
    if (this.hoverGraphic) this.hoverGraphic.clear();
    this.hoverPos = null;
  }

  /** @private */ _onMoveInvalid(_d) { showToast('Invalid move.', 'error'); }
  /** @private */ _onMoveOccupied(_d) { showToast('Cell is already occupied.', 'error'); }
  /** @private */ _onMoveOutOfBounds(_d) { showToast('Move is out of bounds.', 'error'); }
  /** @private */ _onMoveNotYourTurn(_d) { showToast("It's not your turn.", 'warn'); }
  /** @private */ _onSpectatorCannotAct(_d) { showToast('Spectators cannot move.', 'warn'); }

  /**
   * Game over — show result overlay; play win/lose audio sequence.
   * @param {{ result: string, winnerNickname?: string }} data
   * @private
   */
  _onGameOver(data) {
    showGameOver(data);
    if (!this._audioCtx) return;
    const isWin = !gameState.isSpectating && (
      (data.result === 'BLACK_WIN' && gameState.isBlack)
      || (data.result === 'WHITE_WIN' && !gameState.isBlack)
    );
    const freqs = isWin ? [523, 659, 784] : [400, 300];
    freqs.forEach((f, i) => {
      setTimeout(() => {
        try {
          const osc = this._audioCtx.createOscillator();
          const gain = this._audioCtx.createGain();
          osc.connect(gain);
          gain.connect(this._audioCtx.destination);
          osc.type = isWin ? 'sine' : 'triangle';
          osc.frequency.value = f;
          gain.gain.setValueAtTime(0.12, this._audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this._audioCtx.currentTime + 0.2);
          osc.start();
          osc.stop(this._audioCtx.currentTime + 0.2);
        } catch (_) { /* ignore */ }
      }, i * 150);
    });
  }

  /**
   * Opponent disconnected or client exited — return to menu lobby.
   * @private
   */
  _onClientExit() {
    hideGameHud();
    this._cleanup();
    this.scene.start('MenuScene');
    showLobby();
  }

  /**
   * New game starting while already in GameScene (rematch).
   * Clear board and re-show HUD.
   * @private
   */
  _onGameStarting() {
    this.stones.forEach(s => s.destroy());
    this.stones = [];
    if (this.lastMarker) { this.lastMarker.destroy(); this.lastMarker = null; }
    if (this.hoverGraphic) this.hoverGraphic.clear();
    this.hoverPos = null;
    showGameHud();
  }

  /** Unsubscribe all event bus listeners. @private */
  _cleanup() {
    eventBus.off(ClientEventCode.GAME_MOVE_SUCCESS, this._onMoveSuccess);
    eventBus.off(ClientEventCode.GAME_MOVE_INVALID, this._onMoveInvalid);
    eventBus.off(ClientEventCode.GAME_MOVE_OCCUPIED, this._onMoveOccupied);
    eventBus.off(ClientEventCode.GAME_MOVE_OUT_OF_BOUNDS, this._onMoveOutOfBounds);
    eventBus.off(ClientEventCode.GAME_MOVE_NOT_YOUR_TURN, this._onMoveNotYourTurn);
    eventBus.off(ClientEventCode.SPECTATOR_CANNOT_ACT, this._onSpectatorCannotAct);
    eventBus.off(ClientEventCode.GAME_OVER, this._onGameOver);
    eventBus.off(ClientEventCode.CLIENT_EXIT, this._onClientExit);
    eventBus.off(ClientEventCode.GAME_STARTING, this._onGameStarting);
  }

  shutdown() {
    this._cleanup();
  }
}
