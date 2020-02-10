const requireLogin = require("../middlewares/requireLogin");

const keys = require("../config/keys")

module.exports = app => {
    // app.get("/api/hello", (req, res) => {

    //     console.log(`hello ${keys.someConfigVar}`)
    //     res.status(200).send({message: `hello back from server ${keys.someConfigVar}`})
    // })

    app.get("/api/hello", (req, res) => {

        console.log(`hello ${keys.someConfigVar}`)
        res.status(200).send({message: `hello back from server ${keys.someConfigVar}`})
    })
}