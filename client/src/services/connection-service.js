/**
 * WebSocket connection service.
 * Wraps browser WebSocket with heartbeat, auto-reconnect, and typed protobuf
 * Request/Response encoding on port 1999 via /gomoku endpoint.
 * @module connection-service
 */

import { eventBus } from './event-bus.js';
import { ClientEventCode } from '../config/protocol-constants.js';
import { com } from '../generated/protocol.js';

const { Request, Response } = com.miti99.gomoku.proto;

/** Default server WebSocket URL (overridden by _resolveUrl at runtime) */
const DEFAULT_WS_URL = 'ws://localhost:1999/gomoku';

/**
 * Maps a Response.payload oneof case name (camelCase from pbjs) to a local
 * event bus key (ClientEventCode constant).
 * All 21 response oneof cases from response.proto are mapped here.
 */
const RESPONSE_CASE_TO_CLIENT_CODE = Object.freeze({
  clientConnect: ClientEventCode.CLIENT_CONNECT,
  nicknameSet: ClientEventCode.NICKNAME_SET,
  showOptions: ClientEventCode.SHOW_OPTIONS,
  showRooms: ClientEventCode.SHOW_ROOMS,
  roomCreateSuccess: ClientEventCode.ROOM_CREATE_SUCCESS,
  roomJoinSuccess: ClientEventCode.ROOM_JOIN_SUCCESS,
  roomJoinFailFull: ClientEventCode.ROOM_JOIN_FAIL_FULL,
  roomJoinFailNotFound: ClientEventCode.ROOM_JOIN_FAIL_INEXIST,
  roomPlayFailNotFound: ClientEventCode.ROOM_PLAY_FAIL_INEXIST,
  gameStarting: ClientEventCode.GAME_STARTING,
  gameMoveSuccess: ClientEventCode.GAME_MOVE_SUCCESS,
  gameMoveInvalid: ClientEventCode.GAME_MOVE_INVALID,
  gameMoveOccupied: ClientEventCode.GAME_MOVE_OCCUPIED,
  gameMoveOutOfBounds: ClientEventCode.GAME_MOVE_OUT_OF_BOUNDS,
  gameMoveNotYourTurn: ClientEventCode.GAME_MOVE_NOT_YOUR_TURN,
  gameOver: ClientEventCode.GAME_OVER,
  pveDifficultyNotSupport: ClientEventCode.PVE_DIFFICULTY_NOT_SUPPORT,
  watchGameSuccess: ClientEventCode.WATCH_GAME_SUCCESS,
  clientExit: ClientEventCode.CLIENT_EXIT,
  spectatorCannotAct: ClientEventCode.SPECTATOR_CANNOT_ACT,
});

/** Max reconnect attempts before emitting CONNECTION_LOST and giving up. */
const MAX_RECONNECT_ATTEMPTS = 10;

class ConnectionService {
  constructor() {
    /** @type {WebSocket|null} */
    this._ws = null;
    /** @type {number|null} */
    this._heartbeatTimer = null;
    /** @type {number} ms, doubles on each failure up to 30s cap */
    this._reconnectDelay = 1000;
    /** @type {number} */
    this._reconnectAttempts = 0;
    /** @type {boolean} set true on intentional disconnect to suppress auto-reconnect */
    this._intentionalClose = false;
  }

  /**
   * Open the WebSocket connection. Safe to call multiple times (closes old ws first).
   * @param {string} [url] - override URL; defaults to _resolveUrl()
   */
  connect(url) {
    const wsUrl = url || this._resolveUrl();
    this._intentionalClose = false;

    try {
      this._ws = new WebSocket(wsUrl);
      this._ws.binaryType = 'arraybuffer';
    } catch (e) {
      console.error('[ConnectionService] WebSocket creation failed:', e);
      return;
    }

    this._ws.onopen = () => {
      console.log('[ConnectionService] connected to', wsUrl);
      this._reconnectDelay = 1000;
      this._reconnectAttempts = 0;
      this._startHeartbeat();
      eventBus.emit('ws:connected', null);
    };

    this._ws.onmessage = (event) => this._onMessage(event);

    this._ws.onclose = () => {
      console.log('[ConnectionService] disconnected');
      this._stopHeartbeat();
      eventBus.emit('ws:disconnected', null);
      if (!this._intentionalClose) this._scheduleReconnect(wsUrl);
    };

    this._ws.onerror = (err) => {
      console.error('[ConnectionService] WebSocket error:', err);
    };
  }

  /** Close the connection intentionally — suppresses auto-reconnect. */
  disconnect() {
    this._intentionalClose = true;
    this._stopHeartbeat();
    if (this._ws) this._ws.close();
  }

  // -------- Typed send helpers — one per Request oneof variant --------

  sendHeartbeat() { this._sendRequest({ heartbeat: {} }); }
  sendSetNickname(nickname) { this._sendRequest({ setNickname: { nickname } }); }
  sendSetClientInfo(version) { this._sendRequest({ setClientInfo: { version } }); }
  sendCreateRoom() { this._sendRequest({ createRoom: {} }); }
  sendCreatePveRoom(difficulty) { this._sendRequest({ createPveRoom: { difficulty } }); }
  sendGetRooms() { this._sendRequest({ getRooms: {} }); }
  sendJoinRoom(roomId) { this._sendRequest({ joinRoom: { roomId } }); }
  sendGameMove(row, col) { this._sendRequest({ gameMove: { row, col } }); }
  sendGameReset() { this._sendRequest({ gameReset: {} }); }
  sendWatchGame(roomId) { this._sendRequest({ watchGame: { roomId } }); }
  sendWatchGameExit() { this._sendRequest({ watchGameExit: {} }); }
  sendClientExit() { this._sendRequest({ clientExit: {} }); }

  /**
   * Encode a Request oneof payload into binary protobuf and push via WS.
   * Drops silently (with warning) if the socket is not open.
   * @param {object} oneofPayload - e.g. { gameMove: { row, col } }
   * @private
   */
  _sendRequest(oneofPayload) {
    if (!this._ws || this._ws.readyState !== WebSocket.OPEN) {
      console.warn('[ConnectionService] cannot send — socket not open:', oneofPayload);
      return;
    }
    try {
      const req = Request.create(oneofPayload);
      const bytes = Request.encode(req).finish();
      this._ws.send(bytes);
    } catch (e) {
      console.error('[ConnectionService] Request encode failed:', e, oneofPayload);
    }
  }

  /**
   * Decode incoming binary Response frame and emit via event bus.
   * pbjs exposes `res.payload` as the camelCase oneof field name that is set.
   * @param {MessageEvent} event
   * @private
   */
  _onMessage(event) {
    try {
      const bytes = new Uint8Array(event.data);
      const res = Response.decode(bytes);
      const caseName = res.payload; // e.g. 'clientConnect', 'gameMoveSuccess'
      if (!caseName) return;
      const eventCode = RESPONSE_CASE_TO_CLIENT_CODE[caseName];
      if (!eventCode) {
        console.warn('[ConnectionService] unknown Response oneof case:', caseName);
        return;
      }
      const payloadMsg = res[caseName];
      const payloadObj = payloadMsg && typeof payloadMsg.toJSON === 'function'
        ? payloadMsg.toJSON()
        : payloadMsg;
      eventBus.emit(eventCode, payloadObj);
    } catch (e) {
      console.error('[ConnectionService] message decode error:', e, event.data);
    }
  }

  /** @private */
  _startHeartbeat() {
    this._stopHeartbeat();
    this._heartbeatTimer = setInterval(() => this.sendHeartbeat(), 50000);
  }

  /** @private */
  _stopHeartbeat() {
    if (this._heartbeatTimer) {
      clearInterval(this._heartbeatTimer);
      this._heartbeatTimer = null;
    }
  }

  /**
   * Schedule reconnect with exponential backoff (max 30 s, max 10 attempts).
   * @param {string} url
   * @private
   */
  _scheduleReconnect(url) {
    if (this._reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
      console.error('[ConnectionService] max reconnect attempts reached — giving up');
      eventBus.emit('CONNECTION_LOST', null);
      return;
    }
    this._reconnectAttempts += 1;
    console.log(`[ConnectionService] reconnecting in ${this._reconnectDelay}ms (attempt ${this._reconnectAttempts})...`);
    setTimeout(() => this.connect(url), this._reconnectDelay);
    this._reconnectDelay = Math.min(this._reconnectDelay * 2, 30000);
  }

  /**
   * Derive WebSocket URL from current page hostname at runtime.
   * Supports wss:// when served over HTTPS. Override via ?ws= query param.
   * @returns {string}
   * @private
   */
  _resolveUrl() {
    if (typeof window === 'undefined') return DEFAULT_WS_URL;
    const params = new URLSearchParams(window.location.search);
    if (params.has('ws')) return params.get('ws');
    const host = window.location.hostname;
    const proto = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${proto}//${host}:1999/gomoku`;
  }
}

export const connectionService = new ConnectionService();
