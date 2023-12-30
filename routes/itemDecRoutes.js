// routes/itemRoutes.js
const express = require("express");
const itemController = require("../Controllers/itemDecController");

const router = express.Router();

// POST endpoint to add a new item
router.post("/itemdec", itemController.addItem);

// PUT endpoint to update an existing item
router.put("/itemdec/:id", itemController.updateItem);

// DELETE endpoint to delete an item
router.delete("/itemdec/:id", itemController.deleteItem);

// GET endpoint to fetch all items
router.get("/itemdec", itemController.getAllItems);


router.get('/itemdec/details', itemController.getProductDetails);

module.exports = router;
