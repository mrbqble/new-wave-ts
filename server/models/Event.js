const {Schema, model} = require("mongoose");

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
  partners: [String],
  attended: [String],
  endTime: String,
  mapLink: String,
  addInfo: String,
  duration: String,
  location: String,
  startTime: String,
  organizators: [String]
});

module.exports = model('Event', Event);