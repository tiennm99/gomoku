package database

import (
	"fmt"
	"strings"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	"github.com/tiennm99/gomoku/server/pkg/json"
	"github.com/tiennm99/gomoku/server/pkg/model"
	"github.com/tiennm99/gomoku/server/pkg/network"
	"github.com/tiennm99/gomoku/server/pkg/protocol"
)

// Role represents a player's role within a room.
type Role string

const (
	RolePlayer    Role = "player"
	RoleOwner     Role = "owner"
	RoleSpectator Role = "spectator"
)

// Player represents a connected user.
// Fields are kept backward-compatible with legacy state/*.go code;
// phase-06 will slim this down to the new domain spec.
//
// Network I/O is handled via conn + data channel (legacy path).
// The new sendFn / cmdCh fields (phase-05) are left nil until wired.
type Player struct {
	ID     int64  `json:"id"`
	IP     string `json:"ip"`
	Name   string `json:"name"`
	Mode   int    `json:"mode"`
	Type   int    `json:"type"`
	Amount uint   `json:"amount"`
	RoomID int64  `json:"roomId"`
	Role   Role   `json:"role"`

	conn   *network.Conn         // underlying connection
	data   chan *protocol.Packet  // buffered channel for client input (legacy state machine)
	read   bool                   // true when inside a transaction
	state  consts.StateID         // current state ID
	online bool                   // false after disconnect

	// New domain fields (phase-05 wires these):
	// sendFn func(*Response) — set in phase-05, nil until then
	// cmdCh  chan *Request   — set in phase-05, nil until then
}

// --- Network I/O helpers (legacy, used by state/*.go) ---

func (p *Player) Write(bytes []byte) error {
	return p.conn.Write(protocol.Packet{Body: bytes})
}

func (p *Player) IsOnline() bool {
	return p.online
}

// Offline marks the player as disconnected, closes the connection, and
// cleans up room membership. Called when the network read loop exits.
func (p *Player) Offline() {
	p.online = false
	_ = p.conn.Close()
	close(p.data)
	room := legacyGetRoom(p.RoomID)
	if room != nil {
		room.Lock()
		defer room.Unlock()
		legacyBroadcast(room, fmt.Sprintf("%s lost connection! \n", p.Name))
		if room.State == consts.RoomStateWaiting {
			legacyLeaveRoom(room, p)
		}
		legacyRoomCancel(room)
	}
}

// Listening is the main read loop. Reads packets from the connection and
// forwards to data channel when the state machine is accepting input.
func (p *Player) Listening() error {
	for {
		pack, err := p.conn.Read()
		if err != nil {
			return err
		}
		if p.read {
			p.data <- pack
		}
	}
}

// WriteString sends a text message to the client.
func (p *Player) WriteString(data string) error {
	time.Sleep(30 * time.Millisecond)
	return p.conn.Write(protocol.Packet{Body: []byte(data)})
}

func (p *Player) WriteObject(data interface{}) error {
	return p.conn.Write(protocol.Packet{Body: json.Marshal(data)})
}

func (p *Player) WriteError(err error) error {
	if err == consts.ErrorsExist {
		return err
	}
	return p.conn.Write(protocol.Packet{Body: []byte(err.Error() + "\n")})
}

func (p *Player) AskForPacket(timeout ...time.Duration) (*protocol.Packet, error) {
	p.StartTransaction()
	defer p.StopTransaction()
	return p.askForPacket(timeout...)
}

func (p *Player) askForPacket(timeout ...time.Duration) (*protocol.Packet, error) {
	var packet *protocol.Packet
	if len(timeout) > 0 {
		select {
		case packet = <-p.data:
		case <-time.After(timeout[0]):
			return nil, consts.ErrorsTimeout
		}
	} else {
		packet = <-p.data
	}
	if packet == nil {
		return nil, consts.ErrorsChanClosed
	}
	single := strings.ToLower(packet.String())
	if single == "exit" || single == "e" {
		return nil, consts.ErrorsExist
	}
	return packet, nil
}

func (p *Player) AskForInt(timeout ...time.Duration) (int, error) {
	packet, err := p.AskForPacket(timeout...)
	if err != nil {
		return 0, err
	}
	return packet.Int()
}

func (p *Player) AskForInt64(timeout ...time.Duration) (int64, error) {
	packet, err := p.AskForPacket(timeout...)
	if err != nil {
		return 0, err
	}
	return packet.Int64()
}

func (p *Player) AskForString(timeout ...time.Duration) (string, error) {
	packet, err := p.AskForPacket(timeout...)
	if err != nil {
		return "", err
	}
	return packet.String(), nil
}

func (p *Player) AskForStringWithoutTransaction(timeout ...time.Duration) (string, error) {
	packet, err := p.askForPacket(timeout...)
	if err != nil {
		return "", err
	}
	return packet.String(), nil
}

// StartTransaction enables input acceptance and signals the client.
func (p *Player) StartTransaction() {
	p.read = true
	_ = p.WriteString(consts.IsStart)
}

// StopTransaction disables input acceptance and signals the client.
func (p *Player) StopTransaction() {
	p.read = false
	_ = p.WriteString(consts.IsStop)
}

func (p *Player) State(s consts.StateID) { p.state = s }
func (p *Player) GetState() consts.StateID { return p.state }

func (p *Player) Conn(conn *network.Conn) {
	p.conn = conn
	p.data = make(chan *protocol.Packet, 8)
	p.online = true
}

func (p Player) Model() model.Player {
	return model.Player{ID: p.ID, Name: p.Name}
}

func (p Player) String() string {
	return fmt.Sprintf("%s[%d]", p.Name, p.ID)
}
