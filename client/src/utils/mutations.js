import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $age: Int!, $yearsDriving: Int!) {
    addUser(username: $username, email: $email, password: $password, age: $age, yearsDriving: $yearsDriving) {
      token
      user {
        _id
        username
        email
        age
        yearsDriving
      }
    }
  }
`
;

export const CREATE_CONTRACT = gql`
mutation Mutation($userName: String!, $bikeInfo: String!, $rentalPerDay: Float!, $insurancePerDay: Float!, $duration: Int!, $rentalPriceSub: Float!, $rentalPriceTotal: Float!) {
  createContract(userName: $userName, bikeInfo: $bikeInfo, rentalPerDay: $rentalPerDay, insurancePerDay: $insurancePerDay, duration: $duration, rentalPriceSub: $rentalPriceSub, rentalPriceTotal: $rentalPriceTotal) {
    _id
    bikeInfo
    createdAt
    duration
    insurancePerDay
    rentalPerDay
    rentalPriceSub
    rentalPriceTotal
    userName
  }
}
`
;
export const ADD_CONTRACT = gql`
mutation AddContractToUser($userId: ID!, $contractId: ID!) {
  addContractToUser(userId: $userId, contractId: $contractId) {
    _id
    age
    contracts {
      _id
      bikeInfo
      createdAt
      duration
      insurancePerDay
      rentalPerDay
      rentalPriceSub
      rentalPriceTotal
    }
    email
    password
    username
    yearsDriving
  }
}
`;


