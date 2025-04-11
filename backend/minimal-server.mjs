// minimal-server.mjs
// Serveur Express minimaliste pour tester les connexions
// Lance-le avec: node minimal-server.mjs
import express from 'express';
import os from 'os';

const app = express();
const PORT = 5050;

// Middleware pour logger toutes les requêtes
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} depuis ${req.ip}`);
  next();
});

// Route d'accueil
app.get('/', (req, res) => {
  res.send('✅ Serveur minimal fonctionne!');
});

// Route API de test
app.get('/api/test', (req, res) => {
  res.json({ success: true, message: '✅ API fonctionne!' });
});

// Fonction pour obtenir l'adresse IP locale
const getLocalIP = () => {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1';
};

// Démarrer le serveur
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✅ Serveur minimal démarré sur :`);
  console.log(`   - Localhost: http://localhost:${PORT}`);
  console.log(`   - Réseau local: http://${getLocalIP()}:${PORT}`);
  console.log('\n📌 Infos du serveur :');
  console.log(`   - PID: ${process.pid}`);
  console.log(`   - Node.js: ${process.version}`);
  console.log(`   - Port: ${PORT}`);
  console.log(`   - OS: ${process.platform}`);
  console.log(`   - Répertoire: ${process.cwd()}`);
  console.log('\n⏳ Serveur en cours d\'exécution... (Ctrl+C pour arrêter)\n');
});

// Gérer les signaux pour un arrêt propre
process.on('SIGINT', () => {
  console.log('\n🛑 Arrêt du serveur...');
  server.close(() => {
    console.log('✅ Serveur arrêté proprement.');
    process.exit(0);
  });
});
