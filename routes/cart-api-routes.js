
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
    db.Cart.findAll({
    	where: query,
      	include:[{model:db.Profile},
      	 {model: db.Product}
      	 ]
    }).then(function(dbCart) {
      //We have access to the products as an argument inside of the callback function
      var total = 0;
      dbCart.forEach(function(item){
      	total+=item.cart_quantity * item.Product.price;
      });
      var hbsObject = {
        products: dbCart,
        total: total
      };
	res.render("shop/cart", hbsObject);
    });
  });

// GET route for getting all of the products in the user's cart
  app.get("/api/cart/:profile_id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    var query = {};
    if (req.params.profile_id) {
      query.ProfileProfileId = req.params.profile_id;
    }
    db.Cart.findAll({
      where: query,
        include:[{model:db.Profile},
         {model: db.Product}
         ]
    }).then(function(dbCart) {
      //We have access to the products as an argument inside of the callback function
  //     var total = 0;
  //     dbCart.forEach(function(item){
  //       total+=item.cart_quantity * item.Product.price;
  //     });
  //     var hbsObject = {
  //       products: dbCart,
  //       total: total
  //     };
  // res.render("shop/cart", hbsObject);
    res.json(dbCart);
    });
  });

  // POST route for saving a new product
  app.post("/addtocart", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. 
    db.Cart.create({
      ProductId: req.body.product_id,
      ProfileProfileId: req.body.profile_id
    }).then(function(dbCart) {
      // We have access to the new todo as an argument inside of the callback function
       res.json(dbCart);
    });
  });

  // DELETE route for deleting items from the cart. We can get the id of the cart item to be deleted
  // from req.params.id
  app.delete("/api/cart/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the item we want to destroy
    db.Cart.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbCart) {
      res.json(dbCart);
    });
  });

  // PUT route for updating cart. We can get the updated cart data from req.body
  app.put("/api/cart", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the cart we want to update
    db.Cart.update({
      cart_quantity: req.body.quantity,
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbCart) {
      res.json(dbCart);
    });
  });
};
