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

  if (!product) {
    return next(
      new BaseError(404, `Product with id: ${req.params.id} not found`)
    );
  }

  logger.info(
    `GET PRODUCT: ${product.name}, ID: ${product._id}, CATEGORY: ${product.category}, DESC: ${product.description}`
  );

  res.status(200).json({
    success: true,
    data: product,
  });
});

module.exports = getProductById;
