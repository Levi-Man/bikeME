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

export const QUERY_CATEGORY = gql`
  query category {
    category {
      _id
      name
      bikes{
        _id
        make
        model
        year
        mileage
        description
        bikePricePerDay
        images
      }
    }
  }
`;

export const QUERY_BIKES = gql`
  query bike {
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
      category {
        _id
        name
      }
    }
  }
`;