const mongoose = require('mongoose');
const User = require('../models/User');

// ✅ Récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
  try {
    console.log("✅ Route GET /api/users appelée !");
    const users = await User.find({}, '-password'); // Exclut les mots de passe
    if (!users || users.length === 0) {
      console.log("⚠️ Aucun utilisateur trouvé.");
      return res.status(404).json({ error: "⚠️ Aucun utilisateur trouvé" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des utilisateurs:", error.message);
    res.status(500).json({ error: "❌ Erreur interne du serveur", details: error.message });
  }
};

// ✅ Récupérer un utilisateur par son ID
const getUserById = async (req, res) => {
  try {
    console.log(`🔍 Recherche de l'utilisateur avec l'ID: ${req.params.id}`);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log(`❌ ID non valide: ${req.params.id}`);
      return res.status(400).json({ error: "❌ ID utilisateur invalide", id_reçu: req.params.id });
    }

    const user = await User.findById(req.params.id, '-password');
    if (!user) {
      console.log("❌ Utilisateur non trouvé");
      return res.status(404).json({ error: "❌ Utilisateur non trouvé" });
    }

    console.log("✅ Utilisateur trouvé");
    res.status(200).json(user);
  } catch (error) {
    console.error("🚨 Erreur détaillée:", error.message);
    res.status(500).json({ error: "🚨 Erreur interne du serveur", details: error.message });
  }
};

// ✅ Inscription d'un nouvel utilisateur
const registerUser = async (req, res) => {
  try {
    console.log("🔍 Tentative d'inscription :", req.body);

    const { username, name, email, password } = req.body;
    if (!username || !name || !email || !password) {
      console.log("❌ Champs manquants :", { username, name, email, password });
      return res.status(400).json({ error: "⚠️ Tous les champs sont requis." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("⚠️ L'utilisateur existe déjà :", email);
      return res.status(400).json({ error: "⚠️ L'utilisateur existe déjà." });
    }

    console.log("✅ Création d'un nouvel utilisateur...");
    const newUser = new User({ username, name, email, password });

    console.log("🔄 Sauvegarde de l'utilisateur...");
    await newUser.save();

    console.log("✅ Utilisateur enregistré avec succès :", newUser);
    res.status(201).json({ message: "✅ Utilisateur enregistré avec succès !" });
  } catch (error) {
    console.error("🚨 Erreur détaillée lors de l'inscription :", error);
    res.status(500).json({ error: "🚨 Erreur interne du serveur", details: error.message });
  }
};

// ✅ Connexion d'un utilisateur
const loginUser = async (req, res) => {
  try {
    console.log("🔍 Tentative de connexion :", req.body.email);

    const { email, password } = req.body;
    if (!email || !password) {
      console.log("❌ Champs manquants :", { email, password });
      return res.status(400).json({ error: "⚠️ Tous les champs sont requis." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ Identifiants incorrects :", email);
      return res.status(400).json({ error: "❌ Identifiants incorrects." });
    }

    console.log("✅ Connexion réussie :", user.email);
    res.status(200).json({ message: "✅ Connexion réussie !" });
  } catch (error) {
    console.error("🚨 Erreur détaillée lors de la connexion :", error);
    res.status(500).json({ error: "🚨 Erreur interne du serveur" });
  }
};

// ✅ Export des fonctions
module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser
};
