
  var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  app.get("/cart/:profile_id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    var query = {};
    if (req.params.profile_id) {
      query.ProfileProfileId = req.params.profile_id;
    }
    console.log(req.params.profile_id);
    db.Cart.findAll({
    	where: query,
      	include:[{model:db.Profile},
      	 {model: db.Product}]
    }).then(function(dbCart) {
      //We have access to the products as an argument inside of the callback function

      var hbsObject = {
        products: dbCart
      };
      console.log(dbCart);
      res.render("shop/cart", hbsObject);
    });

  });


  // POST route for saving a new product
  app.post("/addtocart", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table.
     // db.CartProduct.create({
     //  	CartId: dbCart.id,
     //  	ProductId: req.body.product_id
     //  });
    db.Cart.create({
      ProductId: req.body.product_id,
      ProfileProfileId: req.body.profile_id
    }).then(function(dbCart) {
      // We have access to the new todo as an argument inside of the callback function
       res.json(dbCart);
    });

  });
};
