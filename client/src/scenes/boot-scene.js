/**
 * BootScene — initial scene that connects to the game server and transitions
 * to MenuScene once the server sends the first NICKNAME_SET prompt.
 * @module boot-scene
 */

import Phaser from 'phaser';
import { connectionService } from '../services/connection-service.js';
import { eventBus } from '../services/event-bus.js';
import { ClientEventCode } from '../config/protocol-constants.js';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create() {
    this.cameras.main.setBackgroundColor('#1a1a2e');

    this.add.text(400, 370, 'Gomoku', {
      fontSize: '52px',
      fontFamily: 'sans-serif',
      color: '#e94560',
    }).setOrigin(0.5);

    this.add.text(400, 440, 'Connecting to server…', {
      fontSize: '18px',
      fontFamily: 'sans-serif',
      color: '#888888',
    }).setOrigin(0.5);

    // Open WebSocket — URL resolved from window.location.hostname at runtime
    connectionService.connect();

    // Server sends NICKNAME_SET as the first prompt after client connects.
    // Unsubscribe immediately so later NICKNAME_SET events (e.g. validation
    // errors returned while already in MenuScene) don't re-trigger this handler.
    const onNicknamePrompt = () => {
      eventBus.off(ClientEventCode.NICKNAME_SET, onNicknamePrompt);
      this.scene.start('MenuScene');
    };
    eventBus.on(ClientEventCode.NICKNAME_SET, onNicknamePrompt);
  }
}
