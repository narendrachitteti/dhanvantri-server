const express = require('express');
const router = express.Router();
const {
  createInventoryProperty,
  getAllInventoryProperties,
  getExpiryInventoryProperties,
  getLowInventoryProperties,
  getZeroInventoryProperties,
} = require('../controllers/inventoryController');

// Create Inventory Property
router.post('/inventorydata', createInventoryProperty);

// Get All Inventory Properties
router.get('/inventorydata', getAllInventoryProperties);

// Get Expired Inventory Properties
router.get('/inventorydata/expiry', getExpiryInventoryProperties);

// Get Low Inventory Properties
router.get('/inventorydata/low', getLowInventoryProperties);

// Get Zero Inventory Properties
router.get('/inventorydata/zero', getZeroInventoryProperties);

module.exports = router;
