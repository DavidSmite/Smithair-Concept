const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
