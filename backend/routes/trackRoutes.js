import express from "express";
import Visit from "../models/Visit.js";

const router = express.Router();

// POST /api/track
router.post("/", async (req, res) => {
  try {
    const { path } = req.body;
    if (!path) return res.status(400).json({ error: "Path manquant" });

    await Visit.create({ path });
    res.status(201).json({ message: "Visite enregistrée 📍" });
  } catch (err) {
    console.error("❌ Erreur POST /api/track :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// GET /api/track
router.get("/", async (req, res) => {
  try {
    const stats = await Visit.aggregate([
      { $group: { _id: "$path", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json(stats.map(entry => ({
      path: entry._id,
      visits: entry.count
    })));
  } catch (err) {
    console.error("❌ Erreur GET /api/track :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
