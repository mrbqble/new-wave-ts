const {Schema, model} = require("mongoose");

const Finance = new Schema({
  amount: Number,
  ownerID: String,
  currency: String
});

module.exports = model('Finance', Finance);