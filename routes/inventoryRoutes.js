const express = require('express');
const router = express.Router();
const {
  createInventoryProperty,
  getAllInventoryProperties,
  getExpiryInventoryProperties,
  getLowInventoryProperties,
  getZeroInventoryProperties,
} = require('../Controllers/inventoryController');

// Create Inventory Property
router.post('/api/inventorydata', createInventoryProperty);

// Get All Inventory Properties
router.get('/api/inventorydata', getAllInventoryProperties);

// Get Expired Inventory Properties
router.get('/api/inventorydata/expiry', getExpiryInventoryProperties);

// Get Low Inventory Properties
router.get('/api/inventorydata/low', getLowInventoryProperties);

// Get Zero Inventory Properties
router.get('/api/inventorydata/zero', getZeroInventoryProperties);

module.exports = router;
