const { DataTypes } = require("sequelize");
const connection = require("../config/db.config");

const User = connection.define("User", {
  // Model attributes are defined here
  id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args:[3, 25],
        msg:"lon hon 3 nho hon 25"
      }
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 12],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg:"phai la email"
      }
    },
  },
  iam_role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["admin","moderator","member"]],
    },
  },
  hash_pwd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
