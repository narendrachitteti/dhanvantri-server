const express = require("express");
const router = express.Router();
const {
  addCreatePurchaseOrder,
  getCreatePurchaseOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../Controllers/CreatePurchaseOrderController");

// Add Create Purchase Order
router.post("/createPurOrder", addCreatePurchaseOrder);

// Get All Create Purchase Orders
router.get("/getCreatePurchaseOrders", getCreatePurchaseOrders);

// Update Order Status
router.put("/updateOrderStatus/:customOrderId", updateOrderStatus);

// Delete Order
router.delete("/deleteOrder/:customOrderId", deleteOrder);

module.exports = router;
