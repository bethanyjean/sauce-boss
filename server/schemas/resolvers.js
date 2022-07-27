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

  }}



    module.exports = resolvers;
