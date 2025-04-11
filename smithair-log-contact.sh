#!/bin/bash

echo ""
echo "📡 Smithair Contact Log Watch™ – Traque des messages entrants"
echo "🕵️‍♂️ Filtrage des logs liés à la route /api/contact"

cd ~/Desktop/Smithair-Concept/frontend || {
  echo "❌ Dossier frontend introuvable !"
  exit 1
}

echo ""
echo "📍 Attente de logs depuis le terminal de développement..."
echo "🔁 Appuie sur Ctrl+C pour quitter"

tail -f .next/trace | grep --line-buffered "contact"
