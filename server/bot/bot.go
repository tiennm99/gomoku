// Package bot provides optional QQ group messaging via the Milky SDK.
// Used to send game notifications to a QQ chat group. Not required for gameplay.
package bot

import (
	"fmt"
	"github.com/Szzrain/Milky-go-sdk"
	"github.com/ratel-online/core/log"
)

// Session is the global bot connection. Nil when bot is not configured.
var Session *Milky_go_sdk.Session

// GroupID is the QQ group to send messages to.
var GroupID int64

// Logger adapts the core logger to the Milky SDK's Logger interface.
type Logger struct{}

func (l *Logger) Infof(format string, args ...interface{}) {
	log.Infof(format, args...)
}

func (l *Logger) Errorf(format string, args ...interface{}) {
	log.Errorf(format, args...)
}

func (l *Logger) Debugf(format string, args ...interface{}) {
	_ = format
	_ = args
}

func (l *Logger) Warnf(format string, args ...interface{}) {
	log.Infof(format, args...)
}

func (l *Logger) Info(args ...interface{}) {
	log.Info(fmt.Sprint(args...))
}

func (l *Logger) Error(args ...interface{}) {
	log.Error(fmt.Sprint(args...))
}

func (l *Logger) Debug(args ...interface{}) {
	_ = args
}

func (l *Logger) Warn(args ...interface{}) {
	log.Info(fmt.Sprint(args...))
}

// SendGroupMessage sends a text message to the configured QQ group.
func SendGroupMessage(groupID int64, content string) error {
	if Session == nil {
		return fmt.Errorf("bot not connected")
	}
	var message []Milky_go_sdk.IMessageElement
	message = append(message, &Milky_go_sdk.TextElement{Text: content})
	_, err := Session.SendGroupMessage(groupID, &message)
	return err
}

// Connect establishes a WebSocket connection to the Milky bot service.
func Connect(addr, token string, groupID int64) error {
	GroupID = groupID
	m, err := Milky_go_sdk.New("ws://"+addr+"/event", "http://"+addr+"/api", token, &Logger{})
	if err != nil {
		return fmt.Errorf("failed to create bot session: %v", err)
	}
	err = m.Open()
	if err != nil {
		return fmt.Errorf("failed to connect bot: %v", err)
	}
	Session = m
	log.Infof("Bot connected: %s", addr)
	return nil
}

// Close gracefully shuts down the bot connection.
func Close() {
	if Session != nil {
		Session.Close()
	}
}
