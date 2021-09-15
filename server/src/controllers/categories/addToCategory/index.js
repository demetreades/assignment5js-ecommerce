// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { Category } = require('../../../models');

/**
 * @description  Add product to a category
 * @route        GET /api/categories/:category_id/:product_id
 * @access       Private/Admin
 */
const addToCategory = asyncHandler(async (req, res, next) => {
  const { category_id, product_id } = req.body;
  const fetchCategory = await Category.findByIdAndUpdate(category_id, {
    $addToSet: { products: product_id },
  }).populate({
    path: 'products',
    select: '_id name price',
  });

  if (!fetchCategory) {
    return next(
      new BaseError(404, `Category with id: ${category_id} not found`)
    );
  }

  logger.info(
    `GET Category: ${fetchCategory.name}, ID: ${fetchCategory._id}, DESC: ${fetchCategory.description}, PRODUCTS: ${fetchCategory.products}`
  );

  res.status(200).json({
    success: true,
    fetchCategory,
  });
});

module.exports = addToCategory;
