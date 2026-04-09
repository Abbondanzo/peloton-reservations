#!/bin/sh
set -e

if [ ! -f /data/firebase.json ]; then
  echo "ERROR: Firebase credentials not found."
  echo "Place your service account key at /addon_data/peloton_reservations/firebase.json and restart."
  exit 1
fi

# Make credentials available where the backend expects them
ln -sf /data/firebase.json /app/backend/firebase.json

# Point the schedule cache at the persistent data volume
export DATA_DIR=/data

cd /app/backend
exec node build/index.js
