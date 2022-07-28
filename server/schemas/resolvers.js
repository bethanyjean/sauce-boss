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
    
    users: async () => {
      return User.find()
        .select('-__v -password')
    },

    sauce: async () =>{
      return Sauce.find()
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
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);
    return { token, user };
  }


}
}



    module.exports = resolvers;
