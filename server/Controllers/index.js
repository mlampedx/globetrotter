const { isAuthenticated, verifySession } = require('./AuthenticationController');
const { addFavorite, deleteFavorite, retrieveFavorites } = require('./FavoriteController');
const { registerUser, retrieveUser } = require('./UserController');

module.exports = {
  isAuthenticated,
  verifySession,
  addFavorite,
  deleteFavorite,
  retrieveFavorites,
  registerUser,
  retrieveUser,
};
