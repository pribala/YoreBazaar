module.exports = function(sequelize, DataTypes) {
    // Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
    var User = sequelize.define("User",{
     user_id : {
        primaryKey      : true,
        autoIncrement   : true,
        type            : DataTypes.INTEGER,
        allowNull       : false
     }, 
     user_name: {
        type: DataTypes.STRING,
        allowNull: false
     },
     email : {
        type : DataTypes.STRING,
        isUnique :true,
        allowNull:false,
        validate:{
            isEmail : true
        }
      },
     password: {
      type: DataTypes.STRING,
      allowNull: false
    }
     });
      // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
    User.associate = function(models) {
    // Associating User with Profile
    // When a User is deleted, also delete any associated Profiles
    User.hasMany(models.Profile, {
      onDelete: "cascade"
    });
  };
    return User;
};