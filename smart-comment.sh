#!/bin/bash

# 🧠 SmartComment — Ajoute ou retire // devant une ligne donnée dans un fichier
# 🔧 Usage : ./smart-comment.sh <chemin-du-fichier> <ligne-debut> <ligne-fin>

FILE="$1"
START="$2"
END="$3"

if [ -z "$FILE" ] || [ -z "$START" ] || [ -z "$END" ]; then
  echo "❌ Utilisation : ./smart-comment.sh chemin/vers/fichier.tsx ligneDébut ligneFin"
  exit 1
fi

echo "📄 Fichier : $FILE"
echo "🔁 Ligne $START à $END"

# Détecter si les lignes sont déjà commentées
IS_COMMENTED=$(sed -n "${START},${END}p" "$FILE" | grep -c '^//')

if [ "$IS_COMMENTED" -eq 0 ]; then
  echo "🟨 Action : commenter les lignes"
  sed -i '' "${START},${END}s/^/\/\//" "$FILE"
else
  echo "🟩 Action : décommenter les lignes"
  sed -i '' "${START},${END}s/^\/\///" "$FILE"
fi

echo "✅ Terminé."
