#!/bin/bash

echo "🧪 Simulation du site en mode production (localhost:3000)..."

# Construire si nécessaire
if [ ! -d ".next" ]; then
  echo "🔧 Build manquant, lancement du build..."
  npm run build
fi

# Lancer en mode prod
echo "🚀 Lancement de l'instance Next.js en production..."
npm run start
