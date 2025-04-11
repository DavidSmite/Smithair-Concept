#!/bin/bash

echo "⚡️ SMITHAIR RESCUE MODE ⚡️"
echo "🧹 Fermeture de tous les processus Node.js..."
pkill -f node

sleep 1

echo "🔁 Réinitialisation du backend (port 4000)..."
cd backend || exit 1

echo "📦 Vérification du server.mjs..."
grep 'Access-Control-Allow-Origin' server.mjs

echo ""
echo "🚀 Lancement du vrai backend..."
node server.mjs
