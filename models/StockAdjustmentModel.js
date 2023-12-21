const mongoose = require('mongoose');

const stockAdjustmentSchema = new mongoose.Schema({
  madicinename: String,
  personname: String,
  gstNumber: String,
  time: String,
  beforestocks: String,
  afterstocks: Number,
  stockdifference: Number,
});

const StockAdjustment = mongoose.model('StockAdjustment', stockAdjustmentSchema);

module.exports = {
  StockAdjustment,
};
