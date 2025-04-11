#!/usr/bin/env bash

# 1. Trouver un port libre
PORT=$(sh diagnostic.sh | grep -o '[0-9]*')

if [ -z "$PORT" ]; then
  echo "Aucun port libre trouvé. Vérifiez le script diagnostic.sh."
  exit 1
fi

# 2. Démarrer le serveur avec le port libre
echo "Démarrage du serveur sur le port $PORT..."
node server.mjs --port=$PORT
