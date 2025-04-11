#!/bin/bash

echo "🧹 Smithair Clean One-Liner™ – Lancement en cours..."

# Dossiers à nettoyer
CLEAN_DIRS=("frontend/.next" "frontend/node_modules" "backend/node_modules")

for DIR in "${CLEAN_DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    echo "➡️  Suppression du suivi Git pour : $DIR"
    git rm -r --cached "$DIR"
  else
    echo "✅ $DIR déjà propre ou inexistant"
  fi
done

# Ajout au .gitignore
echo ".next/" >> frontend/.gitignore
echo "node_modules/" >> frontend/.gitignore
echo "node_modules/" >> backend/.gitignore

git add frontend/.gitignore backend/.gitignore

# Commit
git commit -m "🧹 Clean One-Liner™ $(date '+%Y-%m-%d %H:%M') : untracked .next/ & node_modules/"

echo "✅ Terminé. Tu peux maintenant lancer : smithairdeploy"
