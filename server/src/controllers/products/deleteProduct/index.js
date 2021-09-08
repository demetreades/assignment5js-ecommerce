// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { Product } = require('../../../models');

/**
 * @desc    Delete a product
 * @route   DELETE /api/products/:id
 * @access  Private/Admin
 */
const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    logger.info(`PRODUCT: ${product.name} ${product._id} DELETED!`);
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    return next(new BaseError(404, 'Product not found'));
  }
});

module.exports = deleteProduct;
