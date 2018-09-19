var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

var itemSchema = new Schema({

  id:{
    type: Number,
    unique: true,
    required: false
  },
  name: {
    type: String,
    required: true,
    default: "Soru"
  },
  img : {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  breakfast: {
    type: Number,
    required: true
  },
  lunch: {
    type: Number,
    required: true
  },
  dinner: {
    type: Number,
    required: true
  },
  rating: {
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
  tax: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: false
  },
  updated_at: {
    type: Date,
    required: false
  }

}, { collection: 'foods' });
itemSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Item', itemSchema);