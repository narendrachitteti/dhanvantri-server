const mongoose = require('mongoose');

const pharmacyBillingSchema = new mongoose.Schema({
  billId: String,
  patientId: String,
  patientDetails:{
    name:String,
    gender:String,
    phone:String,
    email:String,
    referredDoctor:String,
    billdate:Date,
  },
  pharmacyTable: [{
    medicineName: String,
    price: Number,
    quantity: Number,
    total:Number,
    amount: Number,
  }],
  discount: Number,
  gst:Number,
  netAmount:Number,
  roundOff:Number,
  billAmount:Number,
  paidAmount:Number,
  paymentMode:String,

  // Add other fields as needed
});

module.exports = mongoose.model('PharmacyBilling', pharmacyBillingSchema);
