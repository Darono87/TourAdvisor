const Sequalize = require("sequelize");

const sequelize = new Sequalize(process.env.DBDATABASE, process.env.DBUSERNAME,
  process.env.DBPASS, {
    host: process.env.DBHOST,
    dialect: 'mysql'
  });

module.exports = sequelize;