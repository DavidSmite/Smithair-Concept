
#!/bin/bash

echo "⚠️  Restauration du frontend depuis backup..."

# Vérifier si le fichier zip existe
if [ ! -f frontend-backup-smithhair.zip ]; then
  echo "❌ Erreur : Le fichier frontend-backup-smithhair.zip est introuvable."
  exit 1
fi

# Sauvegarde de l'existant
if [ -d frontend ]; then
  echo "📦 Sauvegarde du dossier frontend existant → frontend-temp"
  mv frontend frontend-temp
fi

# Extraction du zip
echo "📂 Extraction du backup..."
unzip -q frontend-backup-smithhair.zip

# Vérification post-décompression
if [ -d frontend ]; then
  echo "✅ Frontend restauré avec succès depuis le backup."
  echo "ℹ️  Ancien dossier sauvegardé sous : frontend-temp"
else
  echo "❌ Échec de la restauration."
fi
