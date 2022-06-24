const {Sequelize,DataTypes} = require("sequelize");
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

db.User = require('./users.model')(sequelize,DataTypes)

db.User.sync()
module.exports = db;