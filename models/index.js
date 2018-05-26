'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
var env = process.env.NODE_ENV || "development";
// const env = process.env.NODE_ENV || "development"  should we declare this env variable?
var config = require(__dirname + "/../config/config.json"); // should we declare an env variable and add it to the end of this statement in []?
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
