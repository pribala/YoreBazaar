
  var db = require("../models");
  
  // Routes =============================================================
  module.exports = function(app) {
  
    // GET route for getting all of the products
    app.get("/orders/:profile_id", function(req, res) {
      // findAll returns all entries for a table when used with no options
      var query = {};
      if (req.params.profile_id) {
        query.ProfileProfileId = req.params.profile_id;
      }
      db.Order.findAll({
          where: query,
            include:[{model:db.Profile},
             {model: db.Product}
             ]
      }).then(function(dborder) {
        //We have access to the products as an argument inside of the callback function
     
      res.render("shop/orders", hbsObject);
      });
    });

    app.post("/api/order", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. 
    //console.log(req.body);
    var data = (req.body);
    db.Order.create({
      ProfileProfileId: data[0].profileId
    }).then(function(dbOrder){
      data.forEach(function(item){
        db.OrderProduct.create({
          OrderId:dbOrder.id,
          ProductId:item.productId,
          quantity: item.qty
        }).then(function(dbOrders){
            
          });
        });
          res.json(dbOrder);
      });
    });
  }

  