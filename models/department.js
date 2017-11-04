module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define("Department", {
    dept_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overhead_costs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_sale: {
      type: DataTypes.DECIMAL ,
      allowNull:false
    }
  });
  return Department;
};
