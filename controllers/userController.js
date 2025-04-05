const logger = require('../services/logger');
const UserService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const { user, token } = await UserService.create({ name, email, password });

    logger.info('User created successfully.');
    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await UserService.login({ email, password });

    logger.info(`User logged in successfully: ${email}`);
    res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { userId } = req.body;

    res.status(200).json({ message: 'User data' });
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser, loginUser, getUser };
