const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  authUser,
  registerUser,
  getUserProfile,
} = require('../../controllers/users');

router
  .route('/')
  .post(registerUser);

router
  .post('/login', authUser);

router
  .route('/profile')
  .get(protect, getUserProfile);

module.exports = router;
