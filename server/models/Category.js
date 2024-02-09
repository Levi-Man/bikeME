const { Schema, model } = require('mongoose');
// const bikeSchema = require('./Bike');

const categorySchema = new Schema({
  name:
  {
    type: String,
    required: true
  },

  bikes: [{
    type: Schema.Types.ObjectId,
    ref: 'Bike'
  }],
});

const Category = model('Category', categorySchema);

module.exports = Category;
