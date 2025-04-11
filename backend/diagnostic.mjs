#!/usr/bin/env bash

# Récupérer les PIDs des processus utilisant le port 5050
PIDS=$(lsof -t -i :5050)

# Si des PIDs ont été trouvés, les tuer
if [ -n "$PIDS" ]; then
  echo "Killing processes using port 5050..."
  kill -9 $PIDS
else
  echo "No processes are using port 5050."
fi
