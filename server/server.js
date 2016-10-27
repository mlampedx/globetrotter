const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./userController');
// const bcrypt = require('bcrypt');

// mongoose.connect('mongodb://localhost/globetrotter');
// mongoose.connection.once('open', () => {
//   console.log('Connected with MongoDB ORM - Globetrotter');
// });

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Find valid uri

// const mongoURI = 'mongodb://localhost/globetrotter';
// mongoose.connect(mongoURI);

// app.use(express.static(__dirname +'./../client'));

app.get('/', (req, res) => {
  res.write(fs.readFileSync(path.join(__dirname, '../index.html')));
  res.end();
});

app.get('/signup', (req, res) => {
  res.write(fs.readFileSync(path.join(__dirname, '../client/signup.html')));
  res.end();
});

app.get('/login', (req, res) => {
  res.write(fs.readFileSync(path.join(__dirname, '../client/login.html')));
  res.end();
});



app.post('/signup', userController.createUser);

// app.post('/login', userController.verifyUser);

app.listen(3000, () => console.log('listening...'));

module.exports = app;