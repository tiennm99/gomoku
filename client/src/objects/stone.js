/**
 * Stone — stub Phaser game object for phase-09.
 * Phase-10 implements real circle rendering with gradient and animation.
 * @module stone
 */

/**
 * Stub Stone class. Tracks position and piece color but renders nothing.
 * GameScene calls destroy() on rematch — no-op here.
 */
export class Stone {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x - canvas X position
   * @param {number} y - canvas Y position
   * @param {string} piece - 'BLACK' or 'WHITE'
   * @param {number} [cellSize] - grid cell size in pixels
   * @param {boolean} [animate] - whether to animate placement
   */
  constructor(scene, x, y, piece, cellSize, animate = true) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.piece = piece;
    this.cellSize = cellSize;
    console.log('[stone stub] Stone created', { x, y, piece });
  }

  /** Set render depth (no-op in stub — depth has no effect without a display object). */
  setDepth(_depth) { return this; }

  /** Remove from scene. No-op in stub. */
  destroy() {
    console.log('[stone stub] Stone destroyed', { x: this.x, y: this.y });
  }
}

/**
 * Create a last-move marker graphic at the given canvas position.
 * Returns a minimal stub object with destroy() so GameScene lifecycle works.
 * Phase-10 replaces with a visible dot/ring graphic.
 * @param {Phaser.Scene} _scene
 * @param {number} x
 * @param {number} y
 * @returns {{ setDepth: function, destroy: function }}
 */
export function createLastMoveMarker(_scene, x, y) {
  console.log('[stone stub] createLastMoveMarker()', { x, y });
  return {
    setDepth(_d) { return this; },
    destroy() {},
  };
}
