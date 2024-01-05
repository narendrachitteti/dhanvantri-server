
// invoicestockModel

const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  MedId: String,
  Medicine: String,
  Manufacturer: String,
  schedule: String,
  batchno: String,  
  expiryDate: String,
  TotalStrips:String,
  // Unit: String,
  strips: String,
  Freestrips: String,
  Gst: String,
  price: String,
  MRP: String,
  Discount: String,
  Total: String,
  HSNcode: String,
  RackNo: String,
  BookNo: String,
  NetPrice: String,
  Quantity: String,
  Capsules:String ,
  capsulePrice:String,
  totalDiscount:String,
  calculateTotalAmounts:String,
});

const combinedSchema = new mongoose.Schema({
  invoiceNumber: String,
  stockName: String,
  date: String,
  medicines: [medicineSchema],
  Total: String,
  Discount: String,
  DiscountAmount: String,
  GST: String,
  CGST: String,
  SGST: String,
  GrossAmount: String,
  RoundOff: String,
  StocksReturned: String,
  PurchaseAmount: String,
  TotalPaid: String,
  Balance: String,
  ReturnAmount: String,
  PayStatus: String,
  ReturnStatus: String,
});

const CombinedInvoice = mongoose.model("CombinedInvoice", combinedSchema);

module.exports = CombinedInvoice;