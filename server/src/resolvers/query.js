const config = require('config')
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

const Query = {
  users: async (_, __, ctx) => {
    const users = await ctx.User.find()
    return users.map((item) => {
      return {
        _id: item._id,
        name: item.firstName + ' ' + item.secondName,
        type: item.type
      }
    })
  },

  coordinators: async (_, __, ctx) => {
    const coordinators =  await ctx.User.find({type: "Coordinator"})
    return coordinators.map(user => {
      return {
        _id: user._id,
        name: user.firstName + ' ' + user.secondName
      }
    })
  },

  logIn: async (_, { input }, ctx) => {
    const { email, password } = input
    const user = await ctx.User.findOne({email})
    if (user) {
      const isPassValid = ctx.bcrypt.compareSync(password, user.password)
      if (!isPassValid)
        return {token: '', success: false}
      const token = jwt.sign(
        {id: user._id},
        config.get("secretKey"),
        {expiresIn: '1h'}
      )
      return {token, success: true}
    } else {
      return {token: '', success: false}
    }
  },

  profile: async (_, { input }, ctx) => {
    const _id = jwt_decode(input).id
    const user = await ctx.User.findOne({_id})
    return user
  },

  checkEmail: async (_, { input }, ctx) => {
    const user = await ctx.User.findOne({email: input})
    if (user)
      return true
    return false
  },

  checkCode: async (_, { input }, ctx) => {
    const user = await ctx.User.findOne({code: input})
    if (user) {
      return {
        type: user.type,
        country: user.country,
        year: user.code.split('-')[1],
        volunteeringHours: user.volunteeringHours,
        fullName: user.firstName + ' ' + user.secondName
      }
    }
  },

  events: async (_, __, ctx) => {
    const events = await ctx.Event.find()
    const date = new Date().toJSON().slice(0, 10)
    return events.filter(event => event.date >= date)
  },

  allEvents: async (_, __, ctx) => {
    return await ctx.Event.find()
  },

  allReports: async (_, __, ctx) => {
    return await ctx.Report.find()
  },

  allCountries: async (_, __, ctx) => {
    return await ctx.Country.find()
  },

  allUniversities: async (_, __, ctx) => {
    let universities = await ctx.University.find()
    universities = universities.map((item) => { return item.name })
    return universities
  }
}

module.exports = Query