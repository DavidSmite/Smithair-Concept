#!/bin/bash

PORT=$1
PID=$(lsof -ti tcp:$PORT)

if [ -n "$PID" ]; then
  kill -9 $PID
  echo "✅ Port $PORT libéré (processus $PID tué)."
else
  echo "✅ Aucun processus ne bloque le port $PORT."
fi
