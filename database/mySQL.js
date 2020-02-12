const Sequelize = require("sequelize");
const keys = require("../config/keys");


// require("./models/User");
// require("./models/Message");



module.exports = new Sequelize(keys.mySQLURL);
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });

  // const User = sequelize.import("../database/models/User.js");
// const Message = sequelize.import("../database/models/Message.js");

  // const User = Sequelize.Model;
  // User.init(
  //   {
  //     name: {
  //       type: Sequelize.STRING,
  //       allowNull: false
  //     },
  //     online: {
  //       type: Sequelize.BOOLEAN,
  //       defaultValue: false,
  //       allowNull: false
  //     }
  //   },
  //   {
  //     sequelize,
  //     modelName: "users",
  //     timestamps: true
  //   }
  // );

  // const Message = Sequelize.Model;
  // Message.init(
  //   {
  //     content: {
  //       type: Sequelize.TEXT,
  //       allowNull: false
  //     }
  //     ,
  //     createdBy: {
  //       type: Sequelize.INTEGER,
  //       references: {
  //         model: "users",
  //         key: "id"
  //       }
  //     }
  //   },
  //   { sequelize, modelName: "messages", timestamps: true }
  // );
  // User.sync({ force: false });

    // Message.sync({ force: false })
    // sequelize.sync({force: true})
// module.exports = { sequelize };
