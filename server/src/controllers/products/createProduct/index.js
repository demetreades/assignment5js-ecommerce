const { CREATED } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger } = require('../../../utils');
const { Product } = require('../../../models');

/**
 * @desc    Create a product
 * @route   POST /api/products
 * @access  Private/Admin
 */
const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);

  logger.info(`NEW PRODUCT: ${newProduct.name}, id: ${newProduct._id} CREATED`);

  res.status(CREATED).json({
    success: true,
    message: 'new product created',
    newProduct, // 201 giati einai resource
  });
});

module.exports = createProduct;
