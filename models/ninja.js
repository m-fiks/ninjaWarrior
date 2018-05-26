module.exports = function(sequelize, DataTypes) {
    var Ninja = sequelize.define("ninjaInfo", {

    //Table values
    //Edit below
      information: DataTypes.STRING,
      scores: DataTypes.INTEGER
    });
    return Ninja;
};
  