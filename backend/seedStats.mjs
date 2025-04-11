import mongoose from "mongoose";
import dotenv from "dotenv";
import Order from "./models/Order.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("✅ Connexion MongoDB OK");

const seedOrders = [
  {
    customer: "Alice",
    items: [
      { name: "Perruque Luxe", price: 129.99, quantity: 1 },
      { name: "Brosse soin", price: 19.99, quantity: 1 }
    ],
    total: 149.98,
    status: "payée",
    createdAt: new Date("2024-01-10") // Q1
  },
  {
    customer: "Bob",
    items: [
      { name: "Perruque Afro", price: 79.99, quantity: 1 }
    ],
    total: 79.99,
    status: "en attente",
    createdAt: new Date("2024-03-15") // Q1
  },
  {
    customer: "Chloé",
    items: [
      { name: "Spray hydratant", price: 15.99, quantity: 2 },
      { name: "Perruque Curly", price: 89.99, quantity: 1 }
    ],
    total: 121.97,
    status: "payée",
    createdAt: new Date("2024-04-20") // Q2
  },
  {
    customer: "David",
    items: [
      { name: "Perruque Blond", price: 99.99, quantity: 1 }
    ],
    total: 99.99,
    status: "payée",
    createdAt: new Date("2024-06-02") // Q2
  },
  {
    customer: "Eva",
    items: [
      { name: "Sérum croissance", price: 29.99, quantity: 2 }
    ],
    total: 59.98,
    status: "remboursée",
    createdAt: new Date("2024-07-10") // Q3
  },
  {
    customer: "Fred",
    items: [
      { name: "Perruque Luxe", price: 129.99, quantity: 1 }
    ],
    total: 129.99,
    status: "payée",
    createdAt: new Date("2024-08-18") // Q3
  },
  {
    customer: "Gina",
    items: [
      { name: "Perruque Afro", price: 79.99, quantity: 1 },
      { name: "Spray hydratant", price: 15.99, quantity: 1 }
    ],
    total: 95.98,
    status: "payée",
    createdAt: new Date("2024-10-01") // Q4
  },
  {
    customer: "Hugo",
    items: [
      { name: "Sérum croissance", price: 29.99, quantity: 1 },
      { name: "Brosse soin", price: 19.99, quantity: 1 }
    ],
    total: 49.98,
    status: "en attente",
    createdAt: new Date("2024-11-22") // Q4
  },
];

await Order.deleteMany();
await Order.insertMany(seedOrders);
console.log("📦 Commandes injectées avec succès !");

await mongoose.disconnect();
console.log("🔌 Déconnexion MongoDB");
