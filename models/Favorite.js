const Sequelize = require('sequelize');

const attributes = {
  favid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  value: {
    type: Sequelize.VARCHAR,
    allowNull: false,
  },
  year: { 
    type: Sequelize.STRING,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
}

module.exports = { attributes, options };
