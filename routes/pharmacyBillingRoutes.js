const express = require("express");
const pharmacyBillingController = require("../controllers/pharmacyBillingController");

const router = express.Router();

// Define your routes
router.post("/pharmacy-billing", pharmacyBillingController.postPharmacyBilling);

router.get("/pharmacy-billing", pharmacyBillingController.getPharmacyBilling);

router.get("/fast-moving-medicines", pharmacyBillingController.getFastMovingMedicines);

// New route for date-based filtering
router.get("/pharmacy-billing/filter", pharmacyBillingController.getFilteredPharmacyBilling);



module.exports = router;

