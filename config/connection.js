// THIS FILE INITIATES THE CONNECTION TO MYSQL
// Dependencies 
const Sequelize = require('sequelize');

//Creates MySQL connection using Sequelize 
<<<<<<< HEAD
const sequelize = new Sequelize('ninjawarrior_db', 'root','Badminton1!', {
=======
const sequelize = new Sequelize('ninjawarrior_db', 'root', '', {
>>>>>>> master
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});

module.exports = sequelize;
