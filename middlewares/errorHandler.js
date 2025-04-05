const logger = require('../services/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(
    `Error occurred on: ${req.method} ${req.originalUrl}, Error message: ${err.message}`,
  );

  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }

  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;
