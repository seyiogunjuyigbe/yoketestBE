const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema(
  {
    name: String,
    description: String,
    order: Number,
    score: Number,
  },
  { collection: 'tags' }
);

module.exports = mongoose.model('Tag', TagSchema);
