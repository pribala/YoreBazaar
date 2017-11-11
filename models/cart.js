module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define("Cart", {

    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
  });

  Cart.associate = function(models) {
        Cart.belongsTo(models.Profile, {
          foreignKey: {
            allowNull: false
          }
        });
        Cart.belongsTo(models.Product);
       
   };
 
  return Cart;
};

