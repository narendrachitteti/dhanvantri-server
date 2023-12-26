const express = require("express");
const pharmacyBillingController = require("../Controllers/pharmacyBillingController");

const router = express.Router();

// Define your routes
router.post("/pharmacy-billing", pharmacyBillingController.postPharmacyBilling);
router.get("/pharmacybilling", pharmacyBillingController.getPharmacyBilling);
router.get("/fast-moving-medicines", pharmacyBillingController.getFastMovingMedicines);
router.get("/pharmacy-billing/filter", pharmacyBillingController.getFilteredPharmacyBilling);



module.exports = router;

