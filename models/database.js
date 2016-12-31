const Sequelize = require('sequelize');
const { USERNAME, PASSWORD } = require('./../app.config');

const sequelize = new Sequelize('globetrotter', USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
