import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.mjs'
import statsRoutes from './routes/statsRoutes.mjs'
import productsRoutes from './routes/productsRoutes.mjs'

dotenv.config()
const app = express()

app.use(cors({ origin: 'http://localhost:3010', credentials: true }))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/stats', statsRoutes)
app.use('/api/products', productsRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`)
})
