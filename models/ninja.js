//Create model for user 
// We ​export ​a ​function ​that ​takes ​in ​2 ​variables: sequelize, ​and ​DataTypes.
//“sequelize” ​in ​this ​case ​is ​actually ​our ​connection ​to ​our ​database.
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        score: DataTypes.INTEGER

    });
    return User;

}

//Create variables to do work with the database info
