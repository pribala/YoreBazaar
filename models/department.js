module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define("Department", {
    dept_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overhead_costs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  }, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  });

  Department.associate = function(models) {
    // Associating Department with Products
    // When a Department is deleted, also delete any associated Products
    Department.hasMany(models.Product, {
      onDelete: "cascade"
    });
  };
  return Department;
};
