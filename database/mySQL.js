const Sequelize = require("sequelize");
const keys = require("../config/keys");

module.exports = new Sequelize(keys.mySQLURL);
