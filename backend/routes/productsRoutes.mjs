import express from 'express'
import fs from 'fs'
import path from 'path'

const router = express.Router()

const DATA_FILE = path.join(process.cwd(), 'backend/data/products.json')

// ✅ GET all products
router.get('/products', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
  res.json(data)
})

// ✅ GET /api/products/:id
router.get('/products/:id', (req, res) => {
  const { id } = req.params
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
  const product = data.find((p) => p.id === Number(id))

  if (!product) {
    return res.status(404).json({ message: 'Produit introuvable' })
  }

  res.json(product)
})

// ✅ POST /api/products
router.post('/products', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
  const id = Date.now()
  const newProduct = {
    id,
    name: req.body.name,
    price: parseFloat(req.body.price),
    stock: parseInt(req.body.stock),
    isNew: req.body.isNew === 'true' || req.body.isNew === true,
    image: req.body.image || null,
  }

  data.push(newProduct)
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
  res.status(201).json(newProduct)
})

// ✅ PUT /api/products/:id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  let data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
  const index = data.findIndex((p) => p.id === id)
  if (index === -1) return res.status(404).json({ message: 'Produit introuvable' })

  const updatedProduct = {
    ...data[index],
    ...req.body,
    price: parseFloat(req.body.price),
    stock: parseInt(req.body.stock),
    isNew: req.body.isNew === 'true' || req.body.isNew === true,
  }

  data[index] = updatedProduct
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
  res.json({ success: true, product: updatedProduct })
})

// ✅ DELETE /api/products/:id
router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  let data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
  const updated = data.filter((p) => p.id !== id)
  if (updated.length === data.length) {
    return res.status(404).json({ message: 'Produit introuvable' })
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2))
  res.json({ success: true })
})

export default router
