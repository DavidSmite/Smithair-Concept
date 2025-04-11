import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("❌ Erreur GET /products :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /api/products
router.post("/", async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;
    const newProduct = new Product({ name, description, price, imageUrl, category });
    await newProduct.save();
    res.status(201).json({ message: "Produit ajouté ✅" });
  } catch (err) {
    console.error("❌ Erreur POST /products :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// DELETE /api/products/:id
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Produit supprimé 🗑️" });
  } catch (err) {
    console.error("❌ Erreur DELETE /products :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// GET /api/products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Produit introuvable" });
    res.json(product);
  } catch (err) {
    console.error("❌ Erreur GET /products/:id :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// PATCH /api/products/:id
router.patch("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Produit non trouvé" });
    }

    res.json({ message: "Produit mis à jour ✅", product: updatedProduct });
  } catch (err) {
    console.error("❌ Erreur PATCH /products/:id :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
