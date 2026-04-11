# syntax=docker/dockerfile:1.7

# Build stage: compile Go binary with full toolchain
FROM golang:1.23-alpine AS build
WORKDIR /src

# Cache dependency downloads separately from source code
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/gomoku-server .

# Runtime stage: minimal distroless image (no shell, no package manager)
FROM gcr.io/distroless/static-debian12:nonroot AS runtime
COPY --from=build /out/gomoku-server /gomoku-server

EXPOSE 1999
USER nonroot:nonroot

ENTRYPOINT ["/gomoku-server"]
CMD ["-p", "1999"]
