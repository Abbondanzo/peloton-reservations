FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@10.24.0

# Copy manifests first so dependency install is cached separately from source
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY shared/package.json ./shared/
COPY backend/package.json ./backend/

RUN pnpm install --frozen-lockfile

# Copy source
COPY shared/ ./shared/
COPY backend/ ./backend/

# Build shared types first, then the backend
RUN pnpm --filter=shared build

# Stub firebase.json so tsc can resolve the JSON import at build time.
# The real credentials are injected at runtime by run.sh.
RUN echo '{}' > backend/firebase.json
RUN pnpm --filter=backend build
RUN rm backend/firebase.json

ENV NODE_ENV=production

COPY run.sh /run.sh
RUN chmod +x /run.sh

CMD ["/run.sh"]
