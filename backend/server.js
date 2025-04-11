import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// Charger les variables d'environnement
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/smithair";
// Middleware
app.use(express.json());
app.use(cors());
// Connexion à MongoDB avec gestion d'erreurs
mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("✅ Connexion à MongoDB établie"))
    .catch((err) => {
    console.error("❌ Erreur de connexion à MongoDB :", err);
    process.exit(1);
});
// Test route pour vérifier que le backend fonctionne
app.get("/", (req, res) => {
    res.send("🚀 Backend de Smithair Concept opérationnel !");
});
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
});
