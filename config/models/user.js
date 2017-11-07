module.exports = function(sequelize, DataTypes) {
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