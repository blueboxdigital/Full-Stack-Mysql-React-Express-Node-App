// App
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const cookieParser = require("cookie-parser");
const customAuthMiddleware = require("./middleware/custom-auth-middleware");
// set up app
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(customAuthMiddleware);

//Models
const models = require("./models");
models.sequelize
  .sync()
  .then(function() {
    console.log("everything looks fine with your database");
  })
  .catch(function(err) {
    console.log(err, "something went wrong with the database");
  });
// routes
require("./routes")(app);
// wildcard that send back a default message
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Hello World!"
  })
);
const port = 3001;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
