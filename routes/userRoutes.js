const User = require("../database/models/User");
const requireName = require("../middlewares/requireName");
const requireId = require("../middlewares/requireId");

module.exports = app => {
  //POST// findUserOrCreateAndUpdate
  //find user by name || user exist ? update it to online : create new user //
  app.post(
    "/api/users/findAndUpdateOrCreate/:userName",
    requireName,
    async (req, res) => {
      try {
        const result = await User.findOne({
          where: { name: req.params.userName }
        });
        if (!result) {
          const newUser = await User.create({
            name: req.params.userName,
            online: true
          });
          return res.status(201).send({ user: newUser.dataValues });
        } else {
          console.log("existing user");
          await User.update({ onliAne: true }, { where: { id: result.id } });
          const existingUser = await User.findOne({ where: { id: result.id } });
          return res.status(202).send({ user: existingUser.dataValues });
        }
      } catch (error) {
        console.log(
          "error in findAndUpdateOrCreate:: unable to find or create or update user: " +
            error
        );
        res.status(400).send({
          error:
            "error in findAndUpdateOrCreate:: unable to find/create/update user"
        });
      }
    }
  );

  //PUT//updateUserToOffline
  app.put("/api/users/updateUserToOffline/:userId", requireId, (req, res) => {
    try {
      User.update({ online: false }, { where: { id: req.params.userId } }).then(
        () => {
          res.status(202).send({ message: "user is now offline" });
        }
      );
    } catch (error) {
      console.log(
        "error in updateUserToOffline:: unable to update user to offline: " +
          error
      );
      res.status(400).send({
        error: "error in updateUserToOffline:: unable to update user to offline"
      });
    }
  });

  //GET// getOnlineUsersAndCount
  app.get(
    "/api/users/getOnlineUsersAndCount/:userId",
    requireId,
    async (req, res) => {
      try {
        const { count, rows } = await User.findAndCountAll({
          where: { online: true }
        });
        res.status(200).send({ count, users: rows });
      } catch (error) {
        console.log(
          "error in getOnlineUsersAndCount:: unable to find and count online users: " +
            error
        );
        res.status(400).send({
          error:
            "error in getOnlineUsersAndCount:: unable to find and count online users"
        });
      }
    }
  );

  app.get("/api/users/isUserAvailable/:userName", async (req, res) => {
    const result = await User.findOne({
      where: { name: req.params.userName, online: true }
    });
    if (result) {
      return res.status(401).send({ available: false });
    }
    return res.status(200).send({ available: true });
  });

};
