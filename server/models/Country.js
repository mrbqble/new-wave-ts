const {Schema, model} = require("mongoose");

const Country = new Schema({
  name: String,
  colleges: [String],
  cities: [{
    name: String,
    schools: [String]
  }]
});

module.exports = model('Country', Country);