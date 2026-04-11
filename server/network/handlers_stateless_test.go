package network

import (
	"testing"

	"github.com/tiennm99/gomoku/server/database"
	"github.com/tiennm99/gomoku/server/protocol"
)

// makeTestPlayer creates a minimal Player wired with SendCh and CmdCh for testing.
func makeTestPlayer() *database.Player {
	p := database.RegisterPlayer("tester")
	p.SendCh = make(chan *protocol.Response, 32)
	p.CmdCh = make(chan *protocol.Request, 16)
	return p
}

// drainSendCh collects all currently queued responses without blocking.
func drainSendCh(p *database.Player) []*protocol.Response {
	var out []*protocol.Response
	for {
		select {
		case r := <-p.SendCh:
			out = append(out, r)
		default:
			return out
		}
	}
}

// --- Heartbeat ---

func TestHandleHeartbeat_NoCmdPush_NoResponse(t *testing.T) {
	p := makeTestPlayer()
	req := &protocol.Request{Payload: &protocol.Request_Heartbeat{Heartbeat: &protocol.HeartbeatRequest{}}}
	handleHeartbeat(p, req)

	if len(p.CmdCh) != 0 {
		t.Errorf("expected no CmdCh push, got %d", len(p.CmdCh))
	}
	responses := drainSendCh(p)
	if len(responses) != 0 {
		t.Errorf("expected no response for heartbeat, got %d", len(responses))
	}
}

// --- SetNickname validation table ---

func TestHandleSetNickname_Validation(t *testing.T) {
	cases := []struct {
		name          string
		input         string
		wantSuccess   bool   // true = invalid_length == 0
		wantFollowUp  bool   // true = ShowOptionsResponse also sent
	}{
		{"empty string", "", false, false},       // trimmed="" → invalid_length=-1
		{"whitespace only", "   ", false, false}, // trimmed="" → invalid_length=-1
		{"single rune", "a", true, true},
		{"32 runes exact", "abcdefghijklmnopqrstuvwxyz123456", true, true},
		{"33 runes over limit", "abcdefghijklmnopqrstuvwxyz1234567", false, false},
		{"unicode multibyte 32 runes", "αβγδεζηθικλμνξοπρστυφχψωαβγδεζηθ", true, true},
		{"NUL control char", "ab\x00cd", false, false},
		{"tab control char", "ab\tcd", false, false},
		{"valid with trim", "  alice  ", true, true},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			p := makeTestPlayer()
			req := &protocol.Request{
				Payload: &protocol.Request_SetNickname{
					SetNickname: &protocol.SetNicknameRequest{Nickname: tc.input},
				},
			}
			handleSetNickname(p, req)

			responses := drainSendCh(p)
			if len(responses) == 0 {
				t.Fatal("expected at least one response, got none")
			}

			first := responses[0]
			ns := first.GetNicknameSet()
			if ns == nil {
				t.Fatalf("expected NicknameSetResponse as first response, got %T", first.Payload)
			}

			if tc.wantSuccess && ns.GetInvalidLength() != 0 {
				t.Errorf("expected success (invalid_length=0), got invalid_length=%d", ns.GetInvalidLength())
			}
			if !tc.wantSuccess && ns.GetInvalidLength() == 0 {
				t.Errorf("expected failure (invalid_length!=0), got invalid_length=0")
			}

			if tc.wantFollowUp {
				if len(responses) < 2 {
					t.Fatalf("expected ShowOptionsResponse follow-up, only got %d responses", len(responses))
				}
				if responses[1].GetShowOptions() == nil {
					t.Errorf("expected ShowOptionsResponse as second response, got %T", responses[1].Payload)
				}
			}
		})
	}
}

// --- GetRooms ---

func TestHandleGetRooms_ReturnsShowRooms(t *testing.T) {
	p := makeTestPlayer()
	req := &protocol.Request{
		Payload: &protocol.Request_GetRooms{GetRooms: &protocol.GetRoomsRequest{}},
	}
	handleGetRooms(p, req)

	responses := drainSendCh(p)
	if len(responses) != 1 {
		t.Fatalf("expected exactly 1 response, got %d", len(responses))
	}
	if responses[0].GetShowRooms() == nil {
		t.Errorf("expected ShowRoomsResponse, got %T", responses[0].Payload)
	}
}

// --- SetClientInfo ---

func TestHandleSetClientInfo_StoresVersionNoResponse(t *testing.T) {
	p := makeTestPlayer()
	req := &protocol.Request{
		Payload: &protocol.Request_SetClientInfo{
			SetClientInfo: &protocol.SetClientInfoRequest{Version: "v1.2.3"},
		},
	}
	handleSetClientInfo(p, req)

	if p.ClientVersion != "v1.2.3" {
		t.Errorf("expected ClientVersion=%q, got %q", "v1.2.3", p.ClientVersion)
	}
	responses := drainSendCh(p)
	if len(responses) != 0 {
		t.Errorf("expected no response for set_client_info, got %d", len(responses))
	}
}

// --- Dispatch routing ---

func TestDispatch_HeartbeatInline_NoCmdPush(t *testing.T) {
	p := makeTestPlayer()
	req := &protocol.Request{Payload: &protocol.Request_Heartbeat{Heartbeat: &protocol.HeartbeatRequest{}}}
	Dispatch(p, req)

	if len(p.CmdCh) != 0 {
		t.Errorf("heartbeat must not push to CmdCh, got %d items", len(p.CmdCh))
	}
}

func TestDispatch_GetRoomsInline_SendsResponse(t *testing.T) {
	p := makeTestPlayer()
	req := &protocol.Request{
		Payload: &protocol.Request_GetRooms{GetRooms: &protocol.GetRoomsRequest{}},
	}
	Dispatch(p, req)

	responses := drainSendCh(p)
	if len(responses) == 0 {
		t.Fatal("expected ShowRoomsResponse, got none")
	}
	if responses[0].GetShowRooms() == nil {
		t.Errorf("expected ShowRoomsResponse, got %T", responses[0].Payload)
	}
}

func TestDispatch_StatefulPushesToCmdCh(t *testing.T) {
	p := makeTestPlayer()
	req := &protocol.Request{
		Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}},
	}
	Dispatch(p, req)

	if len(p.CmdCh) != 1 {
		t.Errorf("expected 1 item in CmdCh, got %d", len(p.CmdCh))
	}
	got := <-p.CmdCh
	if got.GetCreateRoom() == nil {
		t.Errorf("expected CreateRoomRequest in CmdCh, got %T", got.Payload)
	}
}

func TestDispatch_UnknownPayload_NoSendNoPanic(t *testing.T) {
	p := makeTestPlayer()
	// Dispatch a Request with nil payload — should hit the default branch and not panic.
	req := &protocol.Request{} // Payload is nil
	defer func() {
		if r := recover(); r != nil {
			t.Errorf("Dispatch panicked on unknown payload: %v", r)
		}
	}()
	Dispatch(p, req)

	if len(p.CmdCh) != 0 {
		t.Errorf("expected no CmdCh push for unknown payload, got %d", len(p.CmdCh))
	}
}

func TestDispatch_CmdChFull_DropsWithoutPanic(t *testing.T) {
	p := makeTestPlayer()
	// Fill CmdCh to capacity.
	for i := 0; i < cap(p.CmdCh); i++ {
		p.CmdCh <- &protocol.Request{}
	}
	// This should drop silently without blocking or panicking.
	req := &protocol.Request{
		Payload: &protocol.Request_CreateRoom{CreateRoom: &protocol.CreateRoomRequest{}},
	}
	done := make(chan struct{})
	go func() {
		defer close(done)
		Dispatch(p, req)
	}()
	select {
	case <-done:
		// ok
	default:
		// Must return immediately (non-blocking).
		<-done
	}
}
