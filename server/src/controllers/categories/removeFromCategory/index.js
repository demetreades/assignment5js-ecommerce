// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { Category } = require('../../../models');

/**
 * @description  Remove product from a category
 * @route        GET /api/categories/:category_id/:product_id
 * @access       Private/Admin
 */
const removeFromCategory = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  console.log(req.body.product_id);
  console.log(req.body.category_id);
  const { category_id, product_id } = req.body;
  const fetchCategory = await Category.findByIdAndUpdate(category_id, {
    $pull: { products: product_id },
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

module.exports = removeFromCategory;
