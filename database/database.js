const mongoose = require('mongoose');
import app from server.js;
import User from userSchema.js;
mongoose.connect('mongodb://localhost:3000/globetrotter');

// app.post('/dashboard', (req, res) => {

// })