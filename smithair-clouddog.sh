#!/bin/bash

# 📦 Modifie ce chemin si ton Drive est ailleurs
CLOUD_PATH=~/Drive/Smithair-Backups

echo ""
echo "🐶 Smithair CloudDog – Surveillance + Backup + Envolée vers le cloud ☁️"
echo "📁 Dossier de cloud ciblé : $CLOUD_PATH"
echo ""

# 🔍 Vérifie que le dossier cloud existe
if [ ! -d "$CLOUD_PATH" ]; then
  echo "❌ Dossier cloud introuvable à : $CLOUD_PATH"
  echo "💡 Modifie la variable CLOUD_PATH en haut du script."
  exit 1
fi

# 🔧 Vérifie que smithair-save.sh existe
if [ ! -f "./smithair-save.sh" ]; then
  echo "❌ smithair-save.sh introuvable. Impossible de continuer."
  exit 1
fi

# 🛡️ Lance la surveillance
fswatch -o ./*.sh | while read event
do
  echo ""
  echo "🔁 Modification détectée dans un script .sh"
  echo "💾 Lancement de la sauvegarde locale..."
  ./smithair-save.sh

  LAST_BACKUP=$(ls -t .backup/*.zip | head -n 1)

  if [ -f "$LAST_BACKUP" ]; then
    echo "☁️ Envoi de $(basename "$LAST_BACKUP") vers $CLOUD_PATH"
    cp "$LAST_BACKUP" "$CLOUD_PATH/"

    # 💬 Notification Mac (facultative)
    if command -v osascript &> /dev/null; then
      osascript -e 'display notification "Backup .sh envoyé vers le Cloud ☁️" with title "Smithair CloudDog"'
    fi

    echo "✅ Synchro terminée ! Fichier bien gardé 🛡️"
  fi
done
