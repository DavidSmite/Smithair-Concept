#!/bin/bash

# 🔐 Smithair Script Saver
echo ""
echo "💾 Smithair Backup – Sauvegarde automatique des scripts en cours..."
echo ""

# Crée dossier backup si absent
mkdir -p .backup

# Timestamp unique
DATE=$(date +"%Y-%m-%d_%H-%M-%S")

# Archive tous les fichiers .sh dans un zip avec date
ZIP_NAME=".backup/smithair-scripts-$DATE.zip"
zip -j "$ZIP_NAME" *.sh &> /dev/null

echo "✅ Tous tes scripts .sh ont été sauvegardés dans : $ZIP_NAME"
echo "📦 Tu peux les restaurer ou les partager à tout moment."
echo ""
echo "🧠 Pro tip : fais-le une fois avant chaque Snap 💥"
