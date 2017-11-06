var express = require("express");

var router = express.Router();

//Import the model (cat.js) to use its database functions.
//var items = require("../models/index.js");

//Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res, next) {
    res.render("shop/index", { title: 'Shopping Cart' });
  });
  

module.exports = router;