const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    bikes: [Bike]
    bike(bikeId: ID!): Bike
    contracts: [Contract]

    #made this plural
    categories: [Category]
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
    dateOfBirth: String
    licenseDate: String
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
    images: [Image!]!
    category: String
  }

  type Image {
    url: String!
    description: String!
  }

  type Insurance {
   _id: ID!
   createdAt: String
   user: ID
   bike: ID
   insuranceQuotePerDay: Float!
  }

  type Contract { 
    _id: ID!
    createdAt: String
    user: ID
    bike: ID
    duration: Int!
    rentalPriceSub: Float!
    rentalPriceTotal: Float!
  }

  #edited the schema to add the bikes

  type Category {
    _id: ID!
    name: String
    bikes: [Bike]
  }

  type Auth {
    token: ID!
    user: User
  }
`;


module.exports = typeDefs;
