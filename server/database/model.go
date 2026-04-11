package database

import (
	"fmt"
	"strings"
	"sync"
	"time"

	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/pkg/model"
	"github.com/tiennm99/gomoku/server/pkg/network"
	"github.com/tiennm99/gomoku/server/pkg/protocol"
	"github.com/tiennm99/gomoku/server/pkg/json"
	"github.com/tiennm99/gomoku/server/consts"
)

// Role represents a player's role within a room.
type Role string

const (
	RolePlayer    Role = "player"
	RoleOwner     Role = "owner"
	RoleSpectator Role = "spectator"
)

// Player represents a connected user. Public fields are serializable state;
// private fields manage the network connection and state machine lifecycle.
//
// The `data` channel receives packets from the client when `read` is true
// (between StartTransaction/StopTransaction). The state machine goroutine
// reads from this channel via AskFor* methods.
type Player struct {
	ID     int64  `json:"id"`
	IP     string `json:"ip"`
	Name   string `json:"name"`
	Mode   int    `json:"mode"`
	Type   int    `json:"type"`
	Amount uint   `json:"amount"`
	RoomID int64  `json:"roomId"`
	Role   Role   `json:"role"`

	conn   *network.Conn          // underlying network connection
	data   chan *protocol.Packet   // buffered channel for client input
	read   bool                    // true when accepting input (inside a transaction)
	state  consts.StateID          // current state machine state
	online bool                    // false after disconnect
}

func (p *Player) Write(bytes []byte) error {
	return p.conn.Write(protocol.Packet{
		Body: bytes,
	})
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
	room := getRoom(p.RoomID)
	if room != nil {
		room.Lock()
		defer room.Unlock()
		broadcast(room, fmt.Sprintf("%s lost connection! \n", p.Name))
		if room.State == consts.RoomStateWaiting {
			leaveRoom(room, p)
		}
		roomCancel(room)
	}
}

// Listening is the main read loop. It reads packets from the network connection
// and forwards them to the data channel when the state machine is accepting input.
// Blocks until the connection is closed or errors.
func (p *Player) Listening() error {
	loopCount := 0
	for {
		loopCount++
		if loopCount%1000 == 0 {
			log.Infof("[Player.Listening] Player %d loop count: %d, online: %v\n", p.ID, loopCount, p.online)
		}
		pack, err := p.conn.Read()
		if err != nil {
			log.Error(err)
			return err
		}
		if p.read {
			p.data <- pack
		}
	}
}

// WriteString sends a text message to the client. The 30ms sleep prevents
// message flooding when the server sends multiple messages in rapid succession.
func (p *Player) WriteString(data string) error {
	time.Sleep(30 * time.Millisecond)
	return p.conn.Write(protocol.Packet{
		Body: []byte(data),
	})
}

func (p *Player) WriteObject(data interface{}) error {
	return p.conn.Write(protocol.Packet{
		Body: json.Marshal(data),
	})
}

func (p *Player) WriteError(err error) error {
	if err == consts.ErrorsExist {
		return err
	}
	return p.conn.Write(protocol.Packet{
		Body: []byte(err.Error() + "\n"),
	})
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

// StartTransaction enables input acceptance and sends the INTERACTIVE_SIGNAL_START
// marker to the client. The web client uses this to know when to enable the input field.
func (p *Player) StartTransaction() {
	p.read = true
	_ = p.WriteString(consts.IsStart)
}

// StopTransaction disables input acceptance and sends INTERACTIVE_SIGNAL_STOP.
func (p *Player) StopTransaction() {
	p.read = false
	_ = p.WriteString(consts.IsStop)
}

func (p *Player) State(s consts.StateID) {
	p.state = s
}

func (p *Player) GetState() consts.StateID {
	return p.state
}

func (p *Player) Conn(conn *network.Conn) {
	p.conn = conn
	p.data = make(chan *protocol.Packet, 8)
	p.online = true
}

func (p Player) Model() model.Player {
	return model.Player{
		ID:   p.ID,
		Name: p.Name,
	}
}

func (p Player) String() string {
	return fmt.Sprintf("%s[%d]", p.Name, p.ID)
}

// RoomGame is implemented by each game type's state struct (e.g., Gomoku).
// Clean() is called when the room is deleted to close channels and free resources.
type RoomGame interface {
	Clean()
}

// Room represents a game room. Players join a room, wait for enough players,
// then the owner starts the game. The Game field holds the active game state.
type Room struct {
	sync.Mutex

	ID         int64     `json:"id"`
	Type       int       `json:"type"`
	Game       RoomGame  `json:"gameId"`
	State      int       `json:"state"`
	Players    int       `json:"players"`
	Creator    int64     `json:"creator"`
	ActiveTime time.Time `json:"activeTime"`
	MaxPlayers int       `json:"maxPlayers"`
	Password   string    `json:"password"`
	EnableChat bool      `json:"enableChat"`
	EnableShowIP bool    `json:"enableShowIP"`
}

func (r *Room) Model() model.Room {
	return model.Room{
		ID:        r.ID,
		Type:      r.Type,
		TypeDesc:  consts.GameTypes[r.Type],
		Players:   r.Players,
		State:     r.State,
		StateDesc: consts.RoomStates[r.State],
		Creator:   r.Creator,
	}
}

