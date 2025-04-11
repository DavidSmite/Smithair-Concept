#!/bin/bash

echo "🚀 Vérification et libération des ports..."

# Liste des ports utilisés par backend et frontend
BACKEND_PORT=3010
FRONTEND_PORT=3011

# Fonction pour tuer un processus utilisant un port
kill_port_if_busy() {
    PORT=$1
    PID=$(lsof -ti :$PORT)
    if [ -n "$PID" ]; then
        echo "🔴 Port $PORT occupé par PID $PID, on le tue..."
        kill -9 $PID
    fi
}

# Libère les ports avant de démarrer
kill_port_if_busy $BACKEND_PORT
kill_port_if_busy $FRONTEND_PORT

echo "🟢 Démarrage du backend..."
cd ~/Desktop/Smithair-Concept/backend && npm run dev &

sleep 5  # Attends quelques secondes pour laisser le backend démarrer

echo "🟢 Démarrage du frontend..."
cd ~/Desktop/Smithair-Concept/frontend && npm run dev -p $FRONTEND_PORT &

echo "✅ Tout est lancé !"
