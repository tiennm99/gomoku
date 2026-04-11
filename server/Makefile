.PHONY: help build run stop logs shell clean test proto

# Detect Docker Compose command
DOCKER_COMPOSE := $(shell which docker-compose 2>/dev/null)
ifeq ($(DOCKER_COMPOSE),)
    DOCKER_COMPOSE := $(shell docker compose version >/dev/null 2>&1 && echo "docker compose" || echo "")
endif
ifeq ($(DOCKER_COMPOSE),)
    $(error "Docker Compose not installed. Install docker-compose or upgrade Docker.")
endif

help:
	@echo "Gomoku server Docker management"
	@echo ""
	@echo "  make build   - Build Docker image"
	@echo "  make run     - Start server (dev)"
	@echo "  make stop    - Stop server"
	@echo "  make logs    - View logs"
	@echo "  make shell   - Open container shell"
	@echo "  make clean   - Remove containers and images"
	@echo "  make test    - Run Go tests"

build:
	$(DOCKER_COMPOSE) build

run:
	$(DOCKER_COMPOSE) up -d
	@echo "Server started: ws://localhost:1999/gomoku"

stop:
	$(DOCKER_COMPOSE) down

logs:
	$(DOCKER_COMPOSE) logs -f

shell:
	$(DOCKER_COMPOSE) exec gomoku-server sh

clean:
	$(DOCKER_COMPOSE) down -v
	docker rmi gomoku-server:latest || true

test:
	go test ./...

proto:
	protoc --go_out=.. --go_opt=module=github.com/tiennm99/gomoku --proto_path=../common/proto ../common/proto/request.proto ../common/proto/response.proto
