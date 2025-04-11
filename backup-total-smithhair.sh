#!/bin/bash

echo "📦 Sauvegarde complète SmithHair en cours..."

# Nom de l'archive
OUTPUT="smithhair-backup-2025-04-03_16h50.zip"

# Vérifie les dossiers à archiver
if [ ! -d frontend ]; then
  echo "❌ Dossier 'frontend/' introuvable"
  exit 1
fi

if [ ! -d backend ]; then
  echo "❌ Dossier 'backend/' introuvable"
  exit 1
fi

# Création du .zip
zip -r "$OUTPUT" frontend backend > /dev/null

if [ -f "$OUTPUT" ]; then
  echo "✅ Backup total créé avec succès : $OUTPUT"
else
  echo "❌ Échec lors de la création du backup"
fi
