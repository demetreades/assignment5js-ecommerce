const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../../controllers/products');

router
  .route('/')
  .get(getProducts)
  .post(protect, createProduct);

router
  .route('/:product_id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;
