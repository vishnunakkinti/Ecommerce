const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  imageUrl: DataTypes.STRING
});

module.exports = Product;