const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
  userId: DataTypes.INTEGER,
  productId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  totalPrice: DataTypes.FLOAT
});

module.exports = Order;