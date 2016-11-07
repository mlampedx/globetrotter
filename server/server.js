const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./userController');

const app = express();

app.use(express.static(path.join(__dirname, './../client')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../client/index.html'));
})

app.get('/build/webpack-bundle.js', (req, res, next) => {
	return res.status(200).sendFile(path.join(__dirname, './../build/webpack-bundle.js'));
});

app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;
