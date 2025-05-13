const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const product = await Product.create({ name, description, price, imageUrl });
  res.json(product);
});

module.exports = router;