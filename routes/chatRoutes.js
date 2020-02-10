const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
    app.get("/api/hello", (req, res) => {
        console.log("hello")
        res.status(200).send({message: "hello back from server"})
    })
}