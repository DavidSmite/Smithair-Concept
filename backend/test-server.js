const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Requête reçue: ${req.method} ${req.url}`);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Serveur HTTP natif fonctionne!');
});

server.listen(5050, '0.0.0.0', () => {
  console.log(`Serveur démarré sur http://localhost:5050`);
  console.log(`PID: ${process.pid}`);
});

console.log('Serveur en cours d\'exécution. Appuyez sur Ctrl+C pour arrêter.');
