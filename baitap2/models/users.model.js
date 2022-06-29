module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iam_role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash_pwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Users;
};
