const mongoose = require('mongoose');
import app from server.js;
import User from userSchema.js;
mongoose.connect('mongodb://localhost:3000/globetrotter');

app.post('/me', (req, res) => {
  var me = new User({
    google_id: '1',
    username: 'Me',
  })
  me.save((err) => {
    if (err) {
      return res.status(404).send('Test account was not saved to the db');
    }
    else {
      res.cookie('google_id', 1);
      res.cookie('username', 'Me');
      return res.status(200).send('Test account was saved to the db');
    }
  })
})