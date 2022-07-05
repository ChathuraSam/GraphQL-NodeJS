const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        name: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favouriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublish: Int!
        isInTheators: Boolean!
    }

    type Query {
        users: [User!]!
        user(name: String!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        username: String!
        name: String!
        age: Int!
        nationality: Nationality! = SRI_LANKA
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
    }

    enum Nationality {
        SRI_LANKA
        CANADA
        INDIA
    }
`
module.exports = { typeDefs }
