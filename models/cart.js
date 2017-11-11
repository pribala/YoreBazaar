module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define("Cart", {
    cart_quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
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
        Cart.belongsTo(models.Product);
  };
   return Cart;
};

