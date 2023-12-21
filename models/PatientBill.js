// const mongoose = require('mongoose');

// const billSchema = new mongoose.Schema({
//   patientName: String,
//   invoiceNo: Number,
//   doctorName: String,
//   date: Date,
//   pharmaSign: String,
//   items: [{
//     product: String,
//     quantity: Number,
//     amount: Number,
//     manufactureDate: Date,
//     batch: String,
//     expiryDate: Date,
//     gst: Number,
//     totalWithGST: Number,
//     totalWithoutGST: Number,
//   }],
//   subtotalWithGST: Number,
//   subtotalWithoutGST: Number,
// });

// const Bill = mongoose.model('Bill', billSchema);

// module.exports = Bill;
const mongoose = require('mongoose');

const billsSchema = new mongoose.Schema({
  patientName: String,
  invoiceNo: Number,
  doctorName: String,
  date: Date,
  pharmaSign: String,
  items: [{
    product: String,
    quantity: Number,
    amount: Number,
    manufactureDate: Date,
    batch: String,
    expiryDate: Date,
    gst: Number,
    totalWithGST: Number,
    totalWithoutGST: Number,
  }],
  subtotalWithGST: Number,
  subtotalWithoutGST: Number,
});

module.exports = mongoose.models.Bill || mongoose.model('PatientBilling', billsSchema);
