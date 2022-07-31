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
    bossSuggestion: String
    imageName: String
    likeCount: Int
    reviewCount: Int
    reviews: [Review]
    likes: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    sauces: [Sauce]
    sauce(_id: ID!): Sauce
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addReview(sauceID: ID!, reviewBody: String!): Sauce
    addUser(username: String!, email: String!, password: String!): Auth
    addFavorite(sauceId: ID!): User
    addLike(sauceID: ID!): Sauce
  }
`;

module.exports = typeDefs;

