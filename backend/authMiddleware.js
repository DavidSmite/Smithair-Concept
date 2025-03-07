const jwt = require('jsonwebtoken');

// Middleware pour vérifier l'authentification
exports.verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // ✅ Vérifier et extraire le token
    if (!token) {
        console.log("⛔ Accès refusé : Token manquant !");
        return res.status(401).json({ error: "⛔ Accès refusé, token manquant !" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        console.log("✅ Token vérifié :", req.user); // 🔥 LOG
        next();
    } catch (err) {
        console.error("❌ Erreur de vérification du token :", err);
        res.status(400).json({ error: "⛔ Token invalide !" });
    }
};

// Middleware pour vérifier si l'utilisateur est admin
exports.verifyAdmin = (req, res, next) => {
    console.log("🔍 Vérification du rôle :", req.user?.role); // 🔥 LOG

    if (!req.user || req.user.role !== "admin") {
        console.log("⛔ Accès refusé : Pas admin !");
        return res.status(403).json({ error: "⛔ Accès refusé, droit administrateur requis !" });
    }

    console.log("✅ Accès admin accordé !");
    next();
};
