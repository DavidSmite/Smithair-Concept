import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur HTTP natif !');
});

router.get('/hello', (req, res) => {
  res.send('Hello World!');
});

export default router;
