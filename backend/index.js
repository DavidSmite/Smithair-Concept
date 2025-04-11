const express = require('express');
const portfinder = require('portfinder');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("🚀 Serveur fonctionnel !");
});

// Démarrer la recherche d'un port à partir de 10000
portfinder.basePort = 10000;

portfinder.getPort((err, availablePort) => {
    if (err) {
        console.error('❌ Erreur lors de la recherche d\'un port disponible:', err);
        return;
    }

    app.listen(availablePort, () => {
        console.log(`🚀 Serveur backend démarré sur http://localhost:${availablePort}`);
    }).on('error', (err) => {
        console.error("❌ Impossible de démarrer le serveur :", err);
    });
});
// Petite modification pour forcer le redéploiement
// Petit changement pour forcer le redeploiement
