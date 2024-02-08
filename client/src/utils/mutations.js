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
  mutation addUser($username: String!, $email: String!, $password: String!, $dateOfBirth: Date!, $licenseDate: Date!) {
    addUser(username: $username, email: $email, password: $password, dateOfBirth: $dateOfBirth, licenseDate: $licenseDate) {
      token
      user {
        _id
        username
        email
        dateOfBirth
        licenseDate
      }
    }
  }
`;

// export const SAVE_CONTRACT = gql`
//   mutation saveBook($input: BookInput!) {
//     saveBook(input: $input) {
//       _id
//       username
//       email
//         savedBooks {
//         bookId
//         authors
//         description
//         title
//         image
//         link
//       }
//     }
//   }
// `;

// export const REMOVE_BOOK = gql`
//   mutation removeBook($bookId: String!) {
//     removeBook(bookId: $bookId) {
//       _id
//       }
//   }
// `;
