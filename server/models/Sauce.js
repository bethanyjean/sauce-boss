const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review');
const dateFormat = require('../utils/dateFormat');

const sauceSchema = new Schema(
  {
    reviewText: {
      type: String,
      required: 'You need to leave a review!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reviews: [reviewSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

sauceSchema.virtual('reviewCount').get(function() {
  return this.reviews.length;
});

const Sauce = model('Sauce', sauceSchema);

module.exports = Sauce;
