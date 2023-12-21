const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  date: String,
  fid: String,
  Medicine: String,
  invoiceNumber: String,
  Batch: String,
  packPrice: String,
  packMRP: String,
  unitPrice: String,
  unitDiscount: String,
  Unit: String,
  BatchExpiry: String,
  packPricePercent: String,
  unitDiscountPercent: String,
});

const PharmacystockData = mongoose.model("PharmacystockData", propertySchema);

module.exports = {
  PharmacystockData,
};
