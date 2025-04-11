#!/bin/bash

echo "🍭 Nettoyage des ports (3000 → 3040)..."
for port in {3000..3040}; do
  pid=$(lsof -ti:$port)
  if [ -n "$pid" ]; then
    kill -9 $pid
    echo "🛑 Port $port libéré (PID: $pid)"
  fi
done

echo "🧹 Suppression du cache .next/ (frontend)..."
rm -rf frontend/.next

echo "🎺 Lancement du backend (port 4000)..."
cd backend
node server.mjs &
BACK_PID=$!
echo "🔄 Backend PID : $BACK_PID"
sleep 2

echo "🎨 Lancement du frontend (port 3000)..."
cd ../frontend
npm run dev &

echo ""
echo "👑 Smithair est lancé !"
echo "🧠 Backend → http://localhost:4000"
echo "🌐 Frontend → http://localhost:3000/login"
echo "🔥 Bon travail chef ! L'empire est en ligne."
