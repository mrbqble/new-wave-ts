const {Schema, model} = require("mongoose");

const Report = new Schema({
  bags: Number,
  addInfo: String,
  attended: [String],
  distance: Number,
  eventID: String
});

module.exports = model('Report', Report);