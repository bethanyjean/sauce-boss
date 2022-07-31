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