const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  getCategories,
  getCategoryById,
} = require('../../controllers/categories');

router
  .route('/')
  .get(protect, admin, getCategories);

router
  .route('/:category_id')
  .get(protect, admin, getCategoryById);

module.exports = router;
