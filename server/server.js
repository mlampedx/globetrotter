const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const { isAuthenticated, verifySession, addFavorite, deleteFavorite, retrieveFavorites, registerUser, retrieveUser } = require('./Controllers');
const { SESSION_SECRET } = require('./../app.config');

const app = express();

app.use(session({
	cookieName: 'session',
	secret: SESSION_SECRET,
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000,
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../client')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../build/index.html'));
});
app.get('/build/webpack-bundle.js', (req, res, next) => {
	return res.status(200).sendFile(path.join(__dirname, './../build/webpack-bundle.js'));
});
app.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});
app.get('*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../build/index.html'));
});


app.post('/register', registerUser, isAuthenticated);
app.post('/login', retrieveUser, verifySession);
app.post('/favorites', retrieveFavorites); 
app.post('/add-favorite', addFavorite);
app.post('/delete-favorite', deleteFavorite);

app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;
