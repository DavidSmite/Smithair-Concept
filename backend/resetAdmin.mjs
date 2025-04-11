import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/UserCommon.mjs';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/smithair';

const resetAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connecté à MongoDB");

    const email = "admin@smithair.com".toLowerCase(); // 🔥 ANTIBUG
    const existing = await User.findOne({ email });
    if (existing) {
      await User.deleteOne({ email });
      console.log("🗑️ Ancien compte supprimé :", email);
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      email,
      password: hashedPassword,
      role: "admin",
    });

    console.log("🎉 Nouvel admin créé avec succès !");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur reset admin :", error);
    process.exit(1);
  }
};

resetAdmin();
