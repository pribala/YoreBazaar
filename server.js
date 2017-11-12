// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
var exphbs = require("express-handlebars");
var hbs = require("handlebars");
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Static directory
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
// =============================================================
require("./routes/product-api-routes.js")(app);
require("./routes/department-api-routes.js")(app);
// require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/profile-api-routes.js")(app);
require("./routes/cart-api-routes.js")(app);
require("./routes/order-api-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
    return db.sequelize.sync({ force:false});
})
.then(function(){
    return db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
})
.then(function(){
     app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
  });
});
