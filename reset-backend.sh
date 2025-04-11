#!/bin/bash

echo "🧼 [SmithHair] Nettoyage + relance du BACKEND"

# Étape 1 : tuer les processus sur le port 4000
echo "🔫 Libération du port 4000..."
lsof -ti:4000 | xargs kill -9 2>/dev/null

# Étape 2 : aller dans le dossier backend
cd backend || exit 1

# Étape 3 : suppression node_modules + package-lock
echo "🧹 Suppression des dépendances précédentes..."
rm -rf node_modules
rm -f package-lock.json

# Étape 4 : réinstallation
echo "📦 Réinstallation des dépendances..."
npm install

# Étape 5 : lancement du backend
echo ""
echo "🚀 Lancement du backend sur http://localhost:4000"
echo "🛡️ Vérification du CORS dynamique activé..."
node server.mjs
