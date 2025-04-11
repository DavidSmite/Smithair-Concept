#!/bin/bash

echo "🚨 Nettoyage des fichiers TypeScript dans le backend..."

# Étape 1 – Nettoyage dans models/
echo "🧹 Suppression de tous les fichiers .ts dans backend/models/"
find backend/models -type f -name "*.ts" -delete

# Étape 2 – Nettoyage dans routes/
echo "🧹 Suppression de tous les fichiers .ts dans backend/routes/"
find backend/routes -type f -name "*.ts" -delete

# Étape 3 – Nettoyage dans controllers/
echo "🧹 Suppression de tous les fichiers .ts dans backend/controllers/"
find backend/controllers -type f -name "*.ts" -delete

# Résumé
echo "✅ Nettoyage terminé ! Tous les fichiers .ts ciblés ont été supprimés."
