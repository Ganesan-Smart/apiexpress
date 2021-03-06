var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
	order_id:{
    type: String,
    unique: true,
    required: false
  },
  food_name: {
    type: String,
    required: true,
    default: "Soru"
  },
  food_image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  user_id:{
    type: Number,
    required: true
  },
  provider_name: {
    type: String,
    required: true
  },
  provider_address: {
    type: String,
    required: true
  },
  provider_id: {
    type: Number,
    required: true
  },
  lon: {
    type: Number,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  zoom: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  delivery_address: {
  	type: String,
  	required: true
  },
  mobile_number: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }


}, { collections: 'orders'});

module.exports = mongoose.model('orders', cartSchema);