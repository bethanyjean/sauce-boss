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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
mutation addReview($sauceId: ID!, $reviewBody: String!) {
    addReaction(sauceId: $sauceId, reviewBody: $reviewBody) {
      _id
      reviewCount
      reviews {
        _id
        reviewBody
        createdAt
        username
      }
    }
  }
`;

export const REMOVE_REVIEW = gql `
  mutation removeReview($id: ID!) {
    removeReview(id: $id) {
        _id
        sauceName
        reviews {
            _id
            reviewBody
        }

    }
  }
`;