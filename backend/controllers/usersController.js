// 🔄 Modifier un utilisateur
exports.updateUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const userId = req.params.id;

        console.log(`🔄 Mise à jour de l'utilisateur ${userId}`);

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "❌ Utilisateur non trouvé" });
        }

        if (username) user.username = username;
        if (email) user.email = email;
        if (role) user.role = role;
        if (password) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(password, saltRounds);
        }

        await user.save();
        console.log("✅ Mise à jour réussie !");
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
    updateUser,  //const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assure-toi que ce fichier existe bien

// 🔄 Modifier un utilisateur
exports.updateUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const userId = req.params.id;

        console.log(`🔄 Mise à jour de l'utilisateur ${userId}`);

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "❌ Utilisateur non trouvé" });
        }

        // Mise à jour des champs
        if (username) user.username = username;
        if (email) user.email = email;
        if (role) user.role = role;
        if (password) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(password, saltRounds);
        }

        await user.save();
        console.log("✅ Mise à jour réussie !");
        res.status(200).json({ message: "✅ Mise à jour réussie !", user });

    } catch (error) {
        console.error("🚨 Erreur lors de la mise à jour :", error);
        res.status(500).json({ error: "🚨 Erreur interne du serveur" });
    }
};

// 📋 Vérifie que les autres exports sont bien définis dans le fichier
module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    updateUser,  // ✅ Assure-toi que cette ligne est bien présente !
    deleteUser
};
    deleteUser
};
