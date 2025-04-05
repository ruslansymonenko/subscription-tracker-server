const logger = require('../services/logger');
const UserService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await UserService.create({ name, email, password });

    logger.info('User created successfully.');
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser };
