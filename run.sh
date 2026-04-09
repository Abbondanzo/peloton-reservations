#!/bin/sh
set -e

# Write Firebase credentials from add-on options to the location the backend expects
node -e "
const opts = JSON.parse(require('fs').readFileSync('/data/options.json', 'utf8'));
if (!opts.firebase_credentials) {
  console.error('ERROR: firebase_credentials is not set. Open the add-on Configuration tab and paste your Firebase service account JSON.');
  process.exit(1);
}
require('fs').writeFileSync('/app/backend/firebase.json', opts.firebase_credentials);
"

export DATA_DIR=/data

cd /app/backend

echo "=== Diagnostics ==="
echo "Current directory: $(pwd)"
echo ""
echo "Contents of /app/backend/:"
ls -la /app/backend/
echo ""
echo "Contents of /app/backend/build/ (if exists):"
ls -laR /app/backend/build/ 2>/dev/null || echo "  build/ directory does not exist!"
echo ""
echo "Looking for any index.js under /app/backend/:"
find /app/backend -name "index.js" -type f 2>/dev/null || echo "  No index.js found anywhere"
echo ""
echo "Node version: $(node --version)"
echo "=== End Diagnostics ==="
echo ""

exec node build/index.js
