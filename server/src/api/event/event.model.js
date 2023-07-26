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
    plannedEndTime: String,
    plannedStartTime: String,
    registrationEndTime: String,
    registrationStartTime: String,
    duration: Number,
    partners: [String],
    organizators: [String],
    coordinates: {
      latitude: Number,
      longtitude: Number
    },
    registered: [{
      participantID: String,
      attended: Boolean,
      registeredAt: String,
      name: String
    }],
    report: {
      text: String,
      actualStartTime: String,
      actualEndTime: String,
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
  },
  {
    timestamps: true
  }
)

module.exports = model('Event', Event)
