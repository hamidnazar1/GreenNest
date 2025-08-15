const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, category, description, stock, careTips, imageUrl } = req.body;

    const product = await Product.create({
      name,
      price,
      category,
      description,
      stock,
      careTips,
      imageUrl,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, price, category, description, stock, careTips, imageUrl } = req.body;

    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;
    product.description = description || product.description;
    product.stock = stock || product.stock;
    product.careTips = careTips || product.careTips;
    product.imageUrl = imageUrl || product.imageUrl;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.remove();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
