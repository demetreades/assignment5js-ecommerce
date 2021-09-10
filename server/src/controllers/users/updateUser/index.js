// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger, BaseError } = require('../../../utils');
const { User } = require('../../../models');

/**
 * @desc    Update a user
 * @route   POST /api/users/profile/:id
 * @access  Private/Admin
 */
const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new BaseError(404, `User with id: ${req.params.id} not found`));
  }

  logger.info(`USER with name: ${user.name}, email: ${user.email} UPDATED`);

  res.status(200).json({
    success: true,
    message: `User: ${user.name} updated`,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  });
});

module.exports = createUser;
