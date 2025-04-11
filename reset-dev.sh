#!/bin/bash

echo "🧼 Smithair Reset Dev – Nettoyage et Recréation"

SCRIPTS=("smithair-backend.sh" "smithair-all.sh" "smithair-dev.sh")

for file in "${SCRIPTS[@]}"; do
  if [ -f "$file" ]; then
    echo "🗑️ Suppression de $file..."
    rm "$file"
  fi
done

echo ""
echo "📁 Tous les fichiers .sh critiques ont été supprimés."

echo "⚠️ Tu peux maintenant relancer tes scripts Snap pour les recréer proprement."

echo "👉 Exemple : Snap Full Power / Snap Dev Suite / Snap Launcher"
