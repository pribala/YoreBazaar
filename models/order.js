module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  });

  Order.associate = function(models) {
        // We're saying that a Cart should belong to a Profile
        // A Cart can't be created without a Profile due to the foreign key constraint
        Order.belongsToMany(models.Product, {through: 'OrderProduct'});
        Order.belongsTo(models.Profile, {
          foreignKey: {
            allowNull: false
          }
        });
  };
  return Order;
};

