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
  app.get("/members", function(req, res) {
    // findAll returns all entries for a table when used with no options
    // db.Profile.findAll({}).then(function(dbProfile) {
    //   //We have access to the user as an argument inside of the callback function
    //   // var hbsObject = {
    //   //   profiles: dbProfile
    //   // };
    //   //res.render("members", hbsObject);
    //   res.json(dbProfile);
    // });
    res.render("/members");
  });

  // GET route for getting all of the users
  app.get("/profiles/:id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    console.log()
    var query = {};
    // if (req.query.user_email) {
    //   query.UserEmail = req.query.user_email;
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
       console.log(hbsObject);
      res.render("shop/members", hbsObject);
      // console.log(dbProfile);
      // res.json(dbProfile);
    });
  });

  //  app.get("/api/users", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.User.findAll({}).then(function(dbUser) {
  //     //We have access to the user as an argument inside of the callback function
  //     res.json(dbUser);
  //   });
  // });

  // // GET route for getting one of the user
  // app.get("/user/:id", function(req, res) {
  //   // findOne returns one entry for a table
  //   db.User.findOne({where: {id: req.params.id}}).then(function(dbUser) {
  //     //We have access to the departments as an argument inside of the callback function
  //     res.json(dbUser);
  //   });
  // });

  // // POST route for saving a new user
  // app.post("/api/newuser", function(req, res) {
  //   // create takes an argument of an object describing the item we want to insert
  //   // into our table.
  //   db.User.create({
  //     user_name: req.body.name,
  //     email: req.body.email,
  //   }).then(function(dbUser) {
  //     // We have access to the new user as an argument inside of the callback function
  //     res.json(dbUser);
  //   });

  // });

  // // DELETE route for deleting users. We can get the id of the user to be deleted
  // // from req.params.id
  // app.delete("/api/user/:id", function(req, res) {
  //   // Destroy takes in one argument: a "where object describing the user we want to destroy
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });

  // });

  // // PUT route for updating departments. We can get the updated department data from req.body
  // app.put("/api/user", function(req, res) {
  //   // Update takes in two arguments, an object describing the properties we want to update,
  //   // and another "where" object describing the user we want to update
  //   db.User.update({
  //     user_name: req.body.name,
  //     email: req.body.email
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });

  // });

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

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  // app.post("/api/signup", function(req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   }).then(function() {
  //     res.redirect(307, "/api/login");
  //   }).catch(function(err) {
  //     console.log(err);
  //     res.json(err);
  //     // res.status(422).json(err.errors[0].message);
  //   });
  // });

  // // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

  // // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   }
  //   else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

};