const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Obtenir toutes les commandes
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Passer une commande
router.post("/", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({ message: "Commande créée avec succès !" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
