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

  if (user) {
    logger.info(
      `USER PROFILE: ${user.name} id: ${user._id}, admin: ${user.isAdmin}`
    );
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    return next(new BaseError(404, 'User not found'));
  }
});

module.exports = getUserProfile;
