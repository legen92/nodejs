const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./users.model");
db.Categories = require("./categories.model");
db.Products = require("./products.model");

db.User.hasMany(db.Products)
db.Products.belongsTo(db.User)

db.Categories.hasMany(db.Products)
db.Products.belongsTo(db.Categories)

db.User.sync();
db.Categories.sync();
db.Products.sync();

module.exports = db;
