const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Obtenir tous les produits
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ajouter un produit
router.post("/", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Produit ajouté avec succès !" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
