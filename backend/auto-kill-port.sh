#!/bin/bash

PORT=$1

if [ -z "$PORT" ]; then
  echo "❌ Tu dois spécifier un port. Exemple : ./auto-kill-port.sh 4000"
  exit 1
fi

PIDS=$(lsof -ti tcp:$PORT)

if [ -z "$PIDS" ]; then
  echo "✅ Le port $PORT est déjà libre !"
  exit 0
fi

echo "🧹 Nettoyage en cours du port $PORT..."
for PID in $PIDS; do
  echo "🔫 Tuer le processus PID=$PID"
  kill -9 $PID 2>/dev/null
done

# Attente active jusqu'à libération du port
echo -n "⏳ Attente de la libération complète du port $PORT"
while lsof -i :$PORT >/dev/null; do
  echo -n "."
  sleep 1
done

echo ""
echo "✅ Port $PORT libéré avec succès 🕊️"
