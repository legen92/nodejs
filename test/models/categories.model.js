const { DataTypes } = require("sequelize");
const connection = require("../config/db.config");

const Categories = connection.define("Categories", {
  // Model attributes are defined here
  id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 50],
    },
  },
});

module.exports = Categories;
