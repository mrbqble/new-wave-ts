const {Schema, model} = require("mongoose");

const FinanceTransaction = new Schema({
  type: String,
  status: String,
  issuerID: String,
  recipientID: String,
  amount: Number,
  description: String,
  date: Date,
  receipt: String,
  shopDetails: {
    name: String,
    address: String,
    phoneNumber: String
  },
  products: [{
    inventoryTransactionID: String,
    name: String,
    price: Number,
    amount: Number
  }]
});

module.exports = model('FinanceTransaction', FinanceTransaction);