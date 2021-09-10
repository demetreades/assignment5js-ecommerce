// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { User } = require('../../../models');

/**
 * @desc    Delete a user
 * @route   DELETE /api/user/
 * @access  Private/Admin
 */
const deleteUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next(new BaseError(404, `User with email: ${email} not found`));
  }

  logger.info(`USER: ${user.name} ${user._id} DELETED!`);
  await user.remove();

  res.json({
    success: true,
    message: `User with name: ${user.name} email: ${user.email} removed`,
    data: {},
  });
});

module.exports = deleteUser;
