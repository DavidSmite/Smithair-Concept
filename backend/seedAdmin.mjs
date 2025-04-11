import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Admin from './models/adminModel.mjs';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/smithair';

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connecté à MongoDB');

    const existingAdmin = await Admin.findOne({ email: 'admin@smithair.com' });
    if (existingAdmin) {
      console.log('ℹ️ Un admin existe déjà : admin@smithair.com');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = new Admin({
      email: 'admin@smithair.com',
      password: hashedPassword,
      role: 'admin',
      username: 'admin-smith' // ✅ Ajout du champ pour éviter l’erreur
    });

    await admin.save();
    console.log('🎉 Admin inséré avec succès : admin@smithair.com / admin123');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur seed admin :', error);
    process.exit(1);
  }
};

seedAdmin();
