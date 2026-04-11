# syntax=docker/dockerfile:1.7

# Build stage: Vite production build
# Uses pre-committed src/generated/protocol.js — no protoc needed here
FROM node:22-alpine AS build
WORKDIR /src

# Cache npm install separately from source changes
COPY package.json package-lock.json ./
RUN npm ci

COPY index.html vite.config.js ./
COPY src src

RUN npm run build

# Runtime stage: nginx serves static assets from dist/
FROM nginx:1.27-alpine AS runtime
COPY --from=build /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
