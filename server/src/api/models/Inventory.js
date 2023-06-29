const {Schema, model} = require("mongoose");

const Inventory = new Schema({
  itemName: String,
  quantity: String,
  ownerID: String,
  cityID: String
});

module.exports = model('Inventory', Inventory);