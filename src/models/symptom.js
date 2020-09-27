const mongoose = require('mongoose');

const { Schema } = mongoose;

const SymptomSchema = new Schema(
  {
    name: String,
    description: String,
    order: Number,
    score: Number,
  },
  { collection: 'symptoms' }
);

module.exports = mongoose.model('Symptom', SymptomSchema);
