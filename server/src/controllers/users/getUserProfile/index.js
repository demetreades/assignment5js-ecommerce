// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { User } = require('../../../models/');

/**
 * @description  Get user profile
 * @route        GET /api/users/profile
 * @access       Private
 */
const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new BaseError(404, `User with id: ${req.params.id} not found`));
  }

  logger.info(
    `USER PROFILE: ${user.name} id: ${user._id}, admin: ${user.isAdmin}`
  );

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

module.exports = getUserProfile;
