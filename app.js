const express = require('express');
const app = express();
const logger = require('./services/logger');
const router = require('./routes/router');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/database');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  logger.info(`Incoming Request: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.json());

connectDB();

app.use('/api', router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
