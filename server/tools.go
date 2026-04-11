//go:build tools

// Package tools pins build-time tool dependencies so `go install` picks up
// the correct versions without polluting the main module's runtime imports.
package tools

import _ "google.golang.org/protobuf/cmd/protoc-gen-go"
