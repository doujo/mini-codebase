const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    required: [true, 'productId required']
  },
  productName: {
    type: String,
    minlength: 3,
    required: [true, 'productName required'],
  },
  price: {
    type: Number,
    required: [true, 'price required']
  }
});

module.exports = mongoose.model('products', productSchema);