package network

import (
	"testing"

	"google.golang.org/protobuf/proto"

	"github.com/tiennm99/gomoku/server/protocol"
)

// encodeRequest is a test-local helper that marshals a Request to bytes.
// (Production code only needs DecodeRequest; the client sends raw frames.)
func encodeRequest(req *protocol.Request) ([]byte, error) {
	return proto.Marshal(req)
}

func TestCodec_RequestRoundtrip_Heartbeat(t *testing.T) {
	original := &protocol.Request{
		Payload: &protocol.Request_Heartbeat{Heartbeat: &protocol.HeartbeatRequest{}},
	}
	data, err := encodeRequest(original)
	if err != nil {
		t.Fatalf("encodeRequest: %v", err)
	}
	got, err := DecodeRequest(data)
	if err != nil {
		t.Fatalf("DecodeRequest: %v", err)
	}
	if got.GetHeartbeat() == nil {
		t.Fatal("expected HeartbeatRequest payload, got nil")
	}
}

func TestCodec_RequestRoundtrip_SetNickname(t *testing.T) {
	original := &protocol.Request{
		Payload: &protocol.Request_SetNickname{
			SetNickname: &protocol.SetNicknameRequest{Nickname: "alice"},
		},
	}
	data, err := encodeRequest(original)
	if err != nil {
		t.Fatalf("encodeRequest: %v", err)
	}
	got, err := DecodeRequest(data)
	if err != nil {
		t.Fatalf("DecodeRequest: %v", err)
	}
	if got.GetSetNickname().GetNickname() != "alice" {
		t.Fatalf("expected nickname %q, got %q", "alice", got.GetSetNickname().GetNickname())
	}
}

func TestCodec_ResponseRoundtrip_NicknameSet(t *testing.T) {
	original := &protocol.Response{
		Payload: &protocol.Response_NicknameSet{
			NicknameSet: &protocol.NicknameSetResponse{InvalidLength: 0},
		},
	}
	data, err := EncodeResponse(original)
	if err != nil {
		t.Fatalf("EncodeResponse: %v", err)
	}
	// Decode back using proto directly.
	got := &protocol.Response{}
	if err := proto.Unmarshal(data, got); err != nil {
		t.Fatalf("proto.Unmarshal: %v", err)
	}
	if got.GetNicknameSet() == nil {
		t.Fatal("expected NicknameSetResponse payload, got nil")
	}
	if got.GetNicknameSet().GetInvalidLength() != 0 {
		t.Fatalf("expected InvalidLength=0, got %d", got.GetNicknameSet().GetInvalidLength())
	}
}

func TestCodec_DecodeRequest_Malformed(t *testing.T) {
	_, err := DecodeRequest([]byte{0xFF, 0xFE, 0x00})
	if err == nil {
		t.Fatal("expected error on malformed input, got nil")
	}
}

func TestCodec_DecodeRequest_Empty(t *testing.T) {
	// Empty bytes are valid protobuf (all fields default). Payload will be nil.
	req, err := DecodeRequest([]byte{})
	if err != nil {
		t.Fatalf("unexpected error on empty input: %v", err)
	}
	if req.Payload != nil {
		t.Fatalf("expected nil payload for empty input, got %T", req.Payload)
	}
}
