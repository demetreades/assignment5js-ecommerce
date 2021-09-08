// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger, generateToken } = require('../../../utils');
const { User } = require('../../../models');

/**
 * @description  Register a new user
 * @route        POST /api/users
 * @access       Public
 */
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new BaseError(400, 'User already exists'));
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    logger.info(
      `USER CREATED: { id: ${user._id}, name: ${user.name}, email: ${user.email}, admin: ${user.isAdmin} }`
    );
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    return next(new BaseError(400, 'Invalid user data'));
  }
});

module.exports = registerUser;
