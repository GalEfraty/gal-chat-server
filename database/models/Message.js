const Sequelize = require("sequelize");
const db = require("../mySQL");

const Message = db.define("messages", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdBy: {
    type: Sequelize.INTEGER,
    references: {
      model: db.User,
      key: "id"
    }
  }
});

module.exports = Message;
