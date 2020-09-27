const mongoose = require('mongoose');

const { Schema } = mongoose;

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});
module.exports = mongoose.model('Point', pointSchema);
