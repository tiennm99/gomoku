package database

import (
	"fmt"
	"time"

	"github.com/tiennm99/gomoku/server/consts"
	newproto "github.com/tiennm99/gomoku/server/protocol"
)

// Role represents a player's role within a room.
type Role string

const (
	RolePlayer    Role = "player"
	RoleOwner     Role = "owner"
	RoleSpectator Role = "spectator"
)

// Player represents a connected user in the new protocol stack.
// All I/O goes through SendCh (outbound) and CmdCh (inbound stateful commands).
// The state machine goroutine reads CmdCh; the writer goroutine drains SendCh.
type Player struct {
	ID     int64  `json:"id"`
	IP     string `json:"ip"`
	Name   string `json:"name"`
	Mode   int    `json:"mode"`
	Type   int    `json:"type"`
	Amount uint   `json:"amount"`
	RoomID int64  `json:"roomId"`
	Role   Role   `json:"role"`

	// Unused legacy fields retained for zero-value safety; removed in phase-07.
	state consts.StateID // current state ID (not used by new state machine)

	// New network fields wired by server.go before spawning Run().
	SendCh        chan *newproto.Response // buffered, drained by writer goroutine
	CmdCh         chan *newproto.Request  // buffered 16, read by state machine
	LastHeartbeat time.Time              // updated on every received frame
	ClientVersion string                 // set by SetClientInfoRequest
}

// Send pushes a protobuf response onto SendCh.
// Non-blocking: drops the message if the channel is full or nil.
// Safe to call from any goroutine concurrently.
func (p *Player) Send(resp *newproto.Response) error {
	if p.SendCh == nil {
		return nil
	}
	select {
	case p.SendCh <- resp:
		return nil
	default:
		return fmt.Errorf("player %d send channel full, dropping response", p.ID)
	}
}

func (p Player) String() string {
	return fmt.Sprintf("%s[%d]", p.Name, p.ID)
}
