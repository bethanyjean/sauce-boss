const { AuthenticationError } = require('apollo-server-express');
const { User, Sauce} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('favSauces');
          
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    sauce: async (parent, { _id }) => {
      const sauceData = await Sauce.findOne({ _id })
        .populate('reviews');
      return sauceData;
    },

    sauces: async () =>{
      const sauceData = await Sauce.find()
        .populate('reviews');
      return sauceData;
    }

  },
 Mutation: {
    addReview: async (parent, { sauceId, reviewBody }, context) => {
      if (context.user) {
        const updatedSauce = await Sauce.findOneAndUpdate(
          { _id: sauceId },
          { $push: { reviews: { reviewBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedSauce;
      }
      throw new AuthenticationError('You need to be logged in!');
  },

  addLike: async (parent, { sauceId }, context) => {
    if (context.user) {
      const updatedSauce = await Sauce.findOneAndUpdate(
        { _id: sauceId },
        { $push: { likes: { username: context.user.username} } }
      );
      return updatedSauce;
    }
    throw new AuthenticationError('You need to be logged in!'); 
  },

  addFavorite: async (parent, { sauceId }, context) => {
    if (context.user) {
            
      const updatedUser = await User.findOneAndUpdate(
        { username: context.user.username},
        { $push: { favSauces: { _id: sauceId } } }
      );
      return updatedUser;
    }
    throw new AuthenticationError('You need to be logged in!'); 
  },

  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
    console.log(user)

    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);
    return { token, user };
  },

  //mutation to add a new user
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
  },
}
}



    module.exports = resolvers;
