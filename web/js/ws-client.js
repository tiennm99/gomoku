/**
 * WebSocket client for communicating with the game server.
 * Handles connection, auth, message encoding/decoding.
 *
 * Protocol: server uses gorilla/websocket with Packet{Body []byte} marshaled as JSON.
 * Wire format: {"data":"<base64-encoded-string>"}
 * We must base64-encode outgoing strings and base64-decode incoming data.
 */

const IS_START = 'INTERACTIVE_SIGNAL_START';
const IS_STOP = 'INTERACTIVE_SIGNAL_STOP';

class WsClient {
  constructor() {
    this.ws = null;
    this._onMessage = null;
    this._onOpen = null;
    this._onClose = null;
    this._onError = null;
    this._inputEnabled = false;
  }

  connect(url, authInfo) {
    this.ws = new WebSocket(url);
    this.ws.onopen = () => {
      // Send auth info as first message
      const authJson = JSON.stringify(authInfo);
      this._sendRaw(authJson);
      if (this._onOpen) this._onOpen();
    };
    this.ws.onmessage = (event) => {
      const decoded = this._decode(event.data);
      if (decoded === null) return;

      // Handle transaction markers
      if (decoded === IS_START) {
        this._inputEnabled = true;
        return;
      }
      if (decoded === IS_STOP) {
        this._inputEnabled = false;
        return;
      }
      if (this._onMessage) this._onMessage(decoded);
    };
    this.ws.onclose = () => {
      if (this._onClose) this._onClose();
    };
    this.ws.onerror = (err) => {
      if (this._onError) this._onError(err);
    };
  }

  send(message) {
    this._sendRaw(message);
  }

  isInputEnabled() {
    return this._inputEnabled;
  }

  _sendRaw(str) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    // Encode string to base64 and wrap in Packet JSON
    const encoded = btoa(unescape(encodeURIComponent(str)));
    this.ws.send(JSON.stringify({ data: encoded }));
  }

  _decode(raw) {
    try {
      const packet = JSON.parse(raw);
      if (packet && packet.data) {
        // Decode base64 to string
        return decodeURIComponent(escape(atob(packet.data)));
      }
    } catch (e) {
      // If not JSON, treat as raw string
      return typeof raw === 'string' ? raw : null;
    }
    return null;
  }

  onMessage(cb) { this._onMessage = cb; }
  onOpen(cb) { this._onOpen = cb; }
  onClose(cb) { this._onClose = cb; }
  onError(cb) { this._onError = cb; }

  disconnect() {
    if (this.ws) this.ws.close();
  }
}
