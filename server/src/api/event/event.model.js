const {Schema, model} = require("mongoose")

const Event = new Schema({
  date: String,
  text: String,
  type: String,
  city: String,
  title: String,
  image: String,
  format: String,
  status: String,
  number: Number,
  places: Number,
  plannedEndTime: Date,
  plannedStartTime: Date,
  registrationEndTime: Date,
  registrationStartTime: Date,
  createdAt: Date,
  duration: Number,
  partners: [String],
  organizators: [{
    organizatorID: String,
    fullName: String
  }],
  coordinates: {
    latitude: Number,
    longtitude: Number
  },
  registered: [{
    participantID: String,
    attended: Boolean,
    registeredAt: Date,
    name: String
  }],
  report: {
    text: String,
    actualStartTime: Date,
    actualEndTime: Date,
    mediaFolder: String,
    previewImages: [String],
    details: {
      planted: Number,
      bags: Number,
      area: Number,
      metal: Number,
      plastic: Number,
      paper: Number,
      glass: Number
    }
  }
})

module.exports = model('Event', Event)