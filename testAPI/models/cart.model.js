const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) =>{

  const CartModel = sequelize.define(
    "CartModel",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      quatity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return CartModel
}


