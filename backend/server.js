// Force redeploy

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const portfinder = require('portfinder');
const User = require('./models/User');

const app = express();

app.use(express.json());
app.use(cors());

// DEBUG pour voir si `MONGO_URI` est bien chargé
console.log("🔍 DEBUG: Tentative de connexion à MongoDB avec l'URI:", 
  process.env.MONGO_URI ? `${process.env.MONGO_URI.substring(0, 20)}...` : 'non défini');

// Connexion à MongoDB avec l’URI en dur
mongoose.connect("mongodb+srv://smithairadmin:Smithair2024@smithairdb.owszj.mongodb.net/SmithairDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('✅ Connexion à MongoDB établie'))
  .catch(err => console.error('❌ Erreur de connexion à MongoDB:', err));

// Test API
app.get('/test', (req, res) => res.json({ message: "✅ Le serveur fonctionne bien !" }));

// Récupérer tous les utilisateurs
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "❌ Erreur lors de la récupération des utilisateurs" });
  }
});

// Récupérer un utilisateur par ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id, '-password');
    user ? res.json(user) : res.status(404).json({ error: "❌ Utilisateur non trouvé" });
  } catch (error) {
    res.status(500).json({ error: "❌ Erreur lors de la récupération de l'utilisateur" });
  }
});

// Créer un nouvel utilisateur
app.post('/api/users', async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ error: "❌ Tous les champs sont requis" });

    const newUser = new User({ username, name, email, password });
    await newUser.save();
    res.status(201).json({ message: "✅ Utilisateur créé avec succès !" });
  } catch (error) {
    res.status(500).json({ error: "❌ Erreur lors de la création de l'utilisateur" });
  }
});

// Mettre à jour un utilisateur
app.put('/api/users/:id', async (req, res) => {
  try {
    const { username, name, email } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { username, name, email }, { new: true });
    user ? res.json(user) : res.status(404).json({ error: "❌ Utilisateur non trouvé" });
  } catch (error) {
    res.status(500).json({ error: "❌ Erreur lors de la mise à jour de l'utilisateur" });
  }
});

// Supprimer un utilisateur
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    user ? res.json({ message: "✅ Utilisateur supprimé", user }) : res.status(404).json({ error: "❌ Utilisateur non trouvé" });
  } catch (error) {
    res.status(500).json({ error: "❌ Erreur lors de la suppression de l'utilisateur" });
  }
});

// Gestion des routes inexistantes
app.use((req, res) => res.status(404).json({ error: "❌ Route introuvable" }));

// Trouver un port disponible et démarrer le serveur
portfinder.basePort = process.env.PORT || 3000;

portfinder.getPort((err, availablePort) => {
    if (err) {
        console.error('❌ Erreur lors de la recherche d\'un port disponible:', err);
        return;
    }

    app.listen(availablePort, () => {
        console.log(`�� Serveur backend démarré sur http://localhost:${availablePort}`);
    });
});
