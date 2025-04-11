#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const organizeFiles = async () => {
  const baseDir = process.cwd();

  // Dictionnaire pour mapper les types de fichiers aux dossiers
  const typeMap = {
    controller: 'controllers',
    route: 'routes',
    model: 'models',
    middleware: 'middlewares',
    util: 'utils',
    config: 'config',
  };

  try {
    // Lire tous les fichiers du répertoire courant
    const files = await fs.readdir(baseDir);

    for (const file of files) {
      const ext = path.extname(file);
      if (ext !== '.js' && ext !== '.mjs') continue;

      let destinationDir = null;

      if (file.includes('Controller')) {
        destinationDir = typeMap.controller;
      } else if (file.includes('Route')) {
        destinationDir = typeMap.route;
      } else if (file.includes('Model')) {
        destinationDir = typeMap.model;
      } else if (file.includes('Middleware')) {
        destinationDir = typeMap.middleware;
      } else if (file.includes('Util') || file.includes('Utility')) {
        destinationDir = typeMap.util;
      } else if (file.includes('Config')) {
        destinationDir = typeMap.config;
      }

      if (destinationDir) {
        const sourcePath = path.join(baseDir, file);
        const targetPath = path.join(baseDir, destinationDir, file);

        // Créer le dossier s'il n'existe pas
        await fs.mkdir(path.join(baseDir, destinationDir), { recursive: true });

        // Déplacer le fichier
        await fs.rename(sourcePath, targetPath);
        console.log(`✔ Déplacé ${file} vers ${destinationDir}/`);
      }
    }
  } catch (error) {
    console.error('❌ Erreur lors de l’organisation des fichiers:', error.message);
  }
};

organizeFiles();
