import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

// 🔐 Route de connexion : génère un token
router.post('/login', (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email requis' })
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
  res
    .cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false, // ⚠️ à passer à true en prod avec HTTPS
    })
    .json({ success: true })
})

// 🔐 Route de vérification du token (utilisée dans /admin)
router.get('/check', (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ error: 'Non authentifié' })
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET)
    res.json({ success: true })
  } catch (err) {
    res.status(401).json({ error: 'Token invalide ou expiré' })
  }
})

export default router
