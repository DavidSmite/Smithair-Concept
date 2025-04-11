import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET /api/users?page=1&limit=10&search=...&sort=name&order=asc
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const sort = req.query.sort || "name";
    const order = req.query.order === "desc" ? -1 : 1;

    const filter = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { role: { $regex: search, $options: "i" } }
      ]
    };

    const total = await User.countDocuments(filter);

    const users = await User.find(filter)
      .sort({ [sort]: order })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      total,
      page,
      limit,
      users
    });
  } catch (err) {
    console.error("❌ Erreur dans GET /api/users :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// DELETE /api/users/:id
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deleted = await User.findByIdAndDelete(userId);
    if (!deleted) {
      return res.status(404).json({ error: "Utilisateur introuvable" });
    }
    res.json({ message: "Utilisateur supprimé" });
  } catch (err) {
    console.error("❌ Erreur suppression :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
