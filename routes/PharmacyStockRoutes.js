const express = require("express");
const router = express.Router();
const {
  updatePropertyById,
  getPharmacystockData,
} = require("../Controllers/PharmacyStockController");

// Update property by ID
router.put("/pharmacystockdata/:id", updatePropertyById);

// Get Pharmacystock Data
router.get("/getInvoices", getPharmacystockData);

module.exports = router;
