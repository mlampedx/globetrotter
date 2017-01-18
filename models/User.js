const Sequelize = require('sequelize');

const attributes = {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-z0-9\_\-]+$/i,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  salt: {
    type: Sequelize.STRING,
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
};

module.exports = { attributes, options };
