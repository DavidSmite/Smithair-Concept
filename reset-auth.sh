#!/bin/bash

echo "🔁 Restauration de authController.mjs..."

cd backend/controllers || exit 1

cat > authController.mjs <<EOF
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/adminModel.mjs';

export const login = async (req, res) => {
  console.log('🔐 Requête login reçue :', req.body);

  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: 'Compte introuvable.' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Mot de passe incorrect.' });

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      maxAge: 3600000,
    });

    res.status(200).json({
      token,
      user: {
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('❌ Erreur login backend :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};
EOF

echo "✅ authController.mjs restauré avec succès."
