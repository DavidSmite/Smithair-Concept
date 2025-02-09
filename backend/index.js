const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connecté à MongoDB Atlas");
    })
    .catch((err) => {
        console.log("❌ Erreur de connexion MongoDB :", err);
    });

// Routes API
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
