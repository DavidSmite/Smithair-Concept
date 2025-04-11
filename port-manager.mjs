#!/usr/bin/env node
import { exec, spawn } from 'child_process';
import util from 'util';
import path from 'path';

const execAsync = util.promisify(exec);

const findAvailablePort = async () => {
  const startPort = 5050;
  const maxAttempts = 20;

  for (let port = startPort; port < startPort + maxAttempts; port++) {
    try {
      await execAsync(lsof -i :${port});
      console.log(Port ${port} déjà utilisé, vérification du suivant...);
    } catch {
      return port;
    }
  }
  throw new Error(Aucun port disponible trouvé entre ${startPort} et ${startPort + maxAttempts - 1}.);
};

const runServer = async (serverFilePath, port) => {
  try {
    const absolutePath = path.resolve(serverFilePath);
    console.log(📂 Chemin absolu du serveur: ${absolutePath});
    
    console.log(🚀 Démarrage du serveur sur le port ${port}...);
    console.log(   Méthode: Variable d'environnement PORT=${port});
    
    const serverProcess = spawn('node', [absolutePath], {
      stdio: 'inherit',
      env: { ...process.env, PORT: port.toString() }
    });
    
    serverProcess.on('error', (error) => {
      console.error(❌ Erreur lors du démarrage du serveur: ${error.message});
    });
    
    serverProcess.on('exit', (code) => {
      if (code !== 0) {
        console.error(⚠️ Le serveur s'est arrêté avec le code ${code});
      }
    });
    
    process.stdin.resume();
    
    process.on('SIGINT', () => {
      console.log(\n🛑 Arrêt du serveur sur le port ${port}...);
      serverProcess.kill('SIGINT');
      
      setTimeout(() => {
        console.log('✅ Port-manager terminé.');
        process.exit(0);
      }, 1000);
    });
    
    console.log(✅ Processus serveur démarré avec PID: ${serverProcess.pid});
    console.log(   Appuyez sur Ctrl+C pour arrêter le serveur.);
    
  } catch (error) {
    console.error(❌ Erreur lors du lancement du serveur: ${error.message});
    throw error;
  }
};

const main = async () => {
  console.log('🔌 PORT-MANAGER - Gestionnaire automatique de ports pour serveurs Node.js');
  console.log('='.repeat(70));
  
  const args = process.argv.slice(2);
  let serverFilePath = 'server.mjs';
  let customPort = null;
  
  for (const arg of args) {
    if (arg.startsWith('--port=')) {
      customPort = parseInt(arg.split('=')[1]);
      if (isNaN(customPort)) {
        console.error(❌ Port invalide: ${arg.split('=')[1]});
        process.exit(1);
      }
    } else if (!arg.startsWith('--')) {
      serverFilePath = arg;
    }
  }
  
  console.log(📄 Fichier serveur: ${serverFilePath});
  
  try {
    try {
      await execAsync(ls ${serverFilePath});
    } catch {
      console.error(❌ Fichier serveur introuvable: ${serverFilePath});
      process.exit(1);
    }
    
    let port;
    if (customPort) {
      console.log(🔍 Utilisation du port spécifié: ${customPort});
      try {
        await execAsync(lsof -i :${customPort});
        console.log(⚠️ Attention: Le port ${customPort} est déjà utilisé);
        console.log(   Recherche d'un port alternatif...);
        port = await findAvailablePort();
      } catch {
        port = customPort;
      }
    } else {
      console.log(🔍 Recherche d'un port disponible...);
      port = await findAvailablePort();
    }
    
    console.log(✅ Port disponible trouvé: ${port});
    console.log(ℹ️ Le port sera configuré via la variable d'environnement PORT=${port});
    
    await runServer(serverFilePath, port);
    
  } catch (error) {
    console.error(❌ Une erreur s'est produite: ${error.message});
    process.exit(1);
  }
};

main();
