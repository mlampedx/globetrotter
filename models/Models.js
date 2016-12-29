const UserModel = require('./User');
const FavoriteModel = require('./Favorite');
const connection = require('./database');

const User = connection.define('users', UserModel.attributes, UserModel.options);
const Favorite = connection.define('favorites', FavoriteModel.attributes, FavoriteModel.options);

// POSTGRES DOCS ON RELATIONSHIPS: http://docs.sequelizejs.com/en/latest/docs/associations/

User.belongsToMany(Favorite, {through: 'UserFavorite'});
Favorite.belongsToMany(User, {through: 'UserFavorite'});

module.exports = { User, Favorite, UserFavorite };
