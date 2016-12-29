const bcrypt = require('bcrypt');
const User = require('./../models/User');

function registerUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;
  const email = req.body.email;
  
  if (!username || !password || !password2 || !email) {
    req.flash('error', "Please, fill in all the fields.")
    res.redirect('signup')
  }

  if (password !== password2) {
    req.flash('error', "Please, enter the same password twice.")
    res.redirect('signup')
  }

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)
  
  const newUser = {
    username: username,
    email: email,
    salt: salt,
    password: hashedPassword
  }

  User.create(newUser).then(function() {
    console.log('Success! User created!', newUser);
    res.redirect('/profile')
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.redirect('/register')
  })
}

function loginUser(req, res) {
  User.findOne({ where: { username: req.params.username } }).then((data) => {
    console.log(data);
    return res.json(data)
  });
}

module.exports = { registerUser };
