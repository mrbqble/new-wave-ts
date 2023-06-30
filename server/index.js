const cors = require('cors')
const http = require('http')
const config = require('config')
const bcrypt = require('bcryptjs')
const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
const api = require('./src/api/index')
const Certificate = require('./src/api/models/Certificate')

const startServer = async () => {
  const app = express()
  
  app.use(cors())
  app.use(express.json({ limit: "40mb", extended: true }))
  
  mongoose.connect(config.get('dbUrl'))
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Error ', err))
  
  const httpServer = http.createServer(app)
  
  const apolloServer = new ApolloServer({
    typeDefs: api.typeDefs,
    resolvers: api.resolvers,
    context: {
      bcrypt,
      Certificate,
      ...api.context
    }
  })
  
  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    path: '/graphql'
  })
  
  httpServer.listen({ port: 4000 })
  
  console.log('server ready at port 4000')
}

startServer()
