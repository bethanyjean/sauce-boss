import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      sauces {
        _id
        sauceName
        description
        bossSuggestion
        imageName
      }
    }
  }
`;

export const QUERY_SAUCES = gql`
  {
    sauce {
      _id
      sauceName
      createdAt
      description
      bossSuggestion
      imageName
      likeCount
      reviews {
        _id
        reviewBody
        createdAt
        username
      }
    }
  }
`;