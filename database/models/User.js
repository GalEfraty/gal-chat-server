const Sequelize = require("sequelize");
const db = require("../mySQL");

const User = db.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  online: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

User.associate = function(models) {
  User.hasMany(models.Message);
};

module.exports = User;
