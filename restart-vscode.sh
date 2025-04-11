#!/bin/bash

# ================
# 🚀 VS CODE RESTART MENU
# ================

clear
echo "🎯 Sélectionne un dossier pour relancer VS Code :"
echo ""
echo "1️⃣  Projet Smithair (backend)"
echo "2️⃣  Projet Smithair (frontend)"
echo "3️⃣  Ce dossier actuel ($(pwd))"
echo "4️⃣  Entrer un chemin personnalisé"
echo ""

read -p "👉 Ton choix (1-4) : " choix

case $choix in
  1)
    DIR="$HOME/Desktop/Smithair-Concept/backend"
    ;;
  2)
    DIR="$HOME/Desktop/Smithair-Concept/frontend"
    ;;
  3)
    DIR=$(pwd)
    ;;
  4)
    read -p "📂 Entre le chemin complet du dossier : " DIR
    ;;
  *)
    echo "❌ Choix invalide. Annulation."
    exit 1
    ;;
esac

echo ""
echo "🧹 Fermeture de VS Code..."
killall "Visual Studio Code" 2>/dev/null
sleep 1

echo "🚀 Relance de VS Code dans : $DIR"
code "$DIR"

echo "✅ VS Code relancé avec succès ! ✨"
