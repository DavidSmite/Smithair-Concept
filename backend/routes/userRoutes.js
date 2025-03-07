const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

console.log("✅ userRoutes.js est bien chargé !");

// ✅ Routes utilisateurs
router.get('/', userController.getAllUsers); // Suppression du doublon
router.get('/:id', userController.getUserById);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
