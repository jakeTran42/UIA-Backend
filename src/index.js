require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../UIA-prisma/generated/prisma-client')
const typeDefs = require('./typeDefs/index.ts')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Guide = require('./resolvers/Guide')

function stageInsertion(parent, args, context, info) {
  const mapId = "ck0qocxna6c2c0b40cgoqie55"
  const totalMap = 20

  for(i=1; i<totalMap+1; i++){
  }
}

const resolvers = {
    Query,
    Mutation,
    User,
    Guide
}

const server = new GraphQLServer({
  // typeDefs: './src/schema.graphql',
  typeDefs,
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(() => console.log(`Server is running on http://localhost:4000`)) 