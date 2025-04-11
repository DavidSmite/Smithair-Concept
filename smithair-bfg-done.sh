#!/bin/bash

echo ""
echo "👑 Smithair – Retour au royaume principal..."

# Remonte d’un dossier
cd ..

# Supprimer le clone miroir BFG (sécurisé)
if [ -d "smithair-cleaned.git" ]; then
  echo "🧼 Suppression de smithair-cleaned.git..."
  rm -rf smithair-cleaned.git
else
  echo "✅ Aucun dossier smithair-cleaned.git à supprimer"
fi

# Retourner dans le vrai projet
cd Smithair-Concept || exit

echo ""
echo "🏰 De retour dans le royaume actif : $(pwd)"
echo "📦 Tu peux maintenant :"
echo "  - Travailler sur ton code (frontend/backend)"
echo "  - Utiliser tes scripts (launcher, cleanup)"
echo "  - Continuer la conquête e-commerce"
echo ""
echo "🚀 Tout est en ordre, David. Reprise du business en toute légèreté."
