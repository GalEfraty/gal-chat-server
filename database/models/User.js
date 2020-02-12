
const Sequelize = require("sequelize");
const db = require("../mySQL")

const User = db.define('users', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  online: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

User.associate = function(models){
  User.hasMany(models.Message)
}

module.exports = User







/*




//......................
const Sequelize = require("sequelize");
// module.exports = sequelize => {
//     sequelize.import("users", (sequelize, DataTypes) => {

//     })
// }





module.exports = sequelize => {

  const User = Sequelize.Model;
  User.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      online: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    },
    {
    //   freezeTableName: true,
      sequelize,
      modelName: "users",
      timestamps: true
    }
  );

  //   User.sync({ force: true });

  return User;
};*/
