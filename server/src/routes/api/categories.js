const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  getCategories,
  getCategoryById,
  createCategory,
} = require('../../controllers/categories');

router
  .route('/')
  .get(getCategories)
  .post(protect, admin, createCategory);

router
  .route('/:category_id')
  .get(getCategoryById);

module.exports = router;
