module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define("Cart", {
    product_id: {
    	type: DataTypes.INTEGER,
    	allowNull : false
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  });

  Cart.associate = function(models) {
        // We're saying that a Cart should belong to a Profile
        // A Cart can't be created without a Profile due to the foreign key constraint
        Cart.belongsTo(models.Profile, {
          foreignKey: {
            allowNull: false
          }
        });

        Cart.belongsToMany(models.Product, {through: 'CartProduct'});
  };
 
  return Cart;
};

