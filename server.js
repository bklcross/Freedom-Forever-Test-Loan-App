var express = require("express");
var db = require("./models");

//define port
var PORT = process.env.PORT || 3000;

//create express instance
var app = express();

//configuring middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our routes
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
