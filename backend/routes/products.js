const express = require('express');
const Product = require('../models/Product'); // Assure-toi que le modèle existe bien
const router = express.Router();

// ✅ Obtenir tous les produits
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: '❌ Erreur lors de la récupération des produits' });
    }
});

// ✅ Ajouter un produit
router.post('/', async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const newProduct = new Product({ name, description, price, stock });
        await newProduct.save();
        res.status(201).json({ message: '✅ Produit ajouté avec succès' });
    } catch (error) {
        res.status(500).json({ error: '❌ Erreur lors de l\'ajout du produit' });
    }
});

// ✅ Supprimer un produit
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: '✅ Produit supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: '❌ Erreur lors de la suppression du produit' });
    }
});

module.exports = router;
