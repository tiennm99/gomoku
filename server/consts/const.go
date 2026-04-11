package consts

import (
	"time"

	"github.com/tiennm99/gomoku/server/pkg/consts"
)

type StateID int

const (
	_ StateID = iota
	StateWelcome
	StateHome
	StateJoin
	StateCreate
	StateWaiting
	StateGomokuGame
)

const (
	IsStart = consts.IsStart
	IsStop  = consts.IsStop

	RoomStateWaiting = 1
	RoomStateRunning = 2

	GameTypeGomoku = 1

	GomokuBoardSize   = 15
	GomokuPlayTimeout = 60 * time.Second
)

// Room properties.
const (
	RoomPropsPassword = "pwd"
	RoomPropsShowIP   = "ip"
)

type Error struct {
	Code int
	Msg  string
	Exit bool
}

func (e Error) Error() string {
	return e.Msg
}

func NewErr(code int, exit bool, msg string) Error {
	return Error{Code: code, Exit: exit, Msg: msg}
}

var (
	ErrorsExist                   = NewErr(1, true, "Exist. ")
	ErrorsChanClosed              = NewErr(1, true, "Chan closed. ")
	ErrorsTimeout                 = NewErr(1, false, "Timeout. ")
	ErrorsInputInvalid            = NewErr(1, false, "Input invalid. ")
	ErrorsChatUnopened            = NewErr(1, false, "Chat disabled. ")
	ErrorsChatUnopenedDuringGame  = NewErr(1, false, "Chat disabled during game. ")
	ErrorsAuthFail                = NewErr(1, true, "Auth fail. ")
	ErrorsRoomInvalid             = NewErr(1, true, "Room invalid. ")
	ErrorsGameTypeInvalid         = NewErr(1, false, "Game type invalid. ")
	ErrorsRoomPlayersIsFull       = NewErr(1, false, "Room players is full. ")
	ErrorsRoomPassword            = NewErr(1, false, "Sorry! Password incorrect! ")
	ErrorsJoinFailForRoomRunning  = NewErr(1, false, "Join fail, room is running. ")
	ErrorsJoinFailForKicked       = NewErr(1, false, "Join fail, you have been kicked from this room. ")
	ErrorsGamePlayersInsufficient = NewErr(1, false, "Game players insufficient. ")
	ErrorsCannotKickYourself      = NewErr(1, false, "Cannot kick yourself. ")
	ErrorsPlayerNotInRoom         = NewErr(1, true, "Player not in room. ")
	GameTypes                     = map[int]string{
		GameTypeGomoku: "Gomoku",
	}
	GameTypesIds = []int{
		GameTypeGomoku,
	}
	RoomStates = map[int]string{
		RoomStateWaiting: "Waiting",
		RoomStateRunning: "Running",
	}
)
