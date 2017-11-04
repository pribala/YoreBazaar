module.exports = function(sequelize, DataTypes) {
    var profiles = sequelize.define("profiles",{
     profile_id : {
        primaryKey      : true,
        autoIncrement   : true,
        type            : DataTypes.INTEGER,
        allowNull       : false
    },profile_name:{
        type: DataTypes.STRING,
        defaultvalue:"",
        validate:{
            isUrl:true
        }},
    });
    profiles.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        profiles.belongsTo(models.users, {
          foreignKey: {
            allowNull: false
          }
        });
      };
      // Export the database functions for the controller 
    return profiles;
    };