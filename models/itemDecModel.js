// models/itemModel.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  product: String,
  company: String,
  taxCode: String,
  manufacturer: String,
  batchno: String,
  schedule: String,
  ptr: Number,
  rate: Number,
  perStrip: Number,
  hsnCode: String,
  narration: String,
  drugComposition: String,
});
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
