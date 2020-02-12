const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

const db = require("./database/mySQL");
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./routes/userRoutes")(app);
require("./routes/chatRoutes")(app);

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
