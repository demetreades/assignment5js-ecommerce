const logger = require('../logger');

const handleError = (err, req, res, next) => {
  const { statusCode, message } = err;
  logger.error(
    `[Error: ${statusCode}] [${new Date().toISOString()}] :: ${message}`
  );
  logger.error(`${err.stack}`);
  res.status(statusCode || 500);
  res.json({
    success: false,
    statusCode,
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = handleError;
