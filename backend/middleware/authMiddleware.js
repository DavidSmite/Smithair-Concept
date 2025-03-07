const jwt = require('jsonwebtoken');

// ✅ Middleware pour vérifier l'authentification
exports.verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "⛔ Accès refusé, token manquant !" });

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        console.log("🔓 Utilisateur authentifié :", req.user); // Debug
        next();
    } catch (err) {
        console.log("⛔ Token invalide !");
        res.status(400).json({ error: "⛔ Token invalide !" });
    }
};

// ✅ Middleware pour vérifier si l'utilisateur est admin
exports.verifyAdmin = (req, res, next) => {
    console.log("🔍 Vérification du rôle de l'utilisateur :", req.user);

    if (!req.user || req.user.role !== "admin") {
        console.log("❌ Accès refusé : l'utilisateur n'est pas admin !");
        return res.status(403).json({ error: "⛔ Accès refusé, droit administrateur requis !" });
    }

    console.log("✅ Accès autorisé : l'utilisateur est admin !");
    next();
};
