#!/usr/bin/env bash

# Nom du fichier de log
LOGFILE="server_manager.log"

# Port initial
PORT=5050

# Nombre maximal de tentatives pour trouver un port libre
MAX_ATTEMPTS=5

function log_message {
  echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> $LOGFILE
}

function check_port {
  lsof -i :$1 > /dev/null 2>&1
}

function stop_process_on_port {
  local port=$1
  local pids
  pids=$(lsof -t -i :$port)
  if [[ -n $pids ]]; then
    log_message "Processus trouvés sur le port $port : $pids. Tentative d'arrêt."
    kill $pids
    sleep 1
    pids=$(lsof -t -i :$port)
    if [[ -n $pids ]]; then
      log_message "Les processus suivants n'ont pas été arrêtés : $pids. Tentative d'arrêt forcé."
      kill -9 $pids
    fi
  else
    log_message "Aucun processus n'utilise le port $port."
  fi
}

function find_free_port {
  local port=$1
  for ((i = 0; i < $MAX_ATTEMPTS; i++)); do
    if ! check_port $port; then
      echo $port
      return
    fi
    port=$((port + 1))
  done
  log_message "Aucun port libre trouvé après $MAX_ATTEMPTS tentatives."
  exit 1
}

function start_server {
  local port=$1
  log_message "Démarrage du serveur sur le port $port."
  PORT=$port node server.mjs &
  local pid=$!
  log_message "Serveur lancé avec le PID $pid."
  echo $pid > .server_pid
}

function main {
  log_message "----------------------------------"
  log_message "Début de la gestion du serveur."

  # Recherche d'un port libre
  local free_port
  free_port=$(find_free_port $PORT)

  # Arrêt des processus existants sur le port libre (au cas où)
  stop_process_on_port $free_port

  # Lancement du serveur
  start_server $free_port

  log_message "Gestion du serveur terminée. Serveur en cours d'exécution sur le port $free_port."
}

# Appel de la fonction principale
main
