const { ApolloServer } = require("apollo-server");
const { resolvers } = require('./SCHEMA/resolvers');
const { typeDefs } = require('./SCHEMA/type-def');

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url})=>{
    console.log(`Running at post : ${url}`)
})
