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
  dateOfBirth: String,
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
    used: Boolean,
    createdAt: Date,
    expireTime: Date,
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
    degree: String,
    studyYear: Number,
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
},
{ typeKey: '$type' }
)

module.exports = model('User', User)