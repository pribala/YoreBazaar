module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    order_date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      dialectOptions: {
        useUTC: false //for reading from database
    },
    timezone: '+08:00' //for writing to database
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

