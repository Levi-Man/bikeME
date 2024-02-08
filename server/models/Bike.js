const { Schema, model } = require('mongoose');
const imageSchema = require('./Image');

const bikeSchema = new Schema({
  make:
  {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  mileage: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  bikePricePerDay: {
    type: Number,
    required: true
  },
  images: [imageSchema],
  category: {
    type: String,
    required: true
  },
  contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }]
});

const Bike = model('Bike', bikeSchema);

module.exports = Bike;