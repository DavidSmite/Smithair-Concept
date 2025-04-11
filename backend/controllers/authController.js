import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: "Email introuvable" });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false, // mettre true en production avec HTTPS
        sameSite: "lax",
        maxAge: 2 * 60 * 60 * 1000,
      })
      .json({ message: "Connexion réussie ✅" });
  } catch (err) {
    console.error("❌ Erreur login :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
