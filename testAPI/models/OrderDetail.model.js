const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const OrderDetail = sequelize.define(
  "OrderDetail",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quatity:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    timestamps: true,
  }
);


module.exports = {OrderDetail };
