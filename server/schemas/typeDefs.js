const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    dateOfBirth: Date
    licenseDate: Date
    contracts: [Contract]
  }

  type Bike {
    bikeId: String!
    make: String
    model: String
    year: Num
    mileage: Num
    description: String
    bikePricePerDay: Num!
    images: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
