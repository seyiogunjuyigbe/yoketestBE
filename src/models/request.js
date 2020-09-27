const mongoose = require('mongoose');

const { Schema } = mongoose;

const RequestSchema = new Schema(
  {
    name: { type: String },
    address: Schema.Types.Mixed,
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    telephone: String,
    rating: Number,
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    symptoms: [{ type: Schema.Types.ObjectId, ref: 'Symptom' }],
    telVerified: Boolean,
    created: Date,
    modified: Date,
  },
  { collection: 'requests' }
);

RequestSchema.index({ location: '2dsphere' });
RequestSchema.set('strict', true);

module.exports = mongoose.model('Request', RequestSchema);
