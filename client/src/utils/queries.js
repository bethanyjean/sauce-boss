import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      favSauces {
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
    sauces {
      _id
      sauceName
      createdAt
      description
      bossSuggestion
      imageName
      imagePath
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

export const QUERY_SAUCE = gql`
  query sauce($id: ID!) {
    sauce(_id: $id) {
      _id
      sauceName
      createdAt
      description
      bossSuggestion
      imageName
      imagePath
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