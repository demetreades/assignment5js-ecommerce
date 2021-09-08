const { admin, protect } = require('./auth');
const generateToken = require('./generateToken');

module.exports = {
  admin,
  protect,
  generateToken,
};
