// controllers/itemController.js
const Item = require("../models/itemDecModel");

// Controller for handling item-related operations
const itemController = {
  // POST endpoint to add a new item
  addItem: async (req, res) => {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.json({ success: true, message: "Item saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  // PUT endpoint to update an existing item
  updateItem: async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  // DELETE endpoint to delete an item
  deleteItem: async (req, res) => {
    try {
      await Item.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Item deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  // GET endpoint to fetch all items
  getAllItems: async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  getProductDetails: async (req, res) => {
    try {
      const productName = req.query.productName;
      const productDetails = await Item.findOne({ product: productName });
      res.json(productDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  },



};
  

module.exports = itemController;
