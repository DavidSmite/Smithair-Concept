import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

const fakeUsers = [
  {
    email: 'admin@smithair.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    email: 'user@example.com',
    password: 'user123',
    role: 'user',
  },
]

router.post('/login', (req, res) => {
  const { email, password } = req.body

  const user = fakeUsers.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    return res.status(401).json({ message: 'Identifiants invalides' })
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET || 'smithair-secret',
    { expiresIn: '2h' }
  )

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: false, // false en dev
    maxAge: 1000 * 60 * 60 * 2,
  })

  res.status(200).json({ message: 'Connexion réussie', role: user.role })
})

export default router
