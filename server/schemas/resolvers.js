const { User, Contract,Bike, Category } = require('../models');
const  {signToken}  = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, { user }) => {
      if (!user) {
        throw new Error('You are not authenticated!');
      }
      try {
        // Fetch the user's data including contracts
        const userData = await User.findById(user._id).populate('contracts');
        return userData;
      } catch (error) {
        throw new Error('Failed to fetch user data');
      }
    },
    bikes: async () => {
      const bikeData = await Bike.find();
      if (!bikeData) {
        throw new Error('No bikes found!');
      }
      try {
        return bikeData;
      } catch (error) {
        throw new Error('Failed to fetch bike data');
      }
      // return Bike.find();
    },

    category: async () => {
      try {
        const categoryData = await Category.find().populate('bikes');
        if (!categoryData || categoryData.length === 0) {
          throw new Error('No Categories Found!');
        }
        return categoryData.map(category => ({
          ...category.toObject(),
          _id: category._id.toString(),
        }));
      } catch (error) {
        throw new Error('Failed to fetch Categories');
      }
    }
  },
  Mutation: {
    // Resolver for creating a user, signing a token, and sending it back
    addUser: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });

      if (!user) {
        throw new AuthenticationError('Something is wrong!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Resolver for logging in a user, signing a token, and sending it back
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
  User: {
    contracts: async (parent) => {
      try {
        const contracts = await Contract.find({ user: parent._id });
        return contracts;
      } catch (error) {
        throw new Error('Failed to fetch contracts');
      }
    },
  },
};

module.exports = resolvers;
