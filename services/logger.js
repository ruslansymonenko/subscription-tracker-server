const winston = require('winston');

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), logFormat),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    // new winston.transports.File({ filename: 'logs/server.log' })
  ],
});

module.exports = logger;
