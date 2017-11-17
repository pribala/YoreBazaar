
 
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
            //attributes: {include: [[db.sequelize.condition(db.sequelize.col('order_quantity'), '*', db.sequelize.col('price')),'tot']]}
            include:[
             {
              model: db.Product,
              through: db.OrderProduct
              }
            ]
      }).then(function(dbOrder) {
        //We have access to the products as an argument inside of the callback function
        var cartTotal = 0;
        dbOrder.forEach(function(item){
          item.Products.forEach(function(prod){
            var total = prod.price*prod.OrderProduct.order_quantity;
            cartTotal += total;
          });
        });
        var hbsObject = {
          products: dbOrder,
          total: cartTotal
        };
        res.render("shop/orders", hbsObject);
      });
    });

    app.post("/api/order", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. 
    var data = (req.body);
    db.Order.create({
      ProfileProfileId: data[0].profileId
    }).then(function(dbOrder){
      data.forEach(function(item){
        db.OrderProduct.create({
          OrderId:dbOrder.id,
          ProductId:item.productId,
          order_quantity: item.qty
        }).then(function(dbOrders){
            
          });
        });
          res.json(dbOrder);
      });
    });
     // GET route for getting order details for an order
    app.get("/order/:order_id", function(req, res) {
      // findAll returns all entries for a table when used with no options
      var query = {};
      if (req.params.order_id) {
        query.OrderId = req.params.order_id;
      }
      db.OrderProduct.findAll({
          where: query,
            //attributes: {include: [[db.sequelize.condition(db.sequelize.col('order_quantity'), '*', db.sequelize.col('price')),'tot']]}
            // include:[
            //  {
            //   model: db.Product,
            //   through: db.OrderProduct
            //   }
            // ]
      }).then(function(dbOrder) {
        //We have access to the products as an argument inside of the callback function
          res.json(dbOrder);
      });
    });
  }
