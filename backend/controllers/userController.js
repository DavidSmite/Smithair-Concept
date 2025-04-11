const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ✅ Inscription d'un utilisateur
const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        console.log("📩 Tentative d'inscription :", { username, email });

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "❌ Un utilisateur avec cet email existe déjà !" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role: role || 'user' });

        await newUser.save();
        console.log("✅ Utilisateur inscrit avec succès :", newUser);
        res.status(201).json({ message: "✅ Utilisateur inscrit avec succès !" });

    } catch (error) {
        console.error("🚨 Erreur lors de l'inscription :", error);
        res.status(500).json({ error: "🚨 Erreur interne du serveur" });
    }
};

// 🔑 Connexion d'un utilisateur
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("🔑 Tentative de connexion :", email);

        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ Utilisateur introuvable");
            return res.status(400).json({ error: "❌ Email ou mot de passe incorrect" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log("❌ Mot de passe incorrect");
            return res.status(400).json({ error: "❌ Email ou mot de passe incorrect" });
        }

        const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        console.log("✅ Connexion réussie, Token généré !");
        res.status(200).json({ message: "✅ Connexion réussie !", token });

    } catch (error) {
        console.error("🚨 Erreur interne du serveur :", error);
        res.status(500).json({ error: "🚨 Erreur interne du serveur" });
    }
};

// 📋 Récupérer tous les utilisateurs (admin uniquement)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password");
        res.status(200).json(users);
    } catch (error) {
        console.error("🚨 Erreur lors de la récupération des utilisateurs :", error);
        res.status(500).json({ error: "🚨 Erreur interne du serveur" });
    }
};

// 🔄 Modifier un utilisateur avec logs détaillés
const updateUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const userId = req.params.id;

        console.log("🔍 Requête PUT reçue !");
        console.log("🆔 ID reçu :", userId);
        console.log("📥 Corps reçu :", req.body);

        if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
            console.log("❌ ID utilisateur invalide :", userId);
            return res.status(400).json({ error: "❌ ID utilisateur invalide" });
        }

        const user = await User.findById(userId);
        if (!user) {
            console.log("❌ Aucun utilisateur trouvé avec cet ID :", userId);
            return res.status(404).json({ error: "❌ Utilisateur non trouvé" });
        }

        if (username) user.username = username;
        if (email) user.email = email;
        if (role) user.role = role;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();
        console.log("✅ Mise à jour réussie !", user);
        res.status(200).json({ message: "✅ Mise à jour réussie !", user });

    } catch (error) {
        console.error("🚨 Erreur lors de la mise à jour :", error);
        res.status(500).json({ error: "🚨 Erreur interne du serveur" });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    updateUser
};
