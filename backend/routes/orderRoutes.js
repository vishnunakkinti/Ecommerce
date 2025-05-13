const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const { userId, productId, quantity, totalPrice } = req.body;
  const order = await Order.create({ userId, productId, quantity, totalPrice });
  res.json(order);
});

router.get('/', async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

module.exports = router;