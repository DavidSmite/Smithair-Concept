#!/bin/bash

# Nom du fichier backup avec date/heure
OUTPUT="frontend-backup-2025-04-03_16h46.zip"

echo "📦 Sauvegarde du frontend en cours..."

# Vérifie que le dossier frontend existe
if [ ! -d frontend ]; then
  echo "❌ Dossier 'frontend' introuvable"
  exit 1
fi

# Compression du dossier frontend
zip -r "$OUTPUT" frontend > /dev/null

if [ -f "$OUTPUT" ]; then
  echo "✅ Backup créé avec succès : $OUTPUT"
else
  echo "❌ Échec lors de la création du backup"
fi
