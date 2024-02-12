const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  me: User
  users: [User]
  user(userId: ID!): User
  bikes: [Bike]
  bikesCategories(bikeCategory: String!): [Bike]
  bike(bikeId: ID!): Bike
  contracts: [Contract]
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!, age: Int!, yearsDriving: Int!): Auth
  #createContract(userName: String!, bikeInfo: String!, rentalPerDay: Float!, insurancePerDay: #Float!, duration: Int!, rentalPriceSub: Float!, rentalPriceTotal: Float!): Contract
  createContract(userName: String!, bikeInfo: String!, rentalPerDay: Float!, insurancePerDay: Float!, duration: Int!, rentalPriceSub: Float!, rentalPriceTotal: Float!): Contract
  addContractToUser(userId: ID!, contractId: ID!): User
}

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    age: Int!
    yearsDriving: Int!
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
    availability: Boolean
  }

  type Image {
    url: String!
    description: String!
  }

  type Insurance {
   _id: ID!
   createdAt: String
   userAge: Int!
   rentalPerDay: Float!
   yearsDriving: Int!
   insuranceQuotePerDay: Float!
  }
  
  type Contract { 
    _id: ID!
    createdAt: String
    userName: String!
    bikeInfo: String!
    rentalPerDay: Float!
    insurancePerDay: Float!
    duration: Int!
    rentalPriceSub: Float!
    rentalPriceTotal: Float!
  }

  #edited the schema to add the bikes

  type Auth {
    token: ID!
    user: User
  }
`;


module.exports = typeDefs;
