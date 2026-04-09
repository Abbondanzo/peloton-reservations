FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@10.24.0

ENV PNPM_HOME="/pnpm"

# Copy manifests first so dependency install is cached separately from source
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY shared/package.json ./shared/
COPY backend/package.json ./backend/

RUN --mount=type=cache,target=/pnpm/store pnpm install --frozen-lockfile

# Copy source
COPY shared/ ./shared/
COPY backend/ ./backend/

# Build shared types
WORKDIR /app/shared
RUN pnpm run build

# Stub firebase.json so tsc can resolve the JSON import at build time.
# The real credentials are injected at runtime by run.sh.
WORKDIR /app/backend
RUN pnpm run build

# Verify the build produced the expected entry point
RUN test -f /app/backend/build/index.js || (echo "ERROR: build/index.js not found after tsc" && exit 1)

WORKDIR /app
ENV NODE_ENV=production

COPY run.sh /run.sh
RUN chmod +x /run.sh

CMD ["/run.sh"]
