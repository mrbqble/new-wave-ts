const {Schema, model} = require("mongoose")

const certificateRequests = new Schema({
  ownerID: String,
  requestedAt: Date,
  volunteeringHours: Number,
  code: String,
})

module.exports = model('certificateRequests', certificateRequests)