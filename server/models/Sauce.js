const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review');
const dateFormat = require('../utils/dateFormat');

const sauceSchema = new Schema(
  {
    sauceName: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    description: {
      type: String,
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
