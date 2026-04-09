package network

import (
	"github.com/ratel-online/core/log"
	"github.com/ratel-online/core/model"
	"github.com/ratel-online/core/network"
	"github.com/ratel-online/core/protocol"
	"github.com/ratel-online/core/util/async"
	"github.com/ratel-online/server/consts"
	"github.com/ratel-online/server/database"
	"github.com/ratel-online/server/state"
	"time"
)

// Network is interface of all kinds of network.
type Network interface {
	Serve() error
}

// handle processes a new connection: wraps it, authenticates within 3 seconds,
// creates a Player, starts the state machine goroutine, and blocks on Listening.
func handle(rwc protocol.ReadWriteCloser) error {
	c := network.Wrapper(rwc)
	defer func() {
		err := c.Close()
		if err != nil {
			log.Error(err)
		}
	}()
	log.Info("new player connected! ")
	authInfo, err := loginAuth(c)
	if err != nil {
		_ = c.Write(protocol.ErrorPacket(err))
		return err
	}
	player := database.Connected(c, authInfo)
	log.Infof("player auth accessed, ip %s, %d:%s\n", player.IP, player.ID, authInfo.Name)
	go state.Run(player)
	defer player.Offline()
	return player.Listening()
}

// loginAuth reads an AuthInfo JSON packet from the connection within 3 seconds.
// If the client doesn't authenticate in time, it returns ErrorsAuthFail.
func loginAuth(c *network.Conn) (*model.AuthInfo, error) {
	authChan := make(chan *model.AuthInfo)
	defer close(authChan)
	async.Async(func() {
		packet, err := c.Read()
		if err != nil {
			log.Error(err)
			return
		}
		authInfo := &model.AuthInfo{}
		err = packet.Unmarshal(authInfo)
		if err != nil {
			log.Error(err)
			return
		}
		authChan <- authInfo
	})
	select {
	case authInfo := <-authChan:
		return authInfo, nil
	case <-time.After(3 * time.Second):
		return nil, consts.ErrorsAuthFail
	}
}
