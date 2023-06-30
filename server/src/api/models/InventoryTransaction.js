const {Schema, model} = require("mongoose");

const InventoryTransaction = new Schema({
  type: String,
  status: String,
  issuerID: String,
  recipientID: String,
  eventID: String,
  itemID: String,
  amount: Number,
  description: String,
  date: Date
});

module.exports = model('InventoryTransaction', InventoryTransaction);