const express = require('express');
const passport = require('passport');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const { authenticateUser } = require('./AuthenticationController');
const { loginUser, registerUser } = require('./UserController')

const app = express();

app.use(session({
	path: '*',
	secret: 'Globetrotter',
	httpOnly: true,
	secure: false,
	maxAge: null
}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './../client')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../build/index.html'));
});

app.get('/build/webpack-bundle.js', (req, res, next) => {
	return res.status(200).sendFile(path.join(__dirname, './../build/webpack-bundle.js'));
});

app.get('/profile', authenticateUser);
app.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

app.post('/register', registerUser);
app.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	failureRedirect: '/',
	failureFlash: true,
}));

app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;
