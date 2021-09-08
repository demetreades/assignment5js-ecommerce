const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { BaseError } = require('../error');
const { User } = require('../../models');

const protect = asyncHandler(async (req, res, next) => {
  // eslint-disable-next-line init-declarations
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decodedToken.id).select('-password');

      next();
    } catch (err) {
      return next(new BaseError(401, 'Not Authorized, token failed'));
    }
  }

  if (!token) {
    return next(new BaseError(401, 'Not authorized, no token'));
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return next(new BaseError(401, 'Not authorized as an admin'));
  }
};

module.exports = {
  protect,
  admin,
};
