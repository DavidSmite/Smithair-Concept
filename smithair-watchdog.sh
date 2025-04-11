#!/bin/bash

echo "👁️ Smithair Watchdog actif – Je surveille tous tes scripts..."
echo "📂 Dès qu’un fichier .sh est modifié, je le sauve dans .backup/"
echo ""

# Vérifie que smithair-save.sh existe
if [ ! -f "./smithair-save.sh" ]; then
  echo "❌ Le fichier smithair-save.sh est introuvable. Création annulée."
  exit 1
fi

# Lancement de la surveillance
fswatch -o ./*.sh | while read num
do
  echo "💾 Changement détecté ! Je lance une sauvegarde..."
  ./smithair-save.sh
done

