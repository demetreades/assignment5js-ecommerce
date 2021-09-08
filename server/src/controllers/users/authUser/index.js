// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger, generateToken } = require('../../../utils');
const { User } = require('../../../models');

/**
 * @description  Auth user & get token
 * @route        POST /api/users/login
 * @access       Public
 */
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    logger.info(`USER: ${user.name}, id: ${user._id}, has been authorized`);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    return next(new BaseError(401, 'Invalid email or password'));
  }
});

module.exports = authUser;
