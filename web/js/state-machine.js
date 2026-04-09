/**
 * State machine for navigating server states.
 * Detects current state from server messages and routes UI panels.
 */

const States = {
  CONNECT: 'connect',
  HOME: 'home',
  CREATE: 'create',
  JOIN: 'join',
  WAITING: 'waiting',
  GAME: 'game',
};

class StateMachine {
  constructor(wsClient, ui) {
    this.ws = wsClient;
    this.ui = ui;
    this.state = States.CONNECT;
    this.gameController = null;
    this._onStateChange = null;
  }

  setGameController(controller) {
    this.gameController = controller;
  }

  onStateChange(cb) {
    this._onStateChange = cb;
  }

  handleMessage(data) {
    // Try parsing as JSON game event
    try {
      const parsed = JSON.parse(data);
      if (parsed && parsed.type) {
        if (this.gameController) {
          this.gameController.handleGameMessage(parsed);
        }
        if (parsed.type === 'board' || parsed.type === 'turn' || parsed.type === 'info') {
          this._setState(States.GAME);
        }
        return;
      }
    } catch (e) {
      // Not JSON, continue with text detection
    }

    // Log the message
    this._log(data);

    // Detect state from text patterns
    if (data.includes('1.Join') || data.includes('1.join')) {
      this._setState(States.HOME);
    } else if (data.includes('Please select game type') || data.includes('please select game type')) {
      this._setState(States.CREATE);
      this._buildGameTypeList(data);
    } else if (data.includes('Create room successful') || data.includes('create room successful')) {
      this._setState(States.WAITING);
    } else if (data.includes('has joined room')) {
      this._setState(States.WAITING);
    } else if (data.includes('Room list') || data.includes('room list')) {
      this._setState(States.JOIN);
    }
  }

  _setState(newState) {
    if (this.state === newState) return;
    const old = this.state;
    this.state = newState;
    this._showPanel(newState);
    if (this._onStateChange) this._onStateChange(old, newState);
  }

  _showPanel(state) {
    // Hide all panels
    const panels = ['connect-panel', 'home-panel', 'create-panel', 'waiting-panel', 'game-panel'];
    panels.forEach(id => document.getElementById(id).classList.add('hidden'));

    // Show the target panel
    const map = {
      [States.CONNECT]: 'connect-panel',
      [States.HOME]: 'home-panel',
      [States.CREATE]: 'create-panel',
      [States.JOIN]: 'home-panel',
      [States.WAITING]: 'waiting-panel',
      [States.GAME]: 'game-panel',
    };
    const panelId = map[state];
    if (panelId) {
      document.getElementById(panelId).classList.remove('hidden');
    }

    // Resize board when entering game
    if (state === States.GAME && this.gameController && this.gameController.board) {
      setTimeout(() => this.gameController.board.resize(), 50);
    }
  }

  _buildGameTypeList(data) {
    const container = document.getElementById('game-type-list');
    container.innerHTML = '';
    // Parse game types from server message, format: "N.TypeName"
    const lines = data.split('\n');
    for (const line of lines) {
      const match = line.match(/^(\d+)\.\s*(.+)/);
      if (match) {
        const btn = document.createElement('button');
        btn.className = 'game-type-btn';
        btn.textContent = match[2].trim();
        btn.addEventListener('click', () => this.ws.send(match[1]));
        container.appendChild(btn);
      }
    }
  }

  _log(text) {
    const logPanel = document.getElementById('log-panel');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    // Strip leading ">>" broadcast prefix
    const cleaned = text.replace(/^>>\s*/, '');
    entry.textContent = cleaned;

    // Style system messages
    if (text.startsWith('>>')) entry.classList.add('system');
    if (text.toLowerCase().includes('error') || text.toLowerCase().includes('invalid')) {
      entry.classList.add('error');
    }

    logPanel.appendChild(entry);
    logPanel.scrollTop = logPanel.scrollHeight;
  }
}
