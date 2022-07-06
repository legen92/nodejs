module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Categories;
};
