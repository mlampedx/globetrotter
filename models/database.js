const Sequelize = require('sequelize');
const { USERNAME, PASSWORD } = require('./../app.config');

const sequelize = new Sequelize('globetrotter', USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    throw new Error(err);
  });

module.exports = sequelize;
