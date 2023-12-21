const express = require('express');
const billController = require('../Controllers/PatientBillController');

const router = express.Router();

// Define routes
router.post('/api/v1/bill-data', billController.saveBillData);

module.exports = router;
