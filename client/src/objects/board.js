/**
 * Board — stub Phaser object for phase-09.
 * Phase-10 implements real grid rendering, pixel↔grid conversion, and hover geometry.
 * @module board
 */

/**
 * Stub Board class. Instantiating it registers the container in the scene
 * but draws nothing. All coordinate helpers return safe default values so
 * GameScene code paths don't throw on null.
 */
export class Board {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} pixelSize - canvas dimension in pixels (e.g. 800)
   */
  constructor(scene, pixelSize) {
    this.scene = scene;
    this.pixelSize = pixelSize;
    this.size = 15; // board grid dimension
    console.log('[board stub] Board created', { pixelSize });
  }

  /** @returns {number} pixel size of each grid cell */
  getCellSize() {
    return this.pixelSize / (this.size + 1);
  }

  /**
   * Convert column index to canvas X coordinate.
   * @param {number} col
   * @returns {number}
   */
  gridX(col) {
    return this.getCellSize() * (col + 1);
  }

  /**
   * Convert row index to canvas Y coordinate.
   * @param {number} row
   * @returns {number}
   */
  gridY(row) {
    return this.getCellSize() * (row + 1);
  }

  /**
   * Convert canvas pixel coordinates to grid row/col.
   * Returns null when the pointer is outside the board boundary.
   * Phase-10 replaces with precise hit-testing.
   * @param {number} x
   * @param {number} y
   * @returns {{ row: number, col: number }|null}
   */
  pixelToGrid(x, y) {
    const cell = this.getCellSize();
    const col = Math.round(x / cell) - 1;
    const row = Math.round(y / cell) - 1;
    if (col < 0 || col >= this.size || row < 0 || row >= this.size) return null;
    return { row, col };
  }

  /**
   * Place a piece marker at (row, col). No-op in stub — phase-10 renders.
   * @param {number} row
   * @param {number} col
   * @param {string} piece - 'BLACK' or 'WHITE'
   */
  place(row, col, piece) {
    console.log('[board stub] place()', { row, col, piece });
  }
}
