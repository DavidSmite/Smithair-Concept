const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// ✅ Route d'inscription
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Vérifie si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: '❌ Utilisateur déjà existant' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: '✅ Inscription réussie' });
    } catch (error) {
        console.error("🚨 Erreur lors de l'inscription :", error);
        res.status(500).json({ error: '❌ Erreur lors de l\'inscription' });
    }
});

module.exports = router;
