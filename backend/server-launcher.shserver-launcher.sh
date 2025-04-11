#!/usr/bin/env bash

# Fichier de log pour consigner les activités
LOGFILE="server_launcher.log"

# Port initial
PORT=5050

# Nombre maximum de tentatives pour trouver un port libre
MAX_ATTEMPTS=5

function log_message {
  echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOGFILE
}

function check_port {
  local port=$1
  lsof -i :$port > /dev/null 2>&1
}

function stop_process_on_port {
  local port=$1
  local pids=$(lsof -t -i :$port)
  
  if [[ -n $pids ]]; then
    log_message "Processus trouvés sur le port $port : $pids. Tentative d'arrêt."
    kill $pids 2>/dev/null || log_message "Échec de l'arrêt gracieux. Tentative de kill forcé."
    kill -9 $pids 2>/dev/null
  else
    log_message "Aucun processus trouvé sur le port $port."
  fi
}

function find_free_port {
  local current_port=$PORT
  for (( i=0; i<MAX_ATTEMPTS; i++ )); do
    if ! check_port $current_port; then
      echo $current_port
      return
    fi
    current_port=$((current_port + 1))
  done
  log_message "Impossible de trouver un port libre après $MAX_ATTEMPTS tentatives."
  exit 1
}

function start_server {
  local port=$1
  log_message "Lancement du serveur sur le port $port..."
  # Commande réelle pour démarrer le serveur (assurez-vous que server.mjs est correct)
  PORT=$port node server.mjs &
  echo $! > .server_pid
  log_message "Serveur lancé avec le PID $(cat .server_pid)."
}

function main {
  log_message "----------------------------------"
  log_message "Début du script de gestion de port et de lancement de serveur."

  # Trouver un port libre
  local free_port=$(find_free_port)
  
  # Si un processus utilise le port, essayez de le stopper
  stop_process_on_port $free_port

  # Démarrer le serveur
  start_server $free_port

  log_message "Gestion de serveur terminée. Serveur en cours d'exécution sur le port $free_port."
}

main
