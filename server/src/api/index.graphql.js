const _ = require('apollo-server-core')

const typeDefs = _.gql`
  type Response {
    status: String
    message: String
  }

  type Query {
    emptyQuery: Response
  }

  type Mutation {
    emptyMutation: Response
  }
`

module.exports = typeDefs