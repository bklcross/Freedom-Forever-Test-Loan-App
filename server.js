const express = require("express");
const db = require("./models");
const router = require("./routes/apiRoutes");

//define port
const PORT = process.env.PORT || 8080;

//create express instance
const app = express();

//configuring middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//set up routes
app.use("/api", router);

//syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    );
  });
});
