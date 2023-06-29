const resolvers = require('./user.resolvers')
const typeDefs = require('./user.graphql')
const model = require('./user.model')

const userApi = {
  typeDefs,
  model,
  resolvers
}

module.exports = userApi