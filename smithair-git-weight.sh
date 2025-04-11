#!/bin/bash

echo "📦 Analyse du poids du projet Git en cours..."

# Poids total du dossier (tri par taille descendante)
echo ""
echo "📁 Dossiers les plus lourds :"
du -sh * .[!.]* | sort -hr | head -n 10

# Top fichiers les plus lourds (hors node_modules)
echo ""
echo "📄 Fichiers les plus lourds (hors node_modules) :"
find . -type f ! -path "*/node_modules/*" -exec du -h {} + | sort -hr | head -n 10

# Analyse du .git si présent
if [ -d ".git" ]; then
  echo ""
  echo "🧠 Taille du dossier .git :"
  du -sh .git
fi

# Taille de node_modules (si présent)
if [ -d "node_modules" ]; then
  echo ""
  echo "📦 Taille de node_modules :"
  du -sh node_modules
fi

echo ""
echo "✅ Analyse terminée, majesté."
