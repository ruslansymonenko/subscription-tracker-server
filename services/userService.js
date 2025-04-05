const User = require('../models/User');

class UserService {
  static async create({ name, email, password }) {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const newUser = new User({
        name,
        email,
        password,
      });

      const savedUser = await newUser.save();

      return savedUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;
