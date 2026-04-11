/**
 * Helpers for interpreting ClientExitResponse.
 *
 * The server broadcasts ClientExitResponse to ALL players in the room when
 * anyone leaves (so peers see "opponent left"), AND uses the same message
 * type as a self-ack from homeState / watchingState. Clients must
 * distinguish self from peer — otherwise a peer's exit forces the client
 * to transition to lobby while the server keeps the client in gameoverState,
 * causing a state desync where subsequent requests log as "unexpected".
 *
 * Rules:
 *   - exitClientId === 0 or missing → self ack (server path that sends a
 *     bare ClientExitResponse; e.g., home.ClientExit, watching.ClientExit,
 *     spectator room-closed eject). Treat as self.
 *   - exitClientId === this client's clientId → self (our own leaveRoom
 *     broadcast reached us through room.Players iteration).
 *   - Otherwise → a peer left; consumer should stay in state and render
 *     a "X left" notification.
 *
 * clientId is passed in explicitly (rather than reading gameState here)
 * to keep this module free of circular imports with game-state-service.
 *
 * @module client-exit-helpers
 */

/**
 * Return true if the incoming ClientExitResponse refers to this client.
 * @param {{ exitClientId?: number }|null|undefined} data
 * @param {number|null} clientId - this client's server-assigned ID
 * @returns {boolean}
 */
export function isSelfExit(data, clientId) {
  if (!data) return true; // defensive: no data → treat as self to avoid ghost state
  const id = data.exitClientId;
  if (id == null || id === 0) return true; // bare ack from server
  return id === clientId;
}
