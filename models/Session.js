const Sequelize = require('sequelize');

const attributes = {
  ssid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
};

module.exports = { attributes, options };
