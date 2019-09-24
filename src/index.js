require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../UIA-prisma/generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Guide = require('./resolvers/Guide')
const Map = require('./resolvers/Map')
const Element = require('./resolvers/Element')

const resolvers = {
    Query,
    Mutation,
    User,
    Guide,
    Map,
    // Element
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(() => console.log(`Server is running on http://localhost:4000`)) 