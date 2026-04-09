# Build stage
FROM golang:1.22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

# Copy server source and build
COPY server/go.mod server/go.sum ./server/
RUN cd server && go mod download

COPY server/ ./server/
RUN cd server && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/gomoku-server main.go

# Copy web client
COPY web/ ./web/

# Runtime stage
FROM alpine:latest

RUN apk --no-cache add ca-certificates tzdata

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN addgroup -g 1000 -S gomoku && \
  adduser -u 1000 -S gomoku -G gomoku

WORKDIR /app

COPY --from=builder /app/gomoku-server .
COPY --from=builder /app/web ./web

RUN chown -R gomoku:gomoku /app

USER gomoku

# WebSocket + web UI on 9998, TCP on 9999
EXPOSE 9998 9999

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD nc -z localhost 9998 && nc -z localhost 9999 || exit 1

# -s ./web serves web client at http://host:9998/
CMD ["./gomoku-server", "-w", "9998", "-t", "9999", "-s", "./web"]
