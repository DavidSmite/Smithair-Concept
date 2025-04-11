const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("./models/UserCommon.cjs");

dotenv.config();

const connectDB = async () => {
  try {
    console.log("🚀 Script de seeding en cours...");
    console.log("🔍 Utilisation de l'URL :", process.env.MONGO_URI ? `${process.env.MONGO_URI.split('//')[0]}//*****` : "mongodb://localhost:27017/smithair");

    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/smithair";
    await mongoose.connect(mongoURI);
    console.log("✅ Connexion à MongoDB établie !");

    console.log("📂 Base de données active :", mongoose.connection.db.databaseName);
    console.log("📋 Collections disponibles :", await mongoose.connection.db.listCollections().toArray());

    // Vérifier les utilisateurs existants
    const existingUsers = await User.find({}, "email");
    const existingEmails = new Set(existingUsers.map(user => user.email));

    console.log("👀 Utilisateurs trouvés :", JSON.stringify(existingUsers, null, 2));

    const RESET_DB = process.argv.includes("--reset-db");

    if (RESET_DB) {
      console.log("⚠️ ATTENTION : Vous êtes sur le point de supprimer tous les utilisateurs !");
      console.log("⚠️ Appuyez sur Ctrl+C pour annuler, ou attendez 5 secondes pour continuer...");
      
      await new Promise(resolve => setTimeout(resolve, 5000));

      console.log("🗑️ Suppression des utilisateurs existants...");
      await User.deleteMany({});
      console.log("✅ Base de données réinitialisée !");
    }

    // Hashage des mots de passe avant création
    const adminPasswordHash = await bcrypt.hash("admin123", 10);
    const userPasswordHash = await bcrypt.hash("user123", 10);

    // Définition des utilisateurs à créer
    const users = [
      {
        username: "admin",
        name: "Administrateur",
        email: "admin@smithair.com",
        password: adminPasswordHash,
        role: "admin",
      },
      {
        username: "user1",
        name: "Utilisateur Test",
        email: "user@smithair.com",
        password: userPasswordHash,
        role: "user",
      },
    ];

    // Filtrer les utilisateurs déjà existants pour éviter les erreurs de doublon
    const newUsers = users.filter(user => !existingEmails.has(user.email));

    if (newUsers.length > 0) {
      try {
        await User.insertMany(newUsers);
        console.log(`✅ ${newUsers.length} nouveaux utilisateurs créés avec succès !`);
      } catch (insertError) {
        console.error("❌ Erreur lors de l'insertion des utilisateurs :", insertError);
      }
    } else {
      console.log("⚠️ Tous les utilisateurs existent déjà. Aucun ajout effectué.");
    }

    await mongoose.connection.close();
    console.log("🔌 Connexion MongoDB fermée");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur lors du seeding :", error);
    process.exit(1);
  }
};

connectDB();
