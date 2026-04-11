/**
 * Client-side event bus keys. These are purely local constants used by
 * event-bus consumers. The wire format carries typed protobuf oneofs.
 *
 * connection-service (phase-09) maps each Response oneof case to one of these
 * codes before re-emitting on the event bus.
 *
 * Ported verbatim from caro client with the following adjustments for gomoku:
 * - GAME_WATCH_SUCCESSFUL renamed to WATCH_GAME_SUCCESS (matches proto oneof
 *   `watch_game_success` field name convention)
 * - CLIENT_KICK removed — no corresponding oneof case in response.proto
 * - SPECTATOR_CANNOT_ACT added — proto oneof `spectator_cannot_act` (field 21)
 *
 * @module protocol-constants
 */

/** @enum {string} Event codes emitted by connection-service onto the event bus */
export const ClientEventCode = Object.freeze({
  CLIENT_CONNECT: 'CLIENT_CONNECT',
  NICKNAME_SET: 'NICKNAME_SET',
  SHOW_OPTIONS: 'SHOW_OPTIONS',
  SHOW_ROOMS: 'SHOW_ROOMS',
  ROOM_CREATE_SUCCESS: 'ROOM_CREATE_SUCCESS',
  ROOM_JOIN_SUCCESS: 'ROOM_JOIN_SUCCESS',
  ROOM_JOIN_FAIL_FULL: 'ROOM_JOIN_FAIL_FULL',
  ROOM_JOIN_FAIL_INEXIST: 'ROOM_JOIN_FAIL_INEXIST',
  ROOM_PLAY_FAIL_INEXIST: 'ROOM_PLAY_FAIL_INEXIST',
  GAME_STARTING: 'GAME_STARTING',
  GAME_READY: 'GAME_READY',
  GAME_MOVE_SUCCESS: 'GAME_MOVE_SUCCESS',
  GAME_MOVE_INVALID: 'GAME_MOVE_INVALID',
  GAME_MOVE_OCCUPIED: 'GAME_MOVE_OCCUPIED',
  GAME_MOVE_OUT_OF_BOUNDS: 'GAME_MOVE_OUT_OF_BOUNDS',
  GAME_MOVE_NOT_YOUR_TURN: 'GAME_MOVE_NOT_YOUR_TURN',
  GAME_OVER: 'GAME_OVER',
  PVE_DIFFICULTY_NOT_SUPPORT: 'PVE_DIFFICULTY_NOT_SUPPORT',
  WATCH_GAME_SUCCESS: 'WATCH_GAME_SUCCESS',
  CLIENT_EXIT: 'CLIENT_EXIT',
  // Gomoku-specific: sent when a spectator attempts a player-only action
  SPECTATOR_CANNOT_ACT: 'SPECTATOR_CANNOT_ACT',
});
