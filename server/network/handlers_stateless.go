package network

import (
	"strings"
	"unicode/utf8"

	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/pkg/log"
	"github.com/tiennm99/gomoku/server/protocol"
)

const (
	nicknameMinRunes = 1
	nicknameMaxRunes = 32
)

// handleHeartbeat refreshes the player's last-seen timestamp.
// Caro sends no response for heartbeats — we match that behavior.
func handleHeartbeat(player *database.Player, _ *protocol.Request) {
	// LastHeartbeat is updated by the reader loop on every frame.
	// No response needed per caro spec.
}

// handleSetNickname validates and applies the requested nickname.
// On success: sends NicknameSetResponse{invalid_length:0} + ShowOptionsResponse.
// On failure: sends NicknameSetResponse{invalid_length: N} where N is the rune count.
func handleSetNickname(player *database.Player, req *protocol.Request) {
	nn := strings.TrimSpace(req.GetSetNickname().GetNickname())
	runeCount := utf8.RuneCountInString(nn)

	if runeCount < nicknameMinRunes || runeCount > nicknameMaxRunes || containsControlChars(nn) {
		// Report rune count as the rejection reason.
		// Use -1 when runeCount == 0 (empty / whitespace-only) to distinguish
		// from the success sentinel (invalid_length == 0).
		reportedLen := int32(runeCount)
		if reportedLen == 0 {
			reportedLen = -1
		}
		_ = player.Send(&protocol.Response{
			Payload: &protocol.Response_NicknameSet{
				NicknameSet: &protocol.NicknameSetResponse{
					InvalidLength: reportedLen,
				},
			},
		})
		return
	}

	player.Name = nn

	// Confirm success.
	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_NicknameSet{
			NicknameSet: &protocol.NicknameSetResponse{InvalidLength: 0},
		},
	})
	// Show the main menu options so the client can proceed.
	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_ShowOptions{
			ShowOptions: &protocol.ShowOptionsResponse{},
		},
	})

	log.Infof("[handler] player %d set nickname to %q\n", player.ID, nn)
}

// handleGetRooms builds a ShowRoomsResponse snapshot and sends it inline.
func handleGetRooms(player *database.Player, _ *protocol.Request) {
	rooms := database.GetAllRooms()
	summaries := make([]*protocol.RoomSummary, 0, len(rooms))
	for _, r := range rooms {
		r.RLock()
		roomType := "PVP"
		if r.RoomType == database.RoomTypePve {
			roomType = "PVE"
		}
		summary := &protocol.RoomSummary{
			RoomId:          int32(r.ID),
			RoomOwner:       r.OwnerNickname,
			RoomClientCount: int32(len(r.Players) + len(r.Spectators)),
			RoomType:        roomType,
		}
		r.RUnlock()
		summaries = append(summaries, summary)
	}

	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_ShowRooms{
			ShowRooms: &protocol.ShowRoomsResponse{Rooms: summaries},
		},
	})
}

// handleSetClientInfo stores the client version string and logs it.
// No response sent (stateless, informational only).
func handleSetClientInfo(player *database.Player, req *protocol.Request) {
	player.ClientVersion = req.GetSetClientInfo().GetVersion()
	log.Infof("[handler] player %d client version: %q\n", player.ID, player.ClientVersion)
}

// handleClientExit sends a ClientExitResponse and closes the send channel
// so the writer goroutine exits, which in turn closes the WS connection.
func handleClientExit(player *database.Player, _ *protocol.Request) {
	log.Infof("[handler] player %d requested exit\n", player.ID)
	_ = player.Send(&protocol.Response{
		Payload: &protocol.Response_ClientExit{
			ClientExit: &protocol.ClientExitResponse{},
		},
	})
	// Closing SendCh signals the writer goroutine to stop, which will
	// cause the WS conn to close and the reader loop to exit naturally.
	if player.SendCh != nil {
		close(player.SendCh)
		player.SendCh = nil // prevent double-close
	}
}

// containsControlChars returns true if s contains any ASCII control character
// (including NUL) or the Unicode replacement character.
func containsControlChars(s string) bool {
	for _, r := range s {
		if r < 0x20 || r == 0x7F || r == '\uFFFD' {
			return true
		}
	}
	return false
}
