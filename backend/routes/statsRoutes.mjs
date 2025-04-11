import express from 'express'
const router = express.Router()

// 🔧 Données factices pour test stats
router.get('/', (req, res) => {
  res.json({
    totalOrders: 124,
    totalRevenue: 4820,
    monthlySales: [320, 460, 580, 610, 720, 850, 970, 1100, 980, 890, 780, 640],
  })
})

export default router
