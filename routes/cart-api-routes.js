// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models

var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  app.get("/cart", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Cart.findAll({}).then(function(dbCart) {
      //We have access to the departments as an argument inside of the callback function
      var hbsObject = {
        cart: dbCart
      };
      res.render("shop/cart", hbsObject);
    });
  })
};
