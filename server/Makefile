.PHONY: help build run stop logs shell clean test lint proto docker-build docker-run docker-stop docker-logs smoke

# Go binary name
BINARY := gomoku-server
# Docker image tag (server only; full stack uses root docker-compose.yml)
IMAGE := gomoku-server:local

help:
	@echo "Gomoku server — available targets:"
	@echo ""
	@echo "  Local dev:"
	@echo "    make build        Build Go binary (./$(BINARY))"
	@echo "    make run          Run server on :1999"
	@echo "    make test         Run Go tests"
	@echo "    make lint         Run go vet"
	@echo "    make proto        Regenerate protobuf stubs"
	@echo ""
	@echo "  Docker (single server image):"
	@echo "    make docker-build Build gomoku-server:local image"
	@echo "    make docker-run   Run server container on :1999"
	@echo "    make docker-stop  Stop + remove server container"
	@echo "    make docker-logs  Tail server container logs"
	@echo ""
	@echo "  Full stack (root docker-compose.yml):"
	@echo "    cd .. && docker compose up -d"
	@echo ""
	@echo "    make smoke        Quick build + test gate"

# ---------- local dev ----------

build:
	go build -o $(BINARY) .

run: build
	./$(BINARY) -p 1999

test:
	go test ./... -count=1

lint:
	go vet ./...

proto:
	protoc --go_out=.. --go_opt=module=github.com/tiennm99/gomoku \
	       --proto_path=../common/proto \
	       ../common/proto/request.proto ../common/proto/response.proto

# ---------- docker (server image only) ----------

docker-build:
	docker build -t $(IMAGE) .

docker-run: docker-build
	docker run -d --name gomoku-server -p 1999:1999 --restart unless-stopped $(IMAGE)
	@echo "Server running: ws://localhost:1999/gomoku"

docker-stop:
	docker stop gomoku-server || true
	docker rm   gomoku-server || true

docker-logs:
	docker logs -f gomoku-server

# ---------- smoke gate ----------

smoke: lint test build
	@echo "Smoke gate passed: vet + tests + binary build OK"
