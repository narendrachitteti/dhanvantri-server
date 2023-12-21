// models/StockistModel.js
const mongoose = require('mongoose');

const stockistSchema = new mongoose.Schema({
  name: String,
  gstNumber: String,
  email: String,
  phoneNumber: String,
  addedDate: String,
  uniqueID: String,
});

const Stockist = mongoose.model('Stockist', stockistSchema);

module.exports = Stockist;
