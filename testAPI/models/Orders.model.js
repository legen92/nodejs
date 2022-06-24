const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Orders = sequelize.define(
  "Orders",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    timestamps: true,
  }
);


module.exports = { Orders };
