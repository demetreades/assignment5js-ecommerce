const { BaseError } = require('../../error');

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return next(new BaseError(401, 'Not authorized as an admin'));
  }
};

module.exports = admin;
