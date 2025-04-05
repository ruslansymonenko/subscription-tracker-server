const mongoose = require('mongoose');
const logger = require('../services/logger');

require('dotenv').config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info('Connected to DB');
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
