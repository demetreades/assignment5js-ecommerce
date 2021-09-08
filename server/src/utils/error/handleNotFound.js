const BaseError = require('./BaseError');

const handleNotFound = (req, res, next) => {
  next(new BaseError(404, `Endpoint not found ${req.originalUrl}`));
};

module.exports = handleNotFound;
