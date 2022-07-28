const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    favSauces: [Sauce]
  }

  type Review {
    _id: ID
    reviewBody: String
    createdAt: String
    username: String
  }

  type Sauce {
    _id: ID
    sauceName: String
    createdAt: String
    description: String
    reviewCount: Int
    reviews: [Review]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    sauce: [Sauce]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addReview(sauceID: ID!, reviewBody: String!): Sauce
  }
`;

module.exports = typeDefs;

