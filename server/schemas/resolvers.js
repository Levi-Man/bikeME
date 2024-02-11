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

    //filter by category
    bikesCategories: async (parent, {bikeCategory}) => {
      const bikeData = await Bike.find({category: bikeCategory});
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

    categories: async () =>{

      const categoryData = await Category.find({}).populate('bikes');

      if(!categoryData){
        throw new Error('No Categories Found!');
      }
      try {
        return categoryData;
      } catch (error) {
        throw new Error('Failed to fetch Categories');
      }
    }
  },
  Mutation: {
    // Resolver for creating a user, signing a token, and sending it back
    addUser: async (parent, { username, email, password,dateOfBirth, licenseDate }, context) => {
      const user = await User.create({ username, email, password, dateOfBirth, licenseDate });

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

    createContract: async (parent, { userId, bikeId, duration }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      // if (context.user) {
        return await Contract.create({userId,bikeId,duration});
      // }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      // throw AuthenticationError;
    },

    addContractToUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }
      throw AuthenticationError;
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
