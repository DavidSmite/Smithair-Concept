#!/bin/bash

echo "🔁 Restauration de productsController.mjs + productsRoutes.mjs"

cd backend/controllers || exit 1

cat > productsController.mjs <<EOF
import Wig from '../models/Wig.mjs';

export const getAllWigs = async (req, res) => {
  try {
    const wigs = await Wig.find().sort({ createdAt: -1 });
    res.status(200).json(wigs);
  } catch (error) {
    console.error('❌ Erreur fetch perruques :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const createWig = async (req, res) => {
  try {
    const newWig = new Wig(req.body);
    const saved = await newWig.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Erreur création :', error);
    res.status(400).json({ message: 'Erreur de validation' });
  }
};
EOF

cd ../routes || exit 1

cat > productsRoutes.mjs <<EOF
import express from 'express';
import { getAllWigs, createWig } from '../controllers/productsController.mjs';

const router = express.Router();

router.get('/', getAllWigs);
router.post('/', createWig);

export default router;
EOF

echo "✅ Route /api/products restaurée avec succès."
