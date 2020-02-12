
const Sequelize = require("sequelize");
// const User = require("../database/models/User")

const db = require("../mySQL")

const Message = db.define('messages', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
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
})

// Message.associate = function(models){
//   Message.belongsTo(models.User, {foreignKey: "createdBy"})
// }

module.exports = Message

/*
const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Message = Sequelize.Model;
  Message.init(
    {
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      }
    },
    {
    //   freezeTableName: true,
      sequelize,
      modelName: "messages",
      tableName: "messages",
      timestamps: true
    }
  );
  // Message.sync({ force: true })
  return Message;
};

*/
