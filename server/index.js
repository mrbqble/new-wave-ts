const config = require('config')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = require('./models/User')
const Event = require('./models/Event')
const Report = require('./models/Report')
const typeDefs = require('./src/schema.js')
const Country = require('./models/Country')
const resolvers = require('./src/resolver.js')
const University = require('./models/University')
const { ApolloServer } = require('apollo-server')

mongoose.connect(config.get('dbUrl'))
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error ', err))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    bcrypt,
    User,
    Event,
    Report,
    Country,
    University
  }
})

server.listen(4000).then(() => console.log('on port 4000'))