#!/bin/bash

echo "🧼 Nettoyage du frontend SmithHair..."

cd frontend || exit 1

echo "🔁 Suppression de .next et node_modules..."
rm -rf .next
rm -rf node_modules
rm -f package-lock.json

echo "📦 Réinstallation des dépendances..."
npm install

echo "🚀 Lancement du serveur frontend..."
npm run dev
