// routes/itemRoutes.js
const express = require("express");
const itemController = require("../Controllers/itemDecController");

const router = express.Router();

// POST endpoint to add a new item
router.post("/items", itemController.addItem);

// PUT endpoint to update an existing item
router.put("/items/:id", itemController.updateItem);

// DELETE endpoint to delete an item
router.delete("/items/:id", itemController.deleteItem);

// GET endpoint to fetch all items
router.get("/items", itemController.getAllItems);

module.exports = router;
