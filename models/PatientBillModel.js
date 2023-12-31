// models/PatientBillModel.js
const mongoose = require('mongoose');

const patientBillSchema = new mongoose.Schema({
  patientName: String,
  mobilenumber: String,
  doctorName:String,
  date: String,
  items: Array,
  subtotalWithGST: Number,
  subtotalWithoutGST: Number,
  sign:String,
});

const PatientBill = mongoose.model('PatientBill', patientBillSchema);

module.exports = PatientBill;

