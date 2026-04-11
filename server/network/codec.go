package network

import (
	"fmt"

	"google.golang.org/protobuf/proto"

	"github.com/tiennm99/gomoku/server/protocol"
)

// DecodeRequest deserializes a binary WS frame into a typed Request.
// Returns a descriptive error on malformed input.
func DecodeRequest(data []byte) (*protocol.Request, error) {
	req := &protocol.Request{}
	if err := proto.Unmarshal(data, req); err != nil {
		return nil, fmt.Errorf("decode request: %w", err)
	}
	return req, nil
}

// EncodeResponse serializes a Response to binary for transmission as a WS frame.
func EncodeResponse(resp *protocol.Response) ([]byte, error) {
	data, err := proto.Marshal(resp)
	if err != nil {
		return nil, fmt.Errorf("encode response: %w", err)
	}
	return data, nil
}
