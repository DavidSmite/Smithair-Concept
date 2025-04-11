#!/bin/bash

echo "⚙️  Vérification du port 4000..."
PID=$(lsof -ti:4000)

if [ -n "$PID" ]; then
  echo "🛑 Port 4000 occupé par le processus $PID. Suppression..."
  kill -9 $PID
  echo "✅ Port 4000 libéré !"
else
  echo "✅ Port 4000 déjà libre."
fi

echo "🚀 Lancement du backend..."
cd backend
node server.mjs
