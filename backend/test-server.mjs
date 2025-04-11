// test-server.mjs - Version avec une route JSON

import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/json') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message: 'Voici des données JSON!', timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bienvenue sur le serveur HTTP natif !');
  }
});

server.listen(5050, '127.0.0.1', () => {
  console.log(`Serveur démarré sur http://127.0.0.1:5050`);
  console.log(`PID : ${process.pid}`);
});
