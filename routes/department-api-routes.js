
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the departments
  app.get("/departments", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Department.findAll({}).then(function(dbDepartment) {
      //We have access to the departments as an argument inside of the callback function
      var hbsObject = {
        departments: dbDepartment
      };
      res.render("shop/departments", hbsObject);
    });
  });

   app.get("/api/departments", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Department.findAll({}).then(function(dbDepartment) {
      //We have access to the departments as an argument inside of the callback function
      res.json(dbDepartment);
    });
  });

  // GET route for getting all of the departments
  app.get("/department/:id", function(req, res) {
    // findOne returns one entry for a table
    db.Department.findOne({where: {id: req.params.id}}).then(function(dbDepartment) {
      //We have access to the departments as an argument inside of the callback function
      res.json(dbDepartment);
    });
  });

  // POST route for saving a new department
  app.post("/api/newdepartment", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table.
    db.Department.create({
      dept_name: req.body.name,
      overhead_costs: req.body.cost,
    }).then(function(dbDepartment) {
      // We have access to the new department as an argument inside of the callback function
      res.json(dbDepartment);
    });

  });

  // DELETE route for deleting departments. We can get the id of the department to be deleted
  // from req.params.id
  app.delete("/api/department/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the department we want to destroy
    db.Department.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbDepartment) {
      res.json(dbDepartment);
    });

  });

  // PUT route for updating departments. We can get the updated department data from req.body
  app.put("/api/department", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the department we want to update
    db.Department.update({
      dept_name: req.body.name,
      overhead_costs: req.body.cost
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbDepartment) {
      res.json(dbDepartment);
    });

  });
};