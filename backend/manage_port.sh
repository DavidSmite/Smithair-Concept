#!/bin/bash

# ====================================
# 🧙‍♂️ Smithair Port Manager v2 - Wizard Mode
# ====================================

reset_colors="\033[0m"
green="\033[0;32m"
red="\033[0;31m"
yellow="\033[1;33m"
cyan="\033[0;36m"
bold="\033[1m"

spinner() {
  local pid=$!
  local delay=0.1
  local spinstr='|/-\'
  echo -n "🔄 Libération en cours..."
  while kill -0 $pid 2>/dev/null; do
    local temp=${spinstr#?}
    printf " [%c]  " "$spinstr"
    spinstr=$temp${spinstr%"$temp"}
    sleep $delay
    printf "\b\b\b\b\b\b"
  done
  echo ""
}

clear
echo -e "${bold}${cyan}🧠 Sélectionne un port à libérer :${reset_colors}"
echo -e "${yellow}1️⃣  Port 3000 (frontend)"
echo -e "2️⃣  Port 4000 (backend)"
echo -e "3️⃣  Port 8080 (serveur générique)"
echo -e "4️⃣  Autre (personnalisé)${reset_colors}"
read -p "👉 Ton choix (1-4) : " choix

case $choix in
  1) PORT=3000 ;;
  2) PORT=4000 ;;
  3) PORT=8080 ;;
  4) read -p "🧠 Entrez le port : " PORT ;;
  *) echo -e "${red}❌ Choix invalide. Annulation.${reset_colors}"; exit 1 ;;
esac

echo -e "\n🎯 Port sélectionné : ${bold}$PORT${reset_colors}"

PIDS=$(lsof -ti tcp:$PORT)

if [ -z "$PIDS" ]; then
  echo -e "${green}✅ Le port $PORT est déjà libre !${reset_colors}"
else
  echo -e "${red}⚔️  Processus à tuer :${reset_colors} $PIDS"
  for PID in $PIDS; do
    kill -9 $PID 2>/dev/null
  done

  ( while lsof -i :$PORT >/dev/null; do sleep 0.5; done ) & spinner
  echo -e "${green}✅ Port $PORT libéré avec succès 🕊️${reset_colors}"
fi

echo ""
read -p "🚀 Relancer un serveur maintenant ? (y/n) : " answer

if [[ "$answer" =~ ^[Yy]$ ]]; then
  read -p "👉 Commande à exécuter (ex: npm run dev) : " CMD
  echo -e "${cyan}✨ Exécution de :${reset_colors} ${bold}$CMD${reset_colors}"
  eval "$CMD"
else
  echo -e "${yellow}👍 Tu peux maintenant lancer ton serveur manuellement.${reset_colors}"
fi

# 🧙‍♂️ Fin magique
echo -e "\n${bold}${green}✨ Que la puissance des ports soit avec toi, David ! ✨${reset_colors}"
