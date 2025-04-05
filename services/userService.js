const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const CustomError = require('../errors/CustomError');

require('dotenv').config();

class UserService {
  static async create({ name, email, password }) {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      const token = jwt.sign(
        { userId: savedUser._id, email: savedUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
      );

      return { user: savedUser, token };
    } catch (err) {
      throw err;
    }
  }

  static async login({ email, password }) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new CustomError(404, 'User not found');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new CustomError(400, 'Invalid password');
      }

      const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      return { user, token };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;
