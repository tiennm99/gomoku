/**
 * Game controller bridging WebSocket client, state machine, and board renderer.
 * Translates server game messages into board updates and player clicks into commands.
 */

class GameController {
  constructor(wsClient, boardRenderer, ui) {
    this.ws = wsClient;
    this.board = boardRenderer;
    this.ui = ui; // { turnIndicator, colorLabel }
    this.myColor = 0;
    this.myTurn = false;

    this.board.onMoveSelect((row, col) => this.onBoardClick(row, col));
  }

  handleGameMessage(msg) {
    switch (msg.type) {
      case 'info':
        this.onInfo(msg);
        break;
      case 'board':
        this.onBoard(msg);
        break;
      case 'turn':
        this.onTurn(msg);
        break;
      case 'gameover':
        this.onGameOver(msg);
        break;
    }
  }

  onInfo(msg) {
    this.myColor = msg.color;
    this.ui.colorLabel.textContent = 'You are: ' + (msg.color === 1 ? 'Black' : 'White');
  }

  onBoard(msg) {
    this.board.render(msg.board);
    if (msg.last && msg.last.length === 2) {
      this.board.setLastMove(msg.last[0], msg.last[1]);
    }
  }

  onTurn(msg) {
    if (msg.color === this.myColor) {
      this.myTurn = true;
      this.board.setInteractive(true);
      this.board.setPlayerColor(this.myColor);
      this.ui.turnIndicator.textContent = 'Your turn';
      this.ui.turnIndicator.style.color = '#4fc3f7';
    }
  }

  onBoardClick(row, col) {
    if (!this.myTurn) return;
    this.ws.send(row + ',' + col);
    this.myTurn = false;
    this.board.setInteractive(false);
    this.ui.turnIndicator.textContent = 'Waiting...';
    this.ui.turnIndicator.style.color = '#a0a0c0';
  }

  onGameOver(msg) {
    this.board.setInteractive(false);
    this.myTurn = false;
    const text = msg.draw ? 'Draw!' : (msg.winner + ' wins!');
    this.board.showGameOver(text);
    this.ui.turnIndicator.textContent = 'Game Over';
    this.ui.turnIndicator.style.color = '#e94560';
  }

  reset() {
    this.myColor = 0;
    this.myTurn = false;
    this.board.setInteractive(false);
    this.board.clearGameOver();
    this.ui.turnIndicator.textContent = '';
    this.ui.colorLabel.textContent = '';
  }
}
