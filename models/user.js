module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users",{
     user_id : {
        primaryKey      : true,
        autoIncrement   : true,
        type            : DataTypes.INTEGER,
        allowNull       : false
    }, user_name: {
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
    users.sync();
      // Export the database functions for the controller (catsController.js)
    return users;
    };