import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/UserCommon.mjs"; // ✅ Correction de l'import ES Module

dotenv.config();

const RESET_DB = process.argv.includes("--reset-db");

console.log("🚀 Script de seeding en cours...");
console.log("🔍 Utilisation de l'URL :", process.env.MONGO_URI
  ? `${process.env.MONGO_URI.split('//')[0]}//*****`
  : "mongodb://localhost:27017/smithair");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/smithair");
    console.log("✅ Connexion à MongoDB établie !");

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("📂 Base de données active :", mongoose.connection.db.databaseName);
    console.log("📋 Collections disponibles :", collections.map(c => c.name));

    let existingUsers = await User.find({}, "email");
    let existingEmails = new Set(existingUsers.map(user => user.email));

    console.log("👀 Utilisateurs trouvés :", existingUsers);

    if (RESET_DB) {
      console.log("⚠️ ATTENTION : Vous êtes sur le point de supprimer tous les utilisateurs !");
      console.log("⚠️ Appuyez sur Ctrl+C pour annuler, ou attendez 5 secondes pour continuer...");
      await new Promise(resolve => setTimeout(resolve, 5000));

      console.log("🗑️ Suppression des utilisateurs existants...");
      await User.deleteMany({});
      console.log("✅ Base de données réinitialisée !");
      existingUsers = await User.find({}, "email");
      existingEmails = new Set(existingUsers.map(user => user.email));
    }

    const users = [
      {
        username: "admin",
        name: "Administrateur",
        email: "admin@smithair.com",
        password: await bcrypt.hash("admin123", 10),
        role: "admin",
      },
      {
        username: "user1",
        name: "Utilisateur Test",
        email: "user@smithair.com",
        password: await bcrypt.hash("user123", 10),
        role: "user",
      },
    ];

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
})();
