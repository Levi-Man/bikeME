const { User, Contract, Bike, } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (user._id) {
        return User.findOne({ _id: context.user._id }).populate('contracts');
      }
      throw AuthenticationError;
    },

    //get single user
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('contracts');
    },

    //get all users
    users: async () => {
      const userData = await User.find().populate('contracts');
      if (!userData) {
        throw new Error('No bikes found!');
      }
      try {
        return userData;
      } catch (error) {
        throw new Error('Failed to fetch bike data');
      }
    },

    //get all bikes
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
    },


    // //filter by category
    bikesCategories: async (parent, { bikeCategory }) => {
      const bikeData = await Bike.find({ category: bikeCategory });
      if (!bikeData) {
        throw new Error('No bikes found!');
      }
      try {
        return bikeData;
      } catch (error) {
        throw new Error('Failed to fetch bike data');
      }
    },


    //get single bike
    bike: async (parent, { bikeId }) => {
      const bikeData = await Bike.findOne({ _id: bikeId });
      if (!bikeData) {
        throw new Error('No bikes found with this id!');
      }
      try {
        return bikeData;
      } catch (error) {
        throw new Error('Failed to fetch bike data');
      }
    },
  },
  Mutation: {
    // Resolver for creating a user, signing a token, and sending it back
    addUser: async (parent, { username, email, password, age, yearsDriving }, context) => {
      const user = await User.create({ username, email, password, age, yearsDriving });

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

    createContract: async (parent, { userName, bikeInfo, rentalPerDay, insurancePerDay, duration, rentalPriceSub, rentalPriceTotal }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      // if (context.user) {
      return await Contract.create({ userName, bikeInfo, rentalPerDay, insurancePerDay, duration, rentalPriceSub, rentalPriceTotal });
      // }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      // throw AuthenticationError;
    },

    addContractToUser: async (parent, { userId, contractId }, context) => {
      // if (context.user) {
      const user = await User.findByIdAndUpdate({ _id: userId }, { $push: { contracts: contractId } }, { new: true }).populate('contracts');
      // }
      // throw AuthenticationError;

      return user;
    },
  },
};

module.exports = resolvers;
