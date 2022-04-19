const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_test", "dava", "Dev12345", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
