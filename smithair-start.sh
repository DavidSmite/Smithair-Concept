#!/bin/bash

echo "🚀 Lancement du projet Smithair Concept..."

# 1. Libérer les ports
echo "🧹 Nettoyage des ports 3000 et 4000..."
bash ./backend/kill-port.sh 3000 >/dev/null 2>&1
bash ./backend/kill-port.sh 4000 >/dev/null 2>&1

# 2. Lancer le backend
echo "🔧 Démarrage du backend..."
osascript -e 'tell app "Terminal"
    do script "cd ~/Desktop/Smithair-Concept/backend && npm run dev"
end tell'

sleep 2

# 3. Lancer le frontend
echo "🎨 Démarrage du frontend..."
osascript -e 'tell app "Terminal"
    do script "cd ~/Desktop/Smithair-Concept/frontend && npm run dev"
end tell'

sleep 2

# 4. Ouvrir dans le navigateur
echo "🌐 Ouverture dans le navigateur..."
open http://localhost:3000

echo "✅ Projet lancé. Bon build, Chef !"
