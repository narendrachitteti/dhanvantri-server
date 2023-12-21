// models/stockistModel.js
const mongoose = require('mongoose');

const stockistSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  gstNumber: String,
  email: String,
  addDate: String,
  totalBilled: Number,
  totalPaid: Number,
  balance: Number,
});

const Stockist = mongoose.model('Stockist', stockistSchema);

module.exports = Stockist;
