import Product from '../models/productModel.mjs';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error('❌ Erreur fetch produits :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Erreur création produit :', error);
    res.status(400).json({ message: 'Erreur de validation' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: 'Produit introuvable' });
    res.status(200).json(updated);
  } catch (err) {
    console.error('❌ Erreur update produit :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Produit introuvable' });
    res.status(200).json({ message: 'Produit supprimé' });
  } catch (err) {
    console.error('❌ Erreur suppression produit :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
