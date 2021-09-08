// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { Product } = require('../../../models');

/**
 * @description  Fetch single products
 * @route        GET /api/products/:id
 * @access       Public
 */
const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    logger.info(
      `GET PRODUCT: ${product.name}, ID: ${product._id}, CATEGORY: ${product.category}, DESC: ${product.description}`
    );
    res.json(product);
  } else {
    return next(new BaseError(404, 'Product not found'));
  }
});

module.exports = getProductById;
