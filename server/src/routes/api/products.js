const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} = require('../../controllers/products');

router
  .route('/')
  .get(getProducts)
  .post(protect, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct);
//   .put(protect, admin, updateProduct);

module.exports = router;
