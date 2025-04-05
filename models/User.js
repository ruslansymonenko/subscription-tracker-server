const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please fill a valid email address',
    ],
  },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
