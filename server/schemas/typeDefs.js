const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    bikes: [Bike]
    contracts: [Contract]
}

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    dateOfBirth: Date
    licenseDate: Date
    contracts: [Contract]
  }

  type Bike {
    _id: ID!
    make: String
    model: String
    year: Int
    mileage: Int
    description: String
    bikePricePerDay: Float!
    images: [String]
  }

  type Insurance {
   _id: ID!
   createdAt: Date
   user: ID
   bike: ID
   insuranceQuotePerDay: Float!
  }

  type Contract { 
    _id: ID!
    createdAt: Date
    user: ID
    bike: ID
    duration: Int!
    rentalPriceSub: Float!
    rentalPriceTotal: Float!
  }
`;

module.exports = typeDefs;
