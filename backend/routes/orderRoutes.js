import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// GET /api/orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("❌ Erreur GET /orders :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    const { customer, items, total } = req.body;
    const newOrder = new Order({ customer, items, total });
    await newOrder.save();
    res.status(201).json({ message: "Commande ajoutée ✅" });
  } catch (err) {
    console.error("❌ Erreur POST /orders :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
