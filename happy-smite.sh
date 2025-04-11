#!/bin/bash

clear

# 🧠 Logo ASCII
echo "███████╗███╗   ███╗██╗████████╗██╗  ██╗ █████╗ ██╗██████╗ "
echo "██╔════╝████╗ ████║██║╚══██╔══╝██║  ██║██╔══██╗██║██╔══██╗"
echo "█████╗  ██╔████╔██║██║   ██║   ███████║███████║██║██║  ██║"
echo "██╔══╝  ██║╚██╔╝██║██║   ██║   ██╔══██║██╔══██║██║██║  ██║"
echo "███████╗██║ ╚═╝ ██║██║   ██║   ██║  ██║██║  ██║██║██████╔╝"
echo "╚══════╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═════╝ "

echo ""
echo "🎂  Bonjour Capitaine Smite ! Aujourd’hui n’est peut-être pas ton anniversaire..."
echo "🎉  ... mais ton projet, lui, il prend une claque de niveau chaque jour. 💳"
echo ""
echo "🚀  Smithair is loading with full power. Hyperfocus mode : ON."
echo "🔧  Terminal prêt. Prochain bug ? Il n’a qu’à bien se tenir."
echo ""
echo "💬  Citation du jour :"
RANDOM_QUOTE=$(
  shuf -n 1 <<EOF
"Quand tu doutes, relis ton code : il te dira qui tu es vraiment."
"Le terminal ne ment jamais. Il t'apprend."
"Fichier vide ? C’est juste une idée qui attend son heure."
"La vitesse, c’est bien. Mais toi ? T’es la fluidité incarnée."
"Un projet comme Smithair ? C’est pas du code. C’est un héritage."
EOF
)
echo "   🧠  \"$RANDOM_QUOTE\""
echo ""
echo "🟢 Que le Smithair Flow soit avec toi. À ton service, 24/7. ⚔️"
