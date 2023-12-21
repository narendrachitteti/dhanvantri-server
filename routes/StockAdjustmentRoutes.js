const express = require('express');
const router = express.Router();
const { getStockAdjustments } = require('../controllers/stockAdjustmentController');

// Get stock adjustment data with optional date range filtering
router.get('/api/stockadjustment', getStockAdjustments);

module.exports = router;
