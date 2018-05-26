module.exports = function(sequelize, DataTypes) {
    var Ninja = sequelize.define("ninjaInfo", {

    //Table values
    //Edit below
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Ninja;
};
  