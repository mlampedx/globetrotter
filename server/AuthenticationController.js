const User = require('./../models/User');

function authenticateUser(req, res, next) {
  if (req.user.id) {
    req.cookie('id', req.user.id);
    return next();
  }
  req.flash('error', 'You must be logged in to access this page.');
  res.redirect('/');
}

module.exports = { authenticateUser };
