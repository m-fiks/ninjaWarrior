// Index.js figures out which database it should use based on Heroku ("production") Or running locally ("development")
// It will also use configuration inside config.json
// Then​ ​it​ ​goes​ ​through​ ​every​ ​other​ ​JavaScript​ ​file​ ​inside​ ​our​ ​models​ ​folder​ ​and​ ​runs​ ​them through​ ​Sequelize
// It​ ​gives​ ​our​ ​models​ ​all​ ​of​ ​Sequelize’s​ ​helper​ ​methods​ ​and​ ​makes sure​ ​that​ ​all​ ​of​ ​the​ ​associations​ ​between​ ​models​ ​are​ ​properly​ ​set​ ​up.​ ​
// It​ ​exports​ ​an object​ ​we​ ​will​ ​use​ ​to​ ​interface​ ​with​ ​Sequelize​ ​in​ ​our​ ​other​ ​files

'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
