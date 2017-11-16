
  var db = require("../models");
  
  // Routes =============================================================
  module.exports = function(app) {
  
    // // GET route for getting all of the products
    // app.get("/orders/:profile_id", function(req, res) {
    //   // findAll returns all entries for a table when used with no options
    //   var query = {};
    //   if (req.params.profile_id) {
    //     query.ProfileProfileId = req.params.profile_id;
    //   }
    //   db.Order.findAll({
    //       where: query,
    //         include:[{model:db.Profile},
    //          {model: db.Product}
    //          ]
    //   }).then(function(dborder) {
    //     //We have access to the products as an argument inside of the callback function
     
    //   res.render("shop/orders", hbsObject);
    //   });
    // });
  
    // }
    app.get("/orders/", function(req, res) {
      // findAll returns all entries for a table when used with no options
      // var query = {};
      // if (req.params.profile_id) {
      //   query.ProfileProfileId = req.params.profile_id;
      // }
      // db.Order.findAll({
      //     where: query,
      //       include:[{model:db.Profile},
      //        {model: db.Product}
      //        ]
      // }).then(function(dborder) {
        //We have access to the products as an argument inside of the callback function
     
      res.render("shop/orders");
      // });
    });
  
    }


  