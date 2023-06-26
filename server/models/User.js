const {Schema, model} = require("mongoose")

const User = new Schema({
  type: String,
  photo: String,
  gender: String,
  telegramID: String,
  telegramHandle: String,
  firstName: String,
  instagram: String,
  secondName: String,
  dateOfBirth: Date,
  phoneNumber: String,
  volunteeringHours: Number,
  password: String,
  email: String,
  registeredAt: Date,
  leavedAt: Date,
  joinedChat: Boolean,
  points: Number,
  inviteLinks: [{
    link: String,
    createdAt: Date,
    expireTime: Date,
    used: Boolean,
    expired: Boolean,
    joinedAt: Date
  }],
  location: {
    city: String,
    country: String
  },
  affiliation: {
    type: String,
    name: String,
    studyYear: Number,
    degree: String,
    location: {
      city: String,
      country: String
    }
  },
  events: [{
    eventID: String,
    registeredAt: Date,
    checkInTime: Date,
    checkOutTime: Date,
    attended: Boolean
  }],
  tasks: [{
    status: String,
    createdAt: Date,
    completedAt: Date,
    text: String,
    issuerID: String
  }],
  certificateRequests: [Number]
})

module.exports = model('User', User)