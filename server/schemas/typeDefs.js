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
    reviewText: String
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
      
  }

