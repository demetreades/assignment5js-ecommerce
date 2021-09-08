require('dotenv').config({ path: 'server/src/config/.env' });
const { Product, User, Order } = require('../../models');
const { products, users } = require('../DATA');
const { logger } = require('../../utils');
const databaseConnection = require('./connection');

databaseConnection();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    logger.info('Data imported');
    process.exit();
  } catch (err) {
    logger.error(`${err}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    logger.info('Data deleted!');
    process.exit();
  } catch (err) {
    logger.error(`${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
