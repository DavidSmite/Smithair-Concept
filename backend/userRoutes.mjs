// Dans userRoutes.mjs
import express from 'express';
const router = express.Router();

router.post('/users', (req, res) => {
  const user = req.body;
  res.json({ message: 'User created successfully', user });
});

export default router;
