#!/bin/bash

echo ""
echo "👑 SMART DEV LAUNCH – Bienvenue David !"
echo "🧭 Navigation vers frontend..."

cd "$(dirname "$0")/frontend" || {
  echo "❌ Dossier frontend introuvable !"
  exit 1
}

echo ""
echo "🚀 Lancement de Next.js en mode dynamique..."
echo "🌍 Tu seras accessible sur http://localhost:3000 (ou +1 si occupé)"

npm run dev
