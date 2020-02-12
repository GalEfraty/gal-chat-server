module.exports = (req, res, next) => {
  if (!req.params.userName) {
    return res.status(401).send({ error: "Unauthorized, must have a userName param to continue" });
  }
  next();
};