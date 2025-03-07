const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Ajustez le chemin selon votre structure
const authMiddleware = require('../middlewares/auth'); // Si vous avez un middleware d'authentification

// Routes utilisateurs
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
