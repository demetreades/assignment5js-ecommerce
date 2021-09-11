const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { BaseError } = require('../../error');
const { User } = require('../../../models');

const protect = asyncHandler(async (req, res, next) => {
  // eslint-disable-next-line init-declarations
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);

    req.user = await User.findById(decodedToken.id).select('-password');

    if (!token) {
      return next(new BaseError(401, 'Not authorized, no token'));
    }

    next();
  }
});

module.exports = protect;
