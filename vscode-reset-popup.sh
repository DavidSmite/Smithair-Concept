#!/bin/bash

# ================================
# 🌍 VS CODE LANGUAGE RESET PRO TOOL
# ================================

clear
echo "🧹 Nettoyage complet VS Code (popup, langue, cache, relance auto)"
echo ""
echo "🔤 Quelle langue veux-tu forcer pour VS Code ?"
echo "1️⃣  Français (fr)"
echo "2️⃣  Anglais (en)"
read -p "👉 Ton choix (1 ou 2) : " choix

if [ "$choix" == "1" ]; then
  LANGUE="fr"
elif [ "$choix" == "2" ]; then
  LANGUE="en"
else
  echo "❌ Choix invalide. Opération annulée."
  exit 1
fi

echo ""
echo "🔧 Application de la langue : $LANGUE"
echo "{ \"locale\": \"$LANGUE\" }" > ~/Library/Application\ Support/Code/User/locale.json

echo "🧽 Suppression des caches..."
rm -rf ~/Library/Application\ Support/Code/CachedData
rm -rf ~/Library/Application\ Support/Code/User/workspaceStorage
rm -rf ~/Library/Application\ Support/Code/User/globalStorage/ms-ceintl.vscode-language-pack-fr
rm -rf ~/Library/Application\ Support/Code/User/globalStorage/ms-ceintl.vscode-language-pack-en

# Nettoyage de quelques paramètres persistants relous
rm -rf ~/Library/Application\ Support/Code/User/globalStorage/state.vscdb*
rm -rf ~/Library/Application\ Support/Code/User/globalStorage/storage.json

# Fermeture de VS Code
echo "🧨 Fermeture de Visual Studio Code..."
killall "Visual Studio Code" 2>/dev/null
sleep 1

# Relance dans le dossier courant
echo "🚀 Relance automatique de VS Code dans : $(pwd)"
code .

echo ""
echo "✅ VS Code relancé avec la langue forcée sur \"$LANGUE\""
