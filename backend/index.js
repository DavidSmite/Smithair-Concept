require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB Atlas (Sans options dépréciées)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/smithair';
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connecté à MongoDB Atlas'))
    .catch(err => console.error('❌ Erreur de connexion à MongoDB :', err));

// LOG toutes les requêtes entrantes (DEBUG)
app.use((req, res, next) => {
    console.log(`⚡ Requête reçue : ${req.method} ${req.url}`);
    next();
});

// ROUTE TEST (Vérifier que l'API répond)
app.get('/api/test', (req, res) => {
    res.json({ message: '✅ API Backend fonctionne correctement ! 🚀' });
});

// ROUTE ACCUEIL (Voir si le backend tourne)
app.get('/', (req, res) => {
    res.send('🎉 Backend Smithair Concept en ligne !');
});

// Importation des routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);

// Middleware pour les routes non trouvées
app.use((req, res) => {
    res.status(404).json({ error: '❌ Route non trouvée' });
});

// Lancement du serveur avec le bon port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT} (Render ou Local)`);
});
