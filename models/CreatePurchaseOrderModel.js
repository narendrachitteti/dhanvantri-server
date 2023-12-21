const mongoose = require("mongoose");

const PurchaseItemSchema = new mongoose.Schema({
  Medicine: String,
  Manufacturer: String,
  unitstrips: String,
  NoOfStrips: String,
  orderedQuantity: String,
});

const CreatePurchaseOrderSchema = new mongoose.Schema({
  customOrderId: {
    type: String,
    unique: true,
    required: true,
  },
  stockistName: String,
  date: String,
  items: [PurchaseItemSchema],
  status: {
    type: String,
    enum: ["ongoing", "pending", "successful"],
    default: "ongoing",
  },
});

const CreatePurchaseOrder = mongoose.model(
  "CreatePurchaseOrder",
  CreatePurchaseOrderSchema
);

module.exports = CreatePurchaseOrder;
