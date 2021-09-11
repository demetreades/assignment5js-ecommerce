const router = require('express').Router();

const productsRoutes = require('./products');
const categoriesRoutes = require('./categories');
const usersRoutes = require('./users');

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);

module.exports = router;
