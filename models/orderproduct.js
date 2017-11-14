module.exports = function(sequelize, DataTypes) {
  var OrderProduct = sequelize.define("OrderProduct", {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return OrderProduct;
};