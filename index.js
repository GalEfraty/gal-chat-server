const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./config/keys");


const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/chatRoutes")(app);

app.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`);
  });