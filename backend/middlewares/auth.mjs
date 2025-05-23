import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentification requise" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret_key");
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expiré, veuillez vous reconnecter" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Token invalide" });
    } else {
      return res.status(401).json({ message: "Erreur d'authentification" });
    }
  }
};

export const verifyAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Accès réservé aux administrateurs" });
  }
  next();
};
