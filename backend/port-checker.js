#!/usr/bin/env node
import { exec, spawn } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

const findAvailablePort = async (startPort = 5050, maxAttempts = 10) => {
  for (let port = startPort; port < startPort + maxAttempts; port++) {
    try {
      await execAsync(`lsof -i :${port}`);
      console.log(`Port ${port} déjà utilisé, vérification du suivant...`);
    } catch {
      return port;
    }
  }
  throw new Error('Aucun port disponible trouvé.');
};

const runServer = (port) => {
  console.log(`Démarrage du serveur sur le port ${port}...`);
  
  const serverProcess = spawn('node', ['server.mjs', port.toString()], {
    stdio: 'inherit',
    env: { ...process.env, PORT: port.toString() }
  });
  
  serverProcess.on('exit', (code) => {
    console.log(`Le serveur s'est arrêté avec le code ${code}`);
  });
};

(async () => {
  try {
    const port = await findAvailablePort();
    runServer(port);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
