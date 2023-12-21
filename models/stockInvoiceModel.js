const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  date: Date,
  Total: Number,
  TotalPaid: Number,
  Balance: Number,
  ReturnAmount: Number,
  payStatus: String,
  returnStatus: String,
}, {
  collection: 'invoices', // Specify the collection name explicitly
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = {
  Invoice,
};
