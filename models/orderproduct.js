module.exports = function(sequelize, DataTypes) {
  var OrderProduct = sequelize.define("OrderProduct", {
    order_quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return OrderProduct;
};