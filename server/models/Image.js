const { Schema } = require('mongoose');

// Define image schema
const imageSchema = new Schema({
  url: String,
  caption: String
});

module.exports = imageSchema;