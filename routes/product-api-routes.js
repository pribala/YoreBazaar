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
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProduct) {
      //We have access to the products as an argument inside of the callback function
      var hbsObject = {
        products: dbProduct
      };
      res.render("shop/products", hbsObject);
    });
  });

  // GET route for getting all of the products
  app.get("/api/products", function(req, res) {
    var query = {};
    if (req.query.dept_id) {
      query.DepartmentId = req.query.dept_id;
    }
    // 1. Add a join here to include all of the Departments for these products
    db.Product.findAll({
      where: query,
      include:[db.Department]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // GET route for getting all products by department
  app.get("/products/:dept_id", function(req, res) {
    var query = {};
    if (req.params.dept_id) {
      query.DepartmentId = req.params.dept_id;
    }
    // 1. Add a join here to include all of the Departments for these products
    db.Product.findAll({
      where: query,
      include:[db.Department]
    }).then(function(dbProduct) {
      //res.json(dbProduct);
      var hbsObject = {
        products: dbProduct
      };
      res.render("shop/products", hbsObject);
    });
  });

   // GET route for getting all of the todos
  app.get("/product/:id", function(req, res) {
    // findOne returns one entry for a table
    db.Product.findOne({where: {id:req.params.id}}).then(function(dbProduct) {
      //We have access to the products as an argument inside of the callback function
      res.json(dbProduct);
    });

  });

  // POST route for saving a new product
  app.post("/api/newproduct", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table.
    db.Product.create({
      product_name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      DepartmentId: req.body.deptId
    }).then(function(dbProduct) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbProduct);
    });
  });

  //====================================================================================//
// Cart logic
 // GET route for getting all products by department
  app.get("/shopping", function(req, res) {
    // if (req.query.cartId) {
       var profile_id = req.query.cart_id;
    // }
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProduct) {
      //We have access to the products as an argument inside of the callback function
      var hbsObject = {
        products: dbProduct,
        profile_id: profile_id
      };
      res.render("shop/shopping", hbsObject);
    });
  });
};
