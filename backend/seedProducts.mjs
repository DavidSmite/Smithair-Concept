import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'backend/data/products.json')

const wigs = [
  { name: 'Queen Curl', price: 149.99, stock: 12, isNew: true, image: 'queen-curl.jpg' },
  { name: 'Afro Glow', price: 119.99, stock: 8, isNew: false, image: 'afro-glow.jpg' },
  { name: 'Boho Locks', price: 129.99, stock: 5, isNew: true, image: 'boho-locks.jpg' },
  { name: 'Luxe Lace', price: 199.99, stock: 3, isNew: false, image: 'luxe-lace.jpg' },
  { name: 'Tropik Waves', price: 139.99, stock: 10, isNew: true, image: 'tropik-waves.jpg' },
  { name: 'Kinky Crown', price: 109.99, stock: 20, isNew: false, image: 'kinky-crown.jpg' },
  { name: 'Straight Empress', price: 159.99, stock: 7, isNew: true, image: 'straight-empress.jpg' },
  { name: 'Silk Touch', price: 179.99, stock: 6, isNew: false, image: 'silk-touch.jpg' },
  { name: 'Sunshine Fro', price: 99.99, stock: 15, isNew: true, image: 'sunshine-fro.jpg' },
  { name: 'Urban Bob', price: 89.99, stock: 9, isNew: false, image: 'urban-bob.jpg' }
]

const seeded = wigs.map((wig) => ({
  ...wig,
  id: Date.now() + Math.floor(Math.random() * 100000)
}))

fs.writeFileSync(DATA_FILE, JSON.stringify(seeded, null, 2))
console.log(`✅ ${seeded.length} perruques ajoutées avec succès 🧚🏾‍♀️`)
