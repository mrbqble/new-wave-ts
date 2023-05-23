const config = require('config')
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

const Query = {
  users: async (_, __, ctx) => {
    return await ctx.User.find()
  },

  coordinators: async (_, __, ctx) => {
    return await ctx.User.find({type: "Coordinator"})
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
    user.password = ""
    return user
  },

  checkEmail: async (_, { input }, ctx) => {
    const user = await ctx.User.findOne({email: input})
    if (user)
      return true
    return false
  },

  checkCode: async (_, { input }, ctx) => {
    const user = await ctx.User.find({code: input})
    return {
      fullName: user.firstName + ' ' + user.secondName,
      country: user.country,
      volunteeringHours: user.volunteeringHours,
      type: user.type
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