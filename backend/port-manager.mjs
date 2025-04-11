#!/usr/bin/env node
import { promises as fs } from 'fs';
import { exec, spawn } from 'child_process';
import util from 'util';
import path from 'path';

const execAsync = util.promisify(exec);

const findAvailablePort = async () => {
  const startPort = 5050;
  const maxAttempts = 20;

  for (let port = startPort; port < startPort + maxAttempts; port++) {
    try {
      await execAsync(`lsof -i :${port}`);
      console.log(`Port ${port} déjà utilisé, vérification du suivant...`);
    } catch {
      return port;
    }
  }
  throw new Error(`Aucun port disponible trouvé entre ${startPort} et ${startPort + maxAttempts - 1}.`);
};

const backupServerFile = async (serverFilePath) => {
  try {
    const backupPath = `${serverFilePath}.backup-${Date.now()}`;
    await fs.copyFile(serverFilePath, backupPath);
    console.log(`✅ Sauvegarde créée: ${backupPath}`);
    return backupPath;
  } catch (error) {
    console.error(`⚠️ Impossible de créer une sauvegarde: ${error.message}`);
  }
};

const replacePortInServerFile = async (serverFilePath, newPort) => {
  try {
    const content = await fs.readFile(serverFilePath, 'utf-8');
    
    if (content.includes('process.env.PORT')) {
      console.log(`✅ Détection d'utilisation de process.env.PORT - Aucune modification du fichier nécessaire`);
      console.log(`   Le port sera défini par la variable d'environnement PORT=${newPort}`);
      return false;
    }
    
    const modifiedContent = content.replace(
      /const\s+(PORT|port)\s*=\s*\d+/gi,
      (match, p1) => `const ${p1} = ${newPort}`
    );
    
    const altModifiedContent = modifiedContent.replace(
      /let\s+(PORT|port)\s*=\s*\d+/gi,
      (match, p1) => `let ${p1} = ${newPort}`
    ).replace(
      /var\s+(PORT|port)\s*=\s*\d+/gi,
      (match, p1) => `var ${p1} = ${newPort}`
    ).replace(
      /app\.listen\((\d+)/g,
      (match, p1) => `app.listen(${newPort}`
    );
    
    if (content === altModifiedContent) {
      console.log(`⚠️ Attention: Aucune déclaration standard de port n'a été trouvée.`);
      console.log(`   Recherche de déclarations alternatives...`);
      
      const portPatterns = content.match(/\b(PORT|port)\b\s*=\s*[^;]+/gi);
      if (portPatterns) {
        console.log(`   Motifs de port détectés: ${portPatterns.join(", ")}`);
        
        const hasFallback = portPatterns.some(pattern => pattern.includes('||'));
        if (hasFallback) {
          console.log(`   Détection de valeur de fallback - Aucune modification nécessaire.`);
          console.log(`   Le port sera passé via les arguments de ligne de commande.`);
          return false;
        }
      }
      
      console.log(`   Options disponibles:`);
      console.log(`   1. Injecter une déclaration de port en début de fichier (risqué)`);
      console.log(`   2. Passer uniquement via la variable d'environnement (recommandé)`);
      console.log(`   Choix de l'option 2 pour éviter les conflits...`);
      return false;
    }
    
    await fs.writeFile(serverFilePath, altModifiedContent);
    console.log(`✅ Port mis à jour à ${newPort} dans le fichier serveur`);
    return true;
  } catch (error) {
    console.error(`❌ Erreur lors de la mise à jour du port: ${error.message}`);
    throw error;
  }
};

const runServer = async (serverFilePath, port) => {
  try {
    const absolutePath = path.resolve(serverFilePath);
    console.log(`📂 Chemin absolu du serveur: ${absolutePath}`);
    
    console.log(`🚀 Démarrage du serveur sur le port ${port}...`);
    
    const serverArgs = [absolutePath, `--port=${port}`];
    
    console.log(`   Commande: node ${serverArgs.join(' ')}`);
    console.log(`   Variables d'environnement: PORT=${port}`);
    
    const serverProcess = spawn('node', serverArgs, {
      stdio: 'inherit',
      env: { ...process.env, PORT: port.toString() }
    });
    
    serverProcess.on('error', (error) => {
      console.error(`❌ Erreur lors du démarrage du serveur: ${error.message}`);
    });
    
    serverProcess.on('exit', (code) => {
      if (code !== 0) {
        console.error(`⚠️ Le serveur s'est arrêté avec le code ${code}`);
      }
    });
    
    process.stdin.resume();
    
    process.on('SIGINT', () => {
      console.log(`\n🛑 Arrêt du serveur sur le port ${port}...`);
      serverProcess.kill('SIGINT');
      
      setTimeout(() => {
        console.log('✅ Port-manager terminé.');
        process.exit(0);
      }, 1000);
    });
    
    console.log(`✅ Processus serveur démarré avec PID: ${serverProcess.pid}`);
    console.log(`   Appuyez sur Ctrl+C pour arrêter le serveur.`);
    
  } catch (error) {
    console.error(`❌ Erreur lors du lancement du serveur: ${error.message}`);
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
        console.error(`❌ Port invalide: ${arg.split('=')[1]}`);
        process.exit(1);
      }
    } else if (!arg.startsWith('--')) {
      serverFilePath = arg;
    }
  }
  
  console.log(`📄 Fichier serveur: ${serverFilePath}`);
  
  try {
    try {
      await fs.access(serverFilePath);
    } catch {
      console.error(`❌ Fichier serveur introuvable: ${serverFilePath}`);
      process.exit(1);
    }
    
    await backupServerFile(serverFilePath);
    
    let port;
    if (customPort) {
      console.log(`🔍 Utilisation du port spécifié: ${customPort}`);
      try {
        await execAsync(`lsof -i :${customPort}`);
        console.log(`⚠️ Attention: Le port ${customPort} est déjà utilisé`);
        console.log(`   Recherche d'un port alternatif...`);
        port = await findAvailablePort();
      } catch {
        port = customPort;
      }
    } else {
      console.log(`🔍 Recherche d'un port disponible...`);
      port = await findAvailablePort();
    }
    
    console.log(`✅ Port disponible trouvé: ${port}`);
    
    const fileModified = await replacePortInServerFile(serverFilePath, port);
    
    if (!fileModified) {
      console.log(`ℹ️ Aucune modification du fichier serveur n'a été effectuée.`);
      console.log(`   Le port sera configuré via la variable d'environnement PORT=${port} et l'argument --port=${port}.`);
    }
    
    await runServer(serverFilePath, port);
    
  } catch (error) {
    console.error(`❌ Une erreur s'est produite: ${error.message}`);
    process.exit(1);
  }
};

main();
