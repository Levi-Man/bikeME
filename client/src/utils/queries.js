import { gql } from '@apollo/client';

// Define the QUERY_ME query
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      contracts {
        _id
        createdAt
        user
        bike
        duration
        rentalPriceSub
        rentalPriceTotal
      }
    }
  }
`;

export const QUERY_USERS = gql`
query users {
  users {
    _id
    username
    email
    age
    yearsDriving
    contracts {
      _id
      bikeInfo
      rentalPerDay
      duration
    }
  }
}
`;

// export const QUERY_CATEGORY = gql`
//   query category {
//     category {
//       _id
//       name
//       bikes{
//         _id
//         make
//         model
//         year
//         mileage
//         description
//         bikePricePerDay
//         images
//       }
//     }
//   }
// `;

export const QUERY_BIKES = gql`
  query allBikes {
    bikes {
      _id
      make
      model
      year
      mileage
      description
      bikePricePerDay
      images {
        url
        description
      }
      category
      availability
    }
  }
`;

export const QUERY_SINGLE_BIKE = gql`
  query singleBike($bikeId: ID!){
    bike(bikeId: $bikeId) {
      _id
      make
      model
      year
      mileage
      description
      bikePricePerDay
      images {
        url
        description
      }
      category
      availability
    }
  }
`;

export const QUERY_SINGLE_USER =gql`
query Query($userId: ID!) {
  user(userId: $userId) {
    _id
    age
    contracts {
      bikeInfo
      _id
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