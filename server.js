var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var app = express();
var port = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// Set Handlebars as the view engine
app.use(express.static("public"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/controller.js');
app.use('/', routes);

app.listen(port, function() {
  console.log("listening on port", port);
});
