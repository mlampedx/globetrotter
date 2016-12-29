const Sequelize = require('sequelize');
const { USERNAME, PASSWORD } = require('./../app.config');

const sequelize = new Sequelize('globetrotter', USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
