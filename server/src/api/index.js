const userApi = require('./user/index')
const eventApi = require('./event/index')
const _ = require('lodash')
const indexTypeDefs = require('./index.graphql')

const typeDefs = [
  indexTypeDefs.loc.source.body,
  userApi.typeDefs.loc.source.body,
  eventApi.typeDefs.loc.source.body
]

const resolvers = _.merge(
  userApi.resolvers,
  eventApi.resolvers
)

const context = {
  User: userApi.model,
  Event: eventApi.model
}

const api = {
  typeDefs,
  resolvers,
  context
}

module.exports = api