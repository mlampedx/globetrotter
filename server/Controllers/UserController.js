const bcrypt = require('bcrypt');
const sequelize = require('./../../models/database');
const { User, Session } = require('./../../models/Models');

function registerUser(req, res, next) {

  console.log('registering user...', req.body)
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;
  const email = req.body.email;
  
  if (!username || !password || !password2 || !email) {
    res.redirect('/register');
  }

  if (password !== password2) {
    res.redirect('/register');
  }

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)
  
  const newUser = {
    username: username,
    email: email,
    salt: salt,
    password: hashedPassword
  }

  console.log('creating new user!', newUser)

  User.sync().then(() => {
      User.create(newUser).then(results => next())
        .catch(err => res.status(400).send(err));
  }).catch((err) => res.status(400).send(err));
}

function retrieveUser(req, res, next) {
  Session.find({
    where: {
      ssid: req.body.ssid
    }
  }).then(user => {
    if (user) res.cookie('username', user.username);

    if (!user) {
      User.findOne({
        where: {
          username: req.body.username
        }
    }).then(user => {

    if (!user) return res.status(400).send('no user in the db');
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, val) => {
        req.session.user = user.username;
        res.cookie('ssid', Math.floor(Math.random() * 2132131231) + 1);
        res.cookie('username', user.username);
        req.session.save(() => console.log('saving session'));
        if (val === false) { 
          res.status(400).send('no user'); 
        } else { next(); }
      })
    }
    }).catch(err => res.status(400).end());
      }
  }).catch(err => res.status(400).send(err));
}

module.exports = { registerUser, retrieveUser };
