#!/bin/bash

echo "🔍 Smithair Terminal Debugger™"
echo ""

read -p "🧠 Colle ici ta dernière commande suspecte : " lastCommand

if echo "$lastCommand" | grep -Eq "(chmod|nano|cat).*\1"; then
  echo ""
  echo "💀 OHHH NON MON P’TIT GARS..."
  echo "Tu viens de faire une COMMANDE BOUCLÉE :"
  echo "→ $lastCommand"
  echo ""
  echo "📼 Même la disquette vient de demander sa retraite."
  echo "🧠 Astuce : tape une commande à la fois. Utilise des guillemets si besoin."
else
  echo ""
  echo "✅ Cette commande semble correcte, Chef."
  echo "💳 Tu peux continuer à frapper dans le terminal comme un Maestro."
fi
