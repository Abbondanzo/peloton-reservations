FROM node:22-alpine AS builder

ENV PNPM_HOME="/pnpm"
WORKDIR /app

RUN npm install -g pnpm@10.24.0

# Copy manifests first so dependency install is cached separately from source
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY shared/package.json ./shared/
COPY backend/package.json ./backend/

RUN --mount=type=cache,target=/pnpm/store pnpm install --frozen-lockfile

# Copy source
COPY shared/ ./shared/
COPY backend/ ./backend/

# Build shared types then backend
RUN pnpm --filter=shared run build
RUN pnpm --filter=backend run build

# Create a self-contained production deployment (prod deps only, no devDeps)
RUN pnpm deploy --filter=backend --prod --legacy /deploy

# pnpm deploy respects .gitignore and skips build/ — copy the compiled output in manually
RUN cp -r /app/backend/build /deploy/build
RUN cp -r /app/shared/build /deploy/node_modules/shared/build

RUN test -f /deploy/build/index.js || (echo "ERROR: build/index.js not found" && exit 1)

# ---- Runtime stage ----
FROM node:22-alpine

RUN apk upgrade --no-cache

ENV NODE_ENV=production
WORKDIR /app/backend

COPY --from=builder /deploy ./

COPY run.sh /run.sh
RUN chmod +x /run.sh

CMD ["/run.sh"]
