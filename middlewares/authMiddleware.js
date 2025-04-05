const jwt = require('jsonwebtoken');
const CustomError = require('../errors/CustomError');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return next(new CustomError(401, 'No token, authorization denied'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    return next(new CustomError(401, 'Invalid token'));
  }
};

module.exports = authMiddleware;
