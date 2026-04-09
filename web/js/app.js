/**
 * Entry point — wires WsClient, StateMachine, BoardRenderer, and GameController.
 * Binds DOM events for connection, navigation, and command input.
 */

(function () {
  const wsClient = new WsClient();
  const canvas = document.getElementById('game-canvas');
  const boardRenderer = new BoardRenderer(canvas);

  const ui = {
    turnIndicator: document.getElementById('turn-indicator'),
    colorLabel: document.getElementById('color-label'),
  };
  const gameController = new GameController(wsClient, boardRenderer, ui);

  const stateMachine = new StateMachine(wsClient, ui);
  stateMachine.setGameController(gameController);

  // Reset game controller when leaving game state
  stateMachine.onStateChange((oldState, newState) => {
    if (oldState === States.GAME && newState !== States.GAME) {
      gameController.reset();
    }
  });

  // --- DOM bindings ---

  const connectBtn = document.getElementById('connect-btn');
  const nameInput = document.getElementById('player-name');
  const statusEl = document.getElementById('status-indicator');
  const joinBtn = document.getElementById('join-btn');
  const newBtn = document.getElementById('new-btn');
  const startBtn = document.getElementById('start-btn');
  const cmdInput = document.getElementById('cmd-input');
  const sendBtn = document.getElementById('send-btn');

  connectBtn.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'Player' + Math.floor(Math.random() * 1000);
    const host = window.location.hostname || '127.0.0.1';
    const port = window.location.port || '9998';
    const wsUrl = 'ws://' + host + ':' + port + '/ws';

    wsClient.connect(wsUrl, { id: 0, name: name, score: 0 });
    connectBtn.disabled = true;
    nameInput.disabled = true;
  });

  wsClient.onOpen(() => {
    statusEl.textContent = 'Connected';
    statusEl.classList.add('connected');
    cmdInput.disabled = false;
    sendBtn.disabled = false;
  });

  wsClient.onClose(() => {
    statusEl.textContent = 'Disconnected';
    statusEl.classList.remove('connected');
    cmdInput.disabled = true;
    sendBtn.disabled = true;
    connectBtn.disabled = false;
    nameInput.disabled = false;
  });

  wsClient.onError(() => {
    statusEl.textContent = 'Error';
    statusEl.classList.remove('connected');
  });

  wsClient.onMessage((data) => {
    // Server may send multiple messages separated by newlines
    const lines = data.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed) stateMachine.handleMessage(trimmed);
    }
  });

  // Navigation buttons
  joinBtn.addEventListener('click', () => wsClient.send('1'));
  newBtn.addEventListener('click', () => wsClient.send('2'));
  startBtn.addEventListener('click', () => wsClient.send('start'));

  // Command input
  function sendCommand() {
    const cmd = cmdInput.value.trim();
    if (!cmd) return;
    wsClient.send(cmd);
    cmdInput.value = '';
  }
  sendBtn.addEventListener('click', sendCommand);
  cmdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendCommand();
  });

  // Allow Enter on name input to connect
  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') connectBtn.click();
  });
})();
