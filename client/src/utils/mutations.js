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

