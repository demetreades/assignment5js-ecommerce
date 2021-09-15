const logger = require('../logger');
const BaseError = require('./BaseError');

const handleMongoErrors = (err, req, res, next) => {
  logger.info(err);
  if (err.name === 'ValidationError') {
    const errorMsgs = Object.values(err.errors).map((value) => value.message);
    return next(new BaseError(404, errorMsgs));
  }

  if (err.name === 'CastError') {
    console.log(err);
    return next(new BaseError(404, `Resource not found with id: ${err.value}`));
  }

  if (err.code === 11000) {
    return next(
      new BaseError(400, `Duplicate field error: ${err.keyValue.name}`)
    );
  }

  next(err);
};

module.exports = handleMongoErrors;
