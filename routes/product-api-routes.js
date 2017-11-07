// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models

var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/products", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProduct) {
      //We have access to the products as an argument inside of the callback function
      var hbsObject = {
        products: dbProduct
      };
      res.render("shop/products", hbsObject);
    });

  });

  // GET route for getting all of the posts
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

  // // DELETE route for deleting todos. We can get the id of the todo to be deleted
  // // from req.params.id
  // app.delete("/api/todos/:id", function(req, res) {
  //   // Destroy takes in one argument: a "where object describing the todos we want to destroy
  //   db.Todo.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbTodo) {
  //     res.json(dbTodo);
  //   });

  // });

  // // PUT route for updating todos. We can get the updated todo data from req.body
  // app.put("/api/todos", function(req, res) {
  //   // Update takes in two arguments, an object describing the properties we want to update,
  //   // and another "where" object describing the todos we want to update
  //   db.Todo.update({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   })
  //   .then(function(dbTodo) {
  //     res.json(dbTodo);
  //   });

  // });
};
