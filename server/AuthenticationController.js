const AuthenticationController = {};

AuthenticationController.isAuthenticated = (req, res, next) => {
  if (req.user) {
    res.cookie('google_id', req.user.google_id);
    res.cookie('username', req.user.username);
    console.log(res.cookie)
    return next();
  }
  res.redirect('/login');
}

module.exports = AuthenticationController;