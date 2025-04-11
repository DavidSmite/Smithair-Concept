#!/bin/bash

# 🧠 Diff Watch : visualiser les changements entre deux versions d'un fichier
# 🛠️ Usage : ./diff-watch.sh chemin/vers/fichier.tsx

FILE="$1"

if [ -z "$FILE" ]; then
  echo "❌ Utilisation : ./diff-watch.sh chemin/vers/fichier.tsx"
  exit 1
fi

TMP_BACKUP=".diffwatch-$(basename "$FILE")-backup"

# Si le fichier de backup n'existe pas, on le crée
if [ ! -f "$TMP_BACKUP" ]; then
  cp "$FILE" "$TMP_BACKUP"
  echo "📦 Backup initial créé pour $FILE"
  exit 0
fi

echo "🔍 Comparaison entre la version actuelle et la sauvegarde..."

diff -u "$TMP_BACKUP" "$FILE"

echo ""
echo "💡 Pour valider les changements comme base :"
echo "   cp $FILE $TMP_BACKUP"
