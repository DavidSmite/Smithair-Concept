#!/bin/bash

# === CONFIG ===
LOGFILE="git-optimize-$(date +%Y%m%d-%H%M%S).log"
DRY_RUN=false

# === OPTIONS ===
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "🧪 MODE SIMULATION ACTIVÉ – Aucune modification ne sera faite."
fi

# === HEADER ===
echo ""
echo "👑 Smithair Git Optimizer PRO™ – Entretien royal du dépôt Git"
echo "📁 Dossier courant : $PWD"
echo "📜 Log : $LOGFILE"

# === CHECK REPO ===
if [ ! -d .git ]; then
  echo "❌ Ce dossier n'est pas un dépôt Git. Abandon."
  exit 1
fi

# === AVANT ===
echo ""
echo "🔍 AVANT OPTIMISATION :" | tee -a "$LOGFILE"
git count-objects -vH | tee -a "$LOGFILE"
du -sh .git | tee -a "$LOGFILE"

# === DRY RUN ?
if [ "$DRY_RUN" = true ]; then
  echo "" | tee -a "$LOGFILE"
  echo "✅ Fin de la simulation. Rien n’a été modifié." | tee -a "$LOGFILE"
  exit 0
fi

# === LANCEMENT OPTIMISATION ===
echo ""
echo "⚙️ Lancement de git gc --aggressive --prune=now..." | tee -a "$LOGFILE"
echo -n "🌀 Compression en cours " | tee -a "$LOGFILE"
for i in {1..5}; do
  echo -n "▮"
  sleep 0.4
done
echo "" | tee -a "$LOGFILE"
git gc --aggressive --prune=now >> "$LOGFILE" 2>&1

# === APRÈS ===
echo ""
echo "✅ APRÈS OPTIMISATION :" | tee -a "$LOGFILE"
git count-objects -vH | tee -a "$LOGFILE"
du -sh .git | tee -a "$LOGFILE"

# === FIN ===
echo ""
echo "📜 Rapport enregistré dans : $LOGFILE"
echo "🏁 Optimisation terminée, David. Ton dépôt est propre et rapide comme l’éclair ⚡️"
