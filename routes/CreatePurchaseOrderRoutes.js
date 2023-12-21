const express = require("express");
const router = express.Router();
const {
  addCreatePurchaseOrder,
  getCreatePurchaseOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/createPurchaseOrderController");

// Add Create Purchase Order
router.post("/addCreatePurchaseOrder", addCreatePurchaseOrder);

// Get All Create Purchase Orders
router.get("/getCreatePurchaseOrders", getCreatePurchaseOrders);

// Update Order Status
router.put("/updateOrderStatus/:customOrderId", updateOrderStatus);

// Delete Order
router.delete("/deleteOrder/:customOrderId", deleteOrder);

module.exports = router;
