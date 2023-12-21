const CreatePurchaseOrder = require("../models/createPurchaseOrderModel");

const generateRandomNumber = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000);
};

const generateCustomOrderId = () => {
  return `OID-${generateRandomNumber()}`;
};

const addCreatePurchaseOrder = async (req, res) => {
  try {
    const newOrderData = req.body;
    newOrderData.customOrderId = generateCustomOrderId();
    const newOrder = new CreatePurchaseOrder(newOrderData);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save order" });
  }
};

const getCreatePurchaseOrders = async (req, res) => {
  try {
    const CreatePurchaseOrders = await CreatePurchaseOrder.find();
    res.status(200).json(CreatePurchaseOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch CreatePurchaseOrders" });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { customOrderId } = req.params;
    const { status } = req.body;
    await CreatePurchaseOrder.updateOne({ customOrderId }, { $set: { status } });
    res.json({ message: "Status updated successfully" });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ error: "Failed to update status" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const customOrderId = req.params.customOrderId;
    const deletedOrder = await CreatePurchaseOrder.findOneAndDelete({
      customOrderId,
    });
    if (deletedOrder) {
      res.status(200).json(deletedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ error: "Failed to delete order" });
  }
};

module.exports = {
  addCreatePurchaseOrder,
  getCreatePurchaseOrders,
  updateOrderStatus,
  deleteOrder,
};
