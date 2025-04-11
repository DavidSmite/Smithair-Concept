import express from 'express'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'
import Visit from '../models/visitModel.js'
import User from '../models/userModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const currentYear = new Date().getFullYear()

    // Initialisation des tableaux mensuels
    const monthlyRevenue = Array(12).fill(0)
    const monthlyOrders = Array(12).fill(0)
    const monthlyVisits = Array(12).fill(0)

    // 🎯 1. Calcul revenus, commandes et visites mensuels
    const orders = await Order.find({ createdAt: { $gte: new Date(`${currentYear}-01-01`) } })
    orders.forEach(order => {
      const month = new Date(order.createdAt).getMonth()
      monthlyRevenue[month] += order.total
      monthlyOrders[month] += 1
    })

    const visits = await Visit.find({ createdAt: { $gte: new Date(`${currentYear}-01-01`) } })
    visits.forEach(v => {
      const month = new Date(v.createdAt).getMonth()
      monthlyVisits[month] += 1
    })

    // 🎯 2. Top 5 produits les plus vendus
    const products = await Product.find({})
    const productSales = products.map(p => ({
      name: p.name,
      quantitySold: p.quantitySold || 0
    }))
    const topProducts = productSales
      .sort((a, b) => b.quantitySold - a.quantitySold)
      .slice(0, 5)

    // 🎯 3. Taux de conversion
    const totalOrders = orders.length
    const totalVisits = visits.length
    const conversionRate = totalVisits > 0 ? ((totalOrders / totalVisits) * 100).toFixed(2) : '0.00'

    // 🎯 4. Classement top clients
    const clientsMap = {}
    orders.forEach(order => {
      if (!order.user) return
      const userId = order.user.toString()
      if (!clientsMap[userId]) {
        clientsMap[userId] = { userId, totalSpent: 0, orderCount: 0 }
      }
      clientsMap[userId].totalSpent += order.total
      clientsMap[userId].orderCount += 1
    })

    const clientEntries = Object.values(clientsMap)
    const topClients = await Promise.all(clientEntries.map(async (client) => {
      const user = await User.findById(client.userId)
      return {
        name: user?.name || 'Inconnu',
        totalSpent: client.totalSpent,
        orderCount: client.orderCount,
      }
    }))

    const topClientsSorted = topClients.sort((a, b) => b.totalSpent - a.totalSpent)

    // 🎯 5. Formatage final
    const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
    const revenuesByMonth = monthNames.map((month, index) => ({
      month,
      total: monthlyRevenue[index],
      orders: monthlyOrders[index],
      visits: monthlyVisits[index],
    }))

    res.json({
      revenuesByMonth,
      topProducts,
      conversionRate,
      topClients: topClientsSorted,
    })

  } catch (error) {
    console.error('Erreur stats:', error)
    res.status(500).json({ message: 'Erreur récupération des stats' })
  }
})

export default router
