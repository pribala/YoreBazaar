// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbUser) {
      //We have access to the user as an argument inside of the callback function
      var hbsObject = {
        users: dbUser
      };
      res.render("userpage", hbsObject);
    });
  });

   app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbUser) {
      //We have access to the user as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  // GET route for getting one of the user
  app.get("/user/:id", function(req, res) {
    // findOne returns one entry for a table
    db.User.findOne({where: {id: req.params.id}}).then(function(dbUser) {
      //We have access to the departments as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  // POST route for saving a new user
  app.post("/api/newuser", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table.
    db.User.create({
      user_name: req.body.name,
      email: req.body.email,
    }).then(function(dbUser) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbUser);
    });

  });

  // DELETE route for deleting users. We can get the id of the user to be deleted
  // from req.params.id
  app.delete("/api/user/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the user we want to destroy
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });

  });

  // PUT route for updating departments. We can get the updated department data from req.body
  app.put("/api/user", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the user we want to update
    db.User.update({
      user_name: req.body.name,
      email: req.body.email
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });

  });

};