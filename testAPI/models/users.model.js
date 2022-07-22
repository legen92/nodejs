const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const UserModel = sequelize.define('User', {
    id:{
      primaryKey:true,
      autoIncrement:true,
      type:DataTypes.INTEGER
    },
    firstName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    lastName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      isEmail: true
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      // allowNull defaults to true
    },
    role:{
      type:DataTypes.SMALLINT,
      defaultValue:0
    }
  },
  {
    timestamps:true
  });
  

module.exports = {UserModel};
