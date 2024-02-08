const { Schema, model } = require('mongoose');
const imageSchema = require('./Image');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
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
