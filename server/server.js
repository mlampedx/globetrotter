const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./userController');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const creds = require('../app.config');

const app = express();

app.use(express.static(path.join(__dirname, './../client')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../client/index.html'));
})

app.get('/build/webpack-bundle.js', (req, res, next) => {
	return res.status(200).sendFile(path.join(__dirname, './../build/webpack-bundle.js'));
});


// app.use(session({
// 	path: '*',
// 	secret: 'Globetrotter',
// 	httpOnly: true,
// 	secure: false,
// 	maxAge: null
// }));
// app.use(cookieParser());
// app.use(bodyParser.json());
// // CORS headers
// // app.use((req, res, next) => {
// // 	res.header("Access-Control-Allow-Origin", "*");
// // 	res.header("Access-Control-Allow-Headers",
// // 		"Origin, X-Requested-With, Content-Type, Accept");
// // 	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
// // 	next();
// // });

// passport.use(new GoogleStrategy({
// 		clientID: creds.GOOGLE_CLIENT_ID,
// 		clientSecret: creds.GOOGLE_CLIENT_SECRET,
// 		callbackURL: creds.CALLBACK_URL,
// 		passReqToCallback: true
// 	},
// 	function(req, accessToken, refreshToken, profile, done) {
// 		process.nextTick(function() {
// 			const query = {
// 				google_id: profile.id
// 			};
// 			const update = {
// 				google_id: profile.id,
// 				username: profile.name.givenName
// 			};
// 			const options = {
// 				new: true,
// 				upsert: true
// 			};
// 			User.findOneAndUpdate(query, update, options)
// 				.then(user => {
// 					console.log('Got it!');
// 					done(null, user);
// 				})
// 				.catch(err => {
// 					console.log('Error in adding User: ', err);
// 					done(err);
// 				});
// 		});
// 	}
// ));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
// 	console.log('Serializing');
// 	done(null, {
// 		google_id: user.google_id,
// 		username: user.username
// 	});
// });

// passport.deserializeUser(function(user, done) {
// 	console.log('Deserializing');
// 	User.findOne({
// 		google_id: user.google_id
// 	}, function(err, user) {
// 		done(err, user);
// 	});
// });

// app.get('/auth/google', passport.authenticate('google', {
// 	scope: ['profile', 'email']
// }));

// app.get('/auth/google/callback', (
// 	passport.authenticate('google', {
// 		successRedirect: '/',
// 		failureRedirect: '/'
// 	})));


app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;
