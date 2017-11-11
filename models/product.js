module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    product_image: {
      type: DataTypes.STRING,
      defaultValue: "http://seniorchoicesnw.com/wp-content/uploads/2016/04/Fotolia_82912936_Subscription_Monthly_M-300x200.jpg",
      validate: {
        isUrl: true
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sales: {
      type: DataTypes.DECIMAL,
      defaultValue: 0
    }
  }, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  });

  Product.associate = function(models) {
    // We're saying that a Product should belong to a Department
    // A Product can't be created without a Department due to the foreign key constraint
    Product.belongsTo(models.Department, {
      foreignKey: {
        allowNull: false
      }
    });
    Product.hasMany(models.Cart);
    Product.belongsToMany(models.Order, {through: 'OrderProduct'});

    //Product.belongsToMany(models.Cart, {through: 'CartProduct'});
   
  };
  return Product;
};

