const {Schema, model} = require("mongoose");

const University = new Schema({
    name: String
});

module.exports = model('University', University);