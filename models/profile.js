module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile",{
     profile_id : {
        primaryKey      : true,
        autoIncrement   : true,
        type            : DataTypes.INTEGER,
        allowNull       : false
    },
    profile_name:{
        type: DataTypes.STRING,
        allowNull: false,
       },
    profile_image: {
        type: DataTypes.STRING,
        defaultValue: "https://orig00.deviantart.net/0a2d/f/2010/282/d/4/aang___smile_by_viress-d30ezjd.jpg",
        validate: {
            isUrl: true
        }
    }   
    });
    Profile.associate = function(models) {
        // We're saying that a Profile should belong to an User
        // A Profile can't be created without an User due to the foreign key constraint
        Profile.belongsTo(models.User, {
         foreignKey: {
            allowNull: false
          }
        });
        
        Profile.hasOne(models.Cart, {
          foreignKey: {
            allowNull: false
          }
        });

        Profile.hasMany(models.Order, {
            onDelete: "cascade"
        });
      };
      // Export the database functions for the controller 
    return Profile;
    };

    