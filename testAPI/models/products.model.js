const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Products = sequelize.define(
  "Products",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
);


module.exports = {Products };
