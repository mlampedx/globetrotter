const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  google_id: Number,
  username: String,
  saved_data: Object
})

const User = mongoose.model('User', userSchema);

module.exports = User;