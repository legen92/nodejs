const { DataTypes } = require("sequelize");
const connection = require("../config/db.config");

const Products = connection.define("Products", {
  // Model attributes are defined here
  id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 100],
    },
  },
});

module.exports = Products;
