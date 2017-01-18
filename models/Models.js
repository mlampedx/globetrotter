const UserModel = require('./User');
const FavoriteModel = require('./Favorite');
const SessionModel = require('./Session');
const sequelize = require('./database');

const User = sequelize.define('users', UserModel.attributes, UserModel.options);
const Favorite = sequelize.define('favorites', FavoriteModel.attributes, FavoriteModel.options);
const Session = sequelize.define('sessions', SessionModel.attributes, SessionModel.options);

User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });

// sequelize.sync({force: true});

module.exports = { User, Favorite, Session };
