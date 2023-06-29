const {Schema, model} = require("mongoose");

const Country = new Schema({
  name: String,
  cities: [{
    name: String,
    telegramChatID: String
  }]
});

module.exports = model('Country', Country);