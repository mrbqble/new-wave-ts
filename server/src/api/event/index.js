const resolvers = require('./event.resolvers')
const typeDefs = require('./event.graphql')
const model = require('./event.model')

const eventApi = {
  typeDefs,
  model,
  resolvers
}

module.exports = eventApi