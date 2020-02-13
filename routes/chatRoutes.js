const Message = require("../database/models/Message");
const requireId = require("../middlewares/requireId");
const User = require("../database/models/User");
Message.belongsTo(User, { foreignKey: "createdBy" });

module.exports = app => {
  //POST// SendMessage
  app.post("/api/messages/sendmessage/:userId", requireId, async (req, res) => {
    try {
      await Message.create({
        createdBy: req.params.userId,
        content: req.body.content
      });
      res.status(201).send({ message: "message created" });
    } catch (error) {
      console.log("error in sendmessage:: unable to send message : " + error);
      res
        .status(400)
        .send({ error: "error in sendmessage:: unable to send message" });
    }
  });

  //GET// getMessages
  app.get(
    "/api/messages/getLastMessages/:numberOfMessagesToRetrive/:userId",
    requireId,
    async (req, res) => {
      const limit = parseInt(req.params.numberOfMessagesToRetrive) || 10;
      try {
        const result = await Message.findAll({
          include: [{ model: User }],
          limit,
          order: [["id", "ASC"]]
        });

        res.status(202).send({ messages: result });
      } catch (error) {
        console.log(
          "error in getLastMessages: unable to retrive messages : " + error
        );
        res.status(400).send({
          error: "error in getLastMessages: unable to retrive messages "
        });
      }
    }
  );
};
