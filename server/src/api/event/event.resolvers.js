const uploadImage = require('../../firebase')

const resolvers = {
  Query: {
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
    }
  },

  Mutation: {
    newEvent: async (_, { input }, ctx) => {
      const event = new ctx.Event(input)
      const events = await ctx.Event.find()
      event.number = events.length + 1
      event.status = 'scheduled'
      event.createdAt = new Date()
      if (event.image.length) {
        event.image = await uploadImage(event.image.split(',')[1], 'events')
      }
      await event.save()
      return 'Event was created'
    },
  
    attendEvent: async (_, { input }, ctx) => {
      const date = new Date()
      const { name, eventID, userID } = input
      const event = await ctx.Event.findOne({_id: eventID})
      event.registered = [...event.registered, {
        participantID: _id,
        attended: false,
        registeredAt: date,
        name: name
      }]
      await event.save()
      const user = await ctx.User.findOne({_id: userID})
      user.events = [...user.events, {
        eventID,
        attended: false,
        registeredAt: date
      }]
      await user.save()
      return 'User ready to attend'
    },
  
    leaveEvent: async (_, { input }, ctx) => {
      const { eventID, userID } = input
      const event = await ctx.Event.findOne({_id: eventID})
      event.registered = event.registered.filter(item => item.participantID !== userID)
      await event.save()
      const user = await ctx.User.findOne({_id: userID})
      user.events = user.events.filter(item => item.eventID !== eventID)
      return 'User removed from attendance list'
    },
  
    newReport: async (_, { input }, ctx) => {
      const { eventID } = input
      const event = await ctx.Event.findOne({_id: eventID})
      delete input.eventID
      event.report = input
      await event.save()
      return "Report was created"
    }
  }
}

module.exports = resolvers