import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/UserCommon.mjs";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/smithair";

const run = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connecté à MongoDB");

    const users = await User.find({});
    if (users.length === 0) {
      console.log("❌ Aucun utilisateur trouvé.");
    } else {
      console.log("👥 Liste des utilisateurs en base :");
      users.forEach((u, i) => {
        console.log(`→ ${i + 1}. ${u.email} | role: ${u.role}`);
      });
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur :", error);
    process.exit(1);
  }
};

run();
