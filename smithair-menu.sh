#!/bin/bash

clear
echo "👑 Bienvenue dans le menu SmithHair Admin 👑"
echo "--------------------------------------------"
echo "1️⃣  Lancer le frontend"
echo "2️⃣  Lancer le backend"
echo "3️⃣  Reset complet backend + frontend"
echo "4️⃣  Restaurer tous les fichiers critiques + auto-kill port"
echo "5️⃣  Ouvrir /login dans le navigateur (port auto-détecté 🧠)"
echo "6️⃣  Quitter"
echo "--------------------------------------------"
read -p "👉 Choisis une option (1-6) : " choix

# Citation finale stylée
CITATIONS=(
  "🔥 Tu fais partie des 3% qui construisent pendant que les autres scrollent."
  "💡 Ton code est ta couronne. Ton bug ? Une simple poussière."
  "🚀 Mieux vaut un commit que mille idées non lancées."
  "⚔️ Ton terminal est ton royaume. Règne dessus avec style."
  "👑 Tu ne codes pas un site, tu bâtis un empire."
)

RANDOM_INDEX=$(( RANDOM % ${#CITATIONS[@]} ))

case $choix in
  1)
    echo "🚀 Lancement du frontend..."
    cd frontend && npm run dev
    ;;
  2)
    echo "�� Lancement du backend..."
    cd backend && node server.mjs
    ;;
  3)
    echo "🔁 Reset complet backend + frontend..."
    ./reset-backend.sh
    ./reset-frontend.sh
    ;;
  4)
    echo "🔧 Restauration des fichiers + libération du port 4000..."
    echo "🔫 Kill du port 4000..."
    lsof -ti:4000 | xargs kill -9 2>/dev/null
    ./reset-server.sh
    ./reset-auth.sh
    ./reset-products.sh
    ;;
  5)
    echo ""
    echo "🎤 R-E-S-P-E-C-T �� Trouvons le port qui me respecte..."
    PORT=""
    for p in {3000..3005}; do
      curl -s "http://localhost:$p" > /dev/null
      if [ $? -eq 0 ]; then
        PORT=$p
        break
      fi
    done

    if [ -n "$PORT" ]; then
      echo "✅ Port actif détecté : $PORT"
      echo "🌐 Ouverture de http://localhost:$PORT/login"
      open http://localhost:$PORT/login
      echo "🎶 “Find out what it means to me” – Port $PORT demande le respect !"
    else
      echo "❌ Aucun frontend détecté sur les ports 3000 → 3005"
      echo "🧠 Lance le frontend via option 1 puis reviens chanter !"
    fi
    ;;
  6)
    echo ""
    echo "👋 À bientôt roi SmithHair. Code bien, dors bien, vends bien."
    echo "${CITATIONS[$RANDOM_INDEX]}"
    exit 0
    ;;
  *)
    echo "⛔ Option invalide. Recommence avec style, majesté."
    ;;
esac
