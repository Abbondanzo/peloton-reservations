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
exec node build/index.js
