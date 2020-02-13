const User = require("../database/models/User");

module.exports = (req, res, next) => {
  if (!req.params.userId) {
    return res
      .status(401)
      .send({ error: "Unauthorized, must log in and have userId to continue" });
  }
  next();
};
