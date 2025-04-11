#!/bin/bash

echo "🔍 Smithair NodeModules Cleaner"

# Étape 1 : S'assurer qu'on est dans un repo Git
if [ ! -d .git ]; then
  echo "❌ Pas de dépôt Git ici. Lance 'git init' d'abord."
  exit 1
fi

# Étape 2 : Ajouter node_modules au .gitignore s’il n’y est pas déjà
if ! grep -q "^node_modules/" .gitignore 2>/dev/null; then
  echo "📦 Ajout de node_modules/ au .gitignore..."
  echo "node_modules/" >> .gitignore
else
  echo "✅ node_modules/ est déjà dans .gitignore"
fi

# Étape 3 : Supprimer node_modules du suivi Git
echo "🧹 Suppression de node_modules/ du suivi Git..."
git rm -r --cached node_modules

# Étape 4 : Commit du nettoyage
echo "💾 Commit du nettoyage..."
git add .gitignore
git commit -m '🧹 Clean: remove node_modules from Git tracking'

echo "✅ Terminé. Ton dépôt est maintenant clean et prêt à être déployé sans node_modules."
