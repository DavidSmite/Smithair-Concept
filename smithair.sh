#!/bin/bash

echo "🚀 Bienvenue Capitaine Smite. Lancement de Smithair Platform..."
echo "💳 Carte Black TDAH activée ✅"
echo "🧠 Mode Hyperfocus : ON"
echo ""

# Lancer le backend
echo "🎬 Démarrage du backend (port 4000)..."
cd backend
gnome-terminal -- bash -c "node server.mjs; exec bash" 2>/dev/null || \
osascript -e 'tell app "Terminal" to do script "cd '$PWD'/backend && node server.mjs"' 2>/dev/null || \
x-terminal-emulator -e "cd backend && node server.mjs" 2>/dev/null
cd ..

# Lancer le frontend
echo "🎬 Démarrage du frontend (port 3010)..."
cd frontend
gnome-terminal -- bash -c "npm run dev; exec bash" 2>/dev/null || \
osascript -e 'tell app "Terminal" to do script "cd '$PWD'/frontend && npm run dev"' 2>/dev/null || \
x-terminal-emulator -e "cd frontend && npm run dev" 2>/dev/null
cd ..

# Afficher l'accès
echo ""
echo "🧭 Accès frontend : http://localhost:3010"
echo "🧭 Accès backend :  http://localhost:4000/api/stats"
echo ""
echo "👑 Smithair est en orbite. Ne lâche rien, capitaine."
echo "🐾 Jean Gabin approuve ce lancement."
