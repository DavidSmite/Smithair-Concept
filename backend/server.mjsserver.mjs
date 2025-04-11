kimport express from 'express';

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Définition de la route POST /api/users
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    res.status(201).json({ message: 'User added successfully', user: { name, email } });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

// Lancement du serveur
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
