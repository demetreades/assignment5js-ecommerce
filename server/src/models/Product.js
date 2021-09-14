const mongoose = require('mongoose');
const handleSlugs = require('./utils/slugify');

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      require: [true, 'Please add a name'],
    },
    slug: String,
    image: {
      type: String,
      default: '/kapio/default',
    },
    category: {
      type: String,
      required: true,
    },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'Category',
    // },
    brand: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    inStock: {
      type: Number,
      require: true,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

handleSlugs(productSchema);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
