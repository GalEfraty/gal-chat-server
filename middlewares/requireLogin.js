module.exports = (req, res, next) => {
    //console.log(req.user)
    if (!req.params.uid) {
      return res.status(401).send({ error: "Unauthorized, must log in to continue" });
    }
    next();
  };