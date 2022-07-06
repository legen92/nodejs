const { Sequelize } = require("sequelize");
const connection = new Sequelize("demo", "root", "Vanbinh123@", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = connection;
