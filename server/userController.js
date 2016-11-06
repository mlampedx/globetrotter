const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:3000/globetrotter', (err, database) => {

// mongoose.connect('mongodb://localhost/globetrotter');
// mongoose.connection.once('open', () => {
//   console.log('Connected with MongoDB ORM - Globetrotter');
// });

// userController.verifyUser = verifyUser;

// const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  savedData: { type: Array }
});

/**
* getAllUsers
*
* @param next - Callback Function w signature (err, users)
*/
const userController = {};

userController.getAllUsers = (next) => {
  User.find({}, next);
},

/**
* createUser - create a new User model and then save the user to the database.
*
* @param req - http.IncomingRequest
* @param rs - http.ServerResponse
*/
userController.createUser = (req, res, next) => {
  console.log(req.body)
  if (req.body.username.constructor !== String || req.body.password.constructor !== String) {
    return res.status(400).end();
  }

// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync(req.body.password, salt);
// req.body.password = hash;

const User = mongoose.model('User', userSchema);

let user = new User({
    name:	req.body.username,
    password: req.body.password
})
user.save();
next();

// const signupObj = {'username': req.body.username};

//   User.findOne((signupObj), (err, result) => {
//     req.result = result._id;
//     res.redirect('/');
//     next();
//     // return res.end();
//    });
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param rs - http.ServerResponse
*/
// userController.verifyUser = (req, res, next) => {
//   const loginObj = {'username': req.body.username};

//   User.findOne((loginObj), (err, result) => {
//     if (err || !result) {
//       res.redirect('/signup');
//       return res.end();
//     }

//     if (req.body.password === result.password) {
//       req.result = result._id;
//       res.redirect('/');
//       // next();
//       return res.end();
//     }

//     else {
//       res.redirect('/signup');
//       return res.end();
//     }
//   });
// };

module.exports = userController;

// });


// verifyUser