/**
 * MenuScene — shows DOM overlay menus (nickname, lobby, room list).
 * Phaser canvas provides a decorative background; all interaction is via DOM
 * overlay managed by menu-ui.js (phase-10 implements real UI).
 * @module menu-scene
 */

import Phaser from 'phaser';
import { eventBus } from '../services/event-bus.js';
import { ClientEventCode } from '../config/protocol-constants.js';
import {
  showNicknameScreen,
  showLobby,
  showRoomList,
  showWaiting,
  hideOverlay,
} from '../ui/menu-ui.js';
import { showToast } from '../ui/game-ui.js';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
    // Bind handlers so the same reference is used for on() and off()
    this._onGameStarting = this._onGameStarting.bind(this);
    this._onNicknameSet = this._onNicknameSet.bind(this);
    this._onShowOptions = this._onShowOptions.bind(this);
    this._onShowRooms = this._onShowRooms.bind(this);
    this._onRoomCreateSuccess = this._onRoomCreateSuccess.bind(this);
    this._onRoomJoinSuccess = this._onRoomJoinSuccess.bind(this);
    this._onRoomJoinFailFull = this._onRoomJoinFailFull.bind(this);
    this._onRoomJoinFailNotFound = this._onRoomJoinFailNotFound.bind(this);
    /** @type {{ update: function(number, string): void }|null} live waiting-room handle */
    this._waitingHandle = null;
  }

  create() {
    // Subtle decorative background
    this.cameras.main.setBackgroundColor('#1a1a2e');
    const g = this.add.graphics();
    g.lineStyle(1, 0x16213e, 0.4);
    for (let i = 0; i < 800; i += 40) {
      g.lineBetween(i, 0, i, 800);
      g.lineBetween(0, i, 800, i);
    }

    // Show nickname entry — server has already sent NICKNAME_SET prompt
    showNicknameScreen();

    // Register event listeners
    eventBus.on(ClientEventCode.NICKNAME_SET, this._onNicknameSet);
    eventBus.on(ClientEventCode.SHOW_OPTIONS, this._onShowOptions);
    eventBus.on(ClientEventCode.SHOW_ROOMS, this._onShowRooms);
    eventBus.on(ClientEventCode.ROOM_CREATE_SUCCESS, this._onRoomCreateSuccess);
    eventBus.on(ClientEventCode.ROOM_JOIN_SUCCESS, this._onRoomJoinSuccess);
    eventBus.on(ClientEventCode.ROOM_JOIN_FAIL_FULL, this._onRoomJoinFailFull);
    eventBus.on(ClientEventCode.ROOM_JOIN_FAIL_INEXIST, this._onRoomJoinFailNotFound);
    eventBus.on(ClientEventCode.GAME_STARTING, this._onGameStarting);
  }

  /**
   * Server responded to nickname submission.
   * Only show lobby when nickname was accepted (invalidLength === 0).
   * Rejected nicknames are handled by menu-ui.js which shows the error toast
   * and re-renders the nickname screen directly.
   * @private
   */
  _onNicknameSet(data) {
    const invalidLength = data && typeof data === 'object' ? (data.invalidLength || 0) : 0;
    if (invalidLength === 0) showLobby();
  }

  /** Server sent main menu options — show lobby UI. @private */
  _onShowOptions(_data) {
    showLobby();
  }

  /**
   * Server sent available room list. menu-ui.js handles join/watch internally.
   * @param {{ rooms: Array }} data
   * @private
   */
  _onShowRooms(data) {
    const rooms = (data && data.rooms) ? data.rooms : [];
    showRoomList(rooms, null, null);
  }

  /**
   * Room created — show waiting room as owner.
   * Store the handle so ROOM_JOIN_SUCCESS can push live player-count updates.
   * @param {{ roomId: number, ownerNickname: string }} data
   * @private
   */
  _onRoomCreateSuccess(data) {
    const ownerNickname = (data && data.ownerNickname) ? data.ownerNickname : '';
    this._waitingHandle = showWaiting(true, ownerNickname, 1, null, null);
  }

  /**
   * Another player joined the owner's room — update the waiting room live.
   * If this client IS the joiner, show the joiner waiting view.
   * @param {{ roomId: number, ownerNickname: string, playerCount: number, joinerNickname: string }} data
   * @private
   */
  _onRoomJoinSuccess(data) {
    const ownerNickname = (data && data.ownerNickname) ? data.ownerNickname : '';
    const count = (data && data.playerCount) ? data.playerCount : 2;
    const joinerNickname = (data && data.joinerNickname) ? data.joinerNickname : '';

    if (this._waitingHandle) {
      // This client is the owner — a second player just joined, update the view
      this._waitingHandle.update(count, joinerNickname);
    } else {
      // This client is the joiner — show passive waiting screen
      this._waitingHandle = showWaiting(false, ownerNickname, count, null, null);
    }
  }

  /** Room is full — notify user. @private */
  _onRoomJoinFailFull(_data) {
    showToast('Room is full — please try another.', 'error');
  }

  /** Room not found — notify user. @private */
  _onRoomJoinFailNotFound(_data) {
    showToast('Room not found.', 'error');
  }

  /**
   * Game starting — hide menu overlay and transition to GameScene.
   * @param {object} data - GameStartingResponse payload
   * @private
   */
  _onGameStarting(data) {
    this._waitingHandle = null;
    hideOverlay();
    this.scene.start('GameScene', { gameStarting: data });
  }

  shutdown() {
    eventBus.off(ClientEventCode.NICKNAME_SET, this._onNicknameSet);
    eventBus.off(ClientEventCode.SHOW_OPTIONS, this._onShowOptions);
    eventBus.off(ClientEventCode.SHOW_ROOMS, this._onShowRooms);
    eventBus.off(ClientEventCode.ROOM_CREATE_SUCCESS, this._onRoomCreateSuccess);
    eventBus.off(ClientEventCode.ROOM_JOIN_SUCCESS, this._onRoomJoinSuccess);
    eventBus.off(ClientEventCode.ROOM_JOIN_FAIL_FULL, this._onRoomJoinFailFull);
    eventBus.off(ClientEventCode.ROOM_JOIN_FAIL_INEXIST, this._onRoomJoinFailNotFound);
    eventBus.off(ClientEventCode.GAME_STARTING, this._onGameStarting);
  }
}
