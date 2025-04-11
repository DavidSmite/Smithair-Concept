import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const period = req.query.period || "all";
    let dateFilter = {};

    const now = new Date();
    const currentYear = now.getFullYear();
    let fromDate = null;
    let toDate = null;

    if (["Q1", "Q2", "Q3", "Q4"].includes(period)) {
      const ranges = {
        Q1: [new Date(`${currentYear}-01-01`), new Date(`${currentYear}-03-31T23:59:59`)],
        Q2: [new Date(`${currentYear}-04-01`), new Date(`${currentYear}-06-30T23:59:59`)],
        Q3: [new Date(`${currentYear}-07-01`), new Date(`${currentYear}-09-30T23:59:59`)],
        Q4: [new Date(`${currentYear}-10-01`), new Date(`${currentYear}-12-31T23:59:59`)],
      };
      [fromDate, toDate] = ranges[period];
      dateFilter = { createdAt: { $gte: fromDate, $lte: toDate } };
    } else if (period !== "all") {
      const days = parseInt(period);
      fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - days);
      dateFilter = { createdAt: { $gte: fromDate } };
    }

    const orders = await Order.find(dateFilter);

    const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);
    const averageBasket = orders.length > 0 ? totalRevenue / orders.length : 0;
    const totalOrders = orders.length;

    const revenueByMonthMap = {};
    orders.forEach((o) => {
      const date = new Date(o.createdAt);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      revenueByMonthMap[key] = (revenueByMonthMap[key] || 0) + o.total;
    });

    const revenueByMonth = {
      labels: Object.keys(revenueByMonthMap),
      datasets: [
        {
          label: "Revenus",
          data: Object.values(revenueByMonthMap),
          backgroundColor: "#3B82F6",
        },
      ],
    };

    const productMap = {};
    orders.forEach((o) => {
      o.items.forEach((item) => {
        productMap[item.name] = (productMap[item.name] || 0) + item.quantity;
      });
    });

    const topProducts = {
      labels: Object.keys(productMap),
      datasets: [
        {
          label: "Quantité vendue",
          data: Object.values(productMap),
          backgroundColor: [
            "#F59E0B",
            "#10B981",
            "#3B82F6",
            "#EF4444",
            "#8B5CF6",
          ],
        },
      ],
    };

    const ordersByDayMap = {};
    orders.forEach((o) => {
      const date = new Date(o.createdAt).toISOString().slice(0, 10);
      ordersByDayMap[date] = (ordersByDayMap[date] || 0) + 1;
    });

    const ordersByDay = {
      labels: Object.keys(ordersByDayMap),
      datasets: [
        {
          label: "Commandes",
          data: Object.values(ordersByDayMap),
          borderColor: "#EF4444",
          backgroundColor: "#FCA5A5",
        },
      ],
    };

    const clientsMap = {};
    orders.forEach((o) => {
      clientsMap[o.customer] = (clientsMap[o.customer] || 0) + o.total;
    });

    const topClientsSorted = Object.entries(clientsMap).sort((a, b) => b[1] - a[1]);

    const topClientsChart = {
      labels: topClientsSorted.slice(0, 5).map(([name]) => name),
      datasets: [
        {
          label: "Total dépensé",
          data: topClientsSorted.slice(0, 5).map(([, total]) => total),
          backgroundColor: [
            "#3B82F6",
            "#10B981",
            "#F59E0B",
            "#EF4444",
            "#8B5CF6",
          ],
        },
      ],
    };

    const topClientsTable = topClientsSorted.map(([name, total]) => ({ name, total }));

    res.json({
      totalRevenue,
      averageBasket,
      totalOrders,
      revenueByMonth,
      topProducts,
      ordersByDay,
      topClientsChart,
      topClientsTable,
    });
  } catch (err) {
    console.error("❌ Erreur dans /api/stats:", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
