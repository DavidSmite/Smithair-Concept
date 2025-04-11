#!/bin/bash

echo "🧼 RÉINITIALISATION TOTALE DE SERVER.MJS 🔁"

# Aller dans backend
cd backend || exit 1

# Sauvegarde actuelle au cas où
cp server.mjs server.mjs.bak

# Écriture du fichier server.mjs
cat > server.mjs <<EOF
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.mjs';
import productsRoutes from './routes/productsRoutes.mjs';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
  'http://127.0.0.1:3002',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(\`⛔ CORS refusé pour : \${origin}\`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/smithair')
  .then(() => console.log('✅ Connexion à MongoDB établie'))
  .catch((err) => console.error('❌ Erreur de connexion MongoDB :', err));

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);

app.listen(4000, () => {
  console.log('🛡️ CORS autorisé dynamiquement');
  console.log('🚀 Backend en écoute sur le port 4000');
});
EOF

echo "✅ Fichier server.mjs recollé proprement"
echo "🚀 Lancement..."
node server.mjs
