import Phaser from 'phaser';

/**
 * BootScene — minimal stub for phase-08 bootstrap.
 * Phase-09 will flesh this out: connect to WebSocket, then start MenuScene.
 */
export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create() {
    this.add
      .text(400, 400, 'Gomoku — loading…', { fontSize: '32px', color: '#ffffff' })
      .setOrigin(0.5);
    // phase-09 will call connectionService.connect() here and transition to MenuScene
  }
}
