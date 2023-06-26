const config = require('config')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = require('./models/User')
const Event = require('./models/Event')
const typeDefs = require('./src/schema.js')
const Country = require('./models/Country')
const resolvers = require('./src/resolver.js')
const { ApolloServer } = require('apollo-server')
const Certificate = require('./models/Certificate')

// mongoose.connect(config.get('dbUrl'))
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('Error ', err))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    bcrypt,
    User,
    Event,
    Country,
    Certificate
  }
})

server.listen(4000).then(() => console.log('on port 4000'))