const { Sequelize, DataTypes } = require("sequelize");
const {
  database,
  password,
  user,
  host,
  dialect,
} = require("../config/db.config");

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./users.model")(sequelize, DataTypes);
db.Products = require("./products.model")(sequelize, DataTypes);
db.Categories = require("./categories.model")(sequelize, DataTypes);

db.Users.hasMany(db.Products);
db.Products.belongsTo(db.Users);

db.Categories.hasOne(db.Products);
db.Products.belongsTo(db.Categories);

db.Users.sync();
db.Categories.sync();
db.Products.sync();

module.exports = db;
