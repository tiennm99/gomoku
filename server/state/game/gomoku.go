package game

import (
	"fmt"
	"strings"

	"github.com/ratel-online/core/log"
	"github.com/ratel-online/core/util/json"
	"github.com/ratel-online/server/consts"
	"github.com/ratel-online/server/database"
)

// Gomoku state constants for channel-based turn sync.
var (
	gomokuStatePlay    = 1
	gomokuStateGameEnd = 2
)

// GomokuGame implements the State interface for gomoku (five-in-a-row).
type GomokuGame struct{}

func (g *GomokuGame) Next(player *database.Player) (consts.StateID, error) {
	room := database.GetRoom(player.RoomID)
	if room == nil {
		return 0, consts.ErrorsExist
	}
	game := room.Game.(*database.Gomoku)

	// Send initial board state to this player
	color := gomokuPlayerColor(game, player.ID)
	_ = player.WriteString(fmt.Sprintf("{\"type\":\"info\",\"color\":%d}\n", color))
	gomokuBroadcastBoard(game, nil)

	for {
		if room.State == consts.RoomStateWaiting {
			return consts.StateWaiting, nil
		}
		state, ok := <-game.States[player.ID]
		if !ok {
			return consts.StateWaiting, nil
		}
		switch state {
		case gomokuStatePlay:
			err := gomokuHandlePlay(player, game)
			if err != nil {
				log.Error(err)
				// Signal opponent so they don't block forever
				gomokuSignalOpponent(game, player.ID, gomokuStateGameEnd)
				return 0, err
			}
		case gomokuStateGameEnd:
			return gomokuHandleGameEnd(player, game)
		}
	}
}

func (g *GomokuGame) Exit(player *database.Player) consts.StateID {
	return consts.StateHome
}

// gomokuHandlePlay prompts the current player for a move and processes it.
func gomokuHandlePlay(player *database.Player, game *database.Gomoku) error {
	color := gomokuPlayerColor(game, player.ID)
	_ = player.WriteString(fmt.Sprintf("{\"type\":\"turn\",\"color\":%d}\n", color))

	for {
		ans, err := player.AskForString(consts.GomokuPlayTimeout)
		if err != nil {
			if err == consts.ErrorsTimeout {
				_ = player.WriteString("Timeout! You lost your turn.\n")
				gomokuAdvanceTurn(game, player.ID)
				return nil
			}
			return err
		}
		ans = strings.TrimSpace(ans)

		row, col, ok := gomokuParseMove(ans)
		if !ok {
			_ = player.WriteString("Invalid format. Use: row,col (e.g. 7,7)\n")
			continue
		}

		game.Lock()
		if row < 0 || row >= consts.GomokuBoardSize || col < 0 || col >= consts.GomokuBoardSize {
			game.Unlock()
			_ = player.WriteString("Out of bounds.\n")
			continue
		}
		if game.Board[row][col] != 0 {
			game.Unlock()
			_ = player.WriteString("Cell occupied.\n")
			continue
		}
		if game.Turn != color {
			game.Unlock()
			_ = player.WriteString("Not your turn.\n")
			continue
		}

		// Place stone and check result while holding the lock
		game.Board[row][col] = color
		game.MoveCount++
		won := gomokuCheckWin(game, row, col, color)
		draw := !won && game.MoveCount >= consts.GomokuBoardSize*consts.GomokuBoardSize
		game.LastColor = color
		game.Unlock()

		gomokuBroadcastBoard(game, []int{row, col})

		if won || draw {
			// Signal opponent for game end; current goroutine handles it directly
			gomokuSignalOpponent(game, player.ID, gomokuStateGameEnd)
			return gomokuDoGameEnd(player, game)
		}

		gomokuAdvanceTurn(game, player.ID)
		return nil
	}
}

// gomokuDoGameEnd broadcasts the result and resets room state.
// Called directly by the player who made the winning/drawing move.
func gomokuDoGameEnd(player *database.Player, game *database.Gomoku) error {
	room := database.GetRoom(player.RoomID)
	if room == nil {
		return nil
	}
	room.Lock()
	if room.Game != nil {
		game.Lock()
		lastColor := game.LastColor
		game.Unlock()

		if lastColor == 0 {
			database.Broadcast(player.RoomID, "{\"type\":\"gameover\",\"draw\":true}\n")
		} else {
			idx := 0
			if lastColor == 2 {
				idx = 1
			}
			winner := database.GetPlayer(game.PlayerIDs[idx])
			name := "Unknown"
			if winner != nil {
				name = winner.Name
			}
			msg := fmt.Sprintf("{\"type\":\"gameover\",\"winner\":\"%s\"}\n", name)
			database.Broadcast(player.RoomID, msg)
		}
		room.Game = nil
		room.State = consts.RoomStateWaiting
	}
	room.Unlock()
	return nil
}

// gomokuHandleGameEnd is called by the opponent player via channel signal.
func gomokuHandleGameEnd(player *database.Player, game *database.Gomoku) (consts.StateID, error) {
	// The winning player already broadcast the result in gomokuDoGameEnd.
	// This player just transitions back to waiting.
	return consts.StateWaiting, nil
}

func gomokuPlayerColor(game *database.Gomoku, playerID int64) int {
	if game.PlayerIDs[0] == playerID {
		return 1
	}
	return 2
}

// gomokuSignalOpponent sends a state signal to the other player's channel.
func gomokuSignalOpponent(game *database.Gomoku, currentPlayerID int64, signal int) {
	for _, id := range game.PlayerIDs {
		if id != currentPlayerID {
			select {
			case game.States[id] <- signal:
			default:
				// Channel full or closed — opponent already notified
			}
			return
		}
	}
}

func gomokuAdvanceTurn(game *database.Gomoku, currentPlayerID int64) {
	game.Lock()
	if game.Turn == 1 {
		game.Turn = 2
	} else {
		game.Turn = 1
	}
	game.Unlock()
	gomokuSignalOpponent(game, currentPlayerID, gomokuStatePlay)
}

func gomokuParseMove(input string) (int, int, bool) {
	parts := strings.Split(input, ",")
	if len(parts) != 2 {
		return 0, 0, false
	}
	var row, col int
	_, err := fmt.Sscanf(parts[0], "%d", &row)
	if err != nil {
		return 0, 0, false
	}
	_, err = fmt.Sscanf(parts[1], "%d", &col)
	if err != nil {
		return 0, 0, false
	}
	return row, col, true
}

// gomokuCheckWin checks if placing a stone at (row, col) wins the game.
// Caller must hold game.Lock().
func gomokuCheckWin(game *database.Gomoku, row, col, color int) bool {
	directions := [][2]int{{0, 1}, {1, 0}, {1, 1}, {1, -1}}
	for _, dir := range directions {
		count := 1
		for i := 1; i < 5; i++ {
			r, c := row+dir[0]*i, col+dir[1]*i
			if r < 0 || r >= consts.GomokuBoardSize || c < 0 || c >= consts.GomokuBoardSize {
				break
			}
			if game.Board[r][c] != color {
				break
			}
			count++
		}
		for i := 1; i < 5; i++ {
			r, c := row-dir[0]*i, col-dir[1]*i
			if r < 0 || r >= consts.GomokuBoardSize || c < 0 || c >= consts.GomokuBoardSize {
				break
			}
			if game.Board[r][c] != color {
				break
			}
			count++
		}
		if count >= 5 {
			return true
		}
	}
	return false
}

// gomokuBroadcastBoard sends the current board state to all players in the room.
func gomokuBroadcastBoard(game *database.Gomoku, lastMove []int) {
	type boardMsg struct {
		Type  string                                              `json:"type"`
		Board [consts.GomokuBoardSize][consts.GomokuBoardSize]int `json:"board"`
		Last  []int                                               `json:"last,omitempty"`
		Turn  int                                                 `json:"turn"`
	}
	// Copy board state under lock
	game.Lock()
	msg := boardMsg{
		Type:  "board",
		Board: game.Board,
		Last:  lastMove,
		Turn:  game.Turn,
	}
	game.Unlock()

	data := string(json.Marshal(msg)) + "\n"
	for _, id := range game.PlayerIDs {
		p := database.GetPlayer(id)
		if p != nil {
			_ = p.WriteString(data)
		}
	}
}

// InitGomokuGame creates and initializes a new gomoku game for the given room.
func InitGomokuGame(room *database.Room) (*database.Gomoku, error) {
	playerIDs := [2]int64{}
	i := 0
	for id := range database.RoomPlayers(room.ID) {
		if i >= 2 {
			break
		}
		playerIDs[i] = id
		i++
	}

	states := make(map[int64]chan int)
	for _, id := range playerIDs {
		states[id] = make(chan int, 2) // Buffer 2 to prevent deadlock
	}

	g := &database.Gomoku{
		Room:      room,
		PlayerIDs: playerIDs,
		Turn:      1, // Black goes first
		States:    states,
	}

	// Signal black player to make first move
	states[playerIDs[0]] <- gomokuStatePlay

	return g, nil
}
