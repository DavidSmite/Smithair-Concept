#!/bin/bash

echo "🧼 Nettoyage du frontend SmithHair en cours..."

cd frontend || exit 1

echo "🧹 Suppression du cache .next/"
rm -rf .next

echo "�� Nettoyage des modules..."
rm -rf node_modules

echo "📦 Réinstallation des dépendances..."
npm install

echo "🚀 Relancement du serveur frontend..."
npm run dev
