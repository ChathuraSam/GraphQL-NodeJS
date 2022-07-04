const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        name: String!
        age: Int!
        nationality: Nationality!
    }

    type Query {
        users: [User!]!
        user(name: String!): User!
    }

    enum Nationality {
        SRI_LANKA
        CANADA
        INDIA
    }
`
module.exports = { typeDefs }
