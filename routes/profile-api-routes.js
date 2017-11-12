// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");
var passport = require("../config/passport");
// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/members", function(req, res) {
    // findAll returns all entries for a table when used with no options
    var query = {};
    // if (req.query.user_email) {
    //   
    // }
    query.UserEmail = req.query.email;
    db.Profile.findAll({where: query,
      include:[db.User]
    }).then(function(dbProfile) {
      //We have access to the user as an argument inside of the callback function
      res.json(dbProfile);
    });
  });

  // GET route for getting all of the users
  app.get("/profiles/:id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    var query = {};
    // if (req.query.user_email) {
    //   
    // }
    query.UserEmail = req.params.id;
    db.Profile.findAll({where: query,
      include:[db.User]
    }).then(function(dbProfile) {
      //We have access to the user as an argument inside of the callback function
      var hbsObject = {
        profiles: dbProfile,
        user: query.UserEmail
      };
      res.render("shop/members", hbsObject);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/profile", function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    //res.json("/members");
    db.Profile.create({
      profile_name: req.body.name,
      profile_image: req.body.image,
     UserEmail: req.body.username,
    }).then(function(dbProfile) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbProfile);
    });
  });

  // DELETE route for deleting items from the profile. We can get the id of the profile to be deleted
  // from req.params.id
  app.delete("/api/profile/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the item we want to destroy
    db.Profile.destroy({
      where: {
        profile_id: req.params.id
      }
    })
    .then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // PUT route for updating cart. We can get the updated cart data from req.body
  app.put("/api/profile", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the profile we want to update
    db.Profile.update({
      profile_name: req.body.name,
      profile_image: req.body.image,
      UserEmail: req.body.username,
    }, {
      where: {
        profile_id: req.body.id
      }
    })
    .then(function(dbProfile) {
      res.json(dbProfile);
    });
  });
};