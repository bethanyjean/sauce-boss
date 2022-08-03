const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review');
const userSchema = require('./User');
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
    bossSuggestion: {
      type: String,
    },
    
    imageName: {
      type: String,
    },

    imagePath: {
      type: String,
    },

    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    
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

sauceSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

const Sauce = model('Sauce', sauceSchema);

module.exports = Sauce;
