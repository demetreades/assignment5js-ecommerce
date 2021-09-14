const mongoose = require('mongoose');
const handleSlugs = require('./utils/slugify');

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      trim: true,
      require: true,
    },
    slug: String,
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      trim: true,
      require: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  }
);

handleSlugs(categorySchema);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
