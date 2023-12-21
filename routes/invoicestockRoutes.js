// invoicestockRoutes


const express = require("express");
const router = express.Router();
const {

  addInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoice,
  getMedicineSuggestions,
  updateMedicineQuantity,
  getMedicineDetails,
  getMedicineOnly, 
  updatePharmaQuantity,
} = require("../controllers/invoicestockController"); 

// Add Invoice
router.post("/addInvoice", addInvoice);

// Get All Invoices  
router.get("/getInvoices", getInvoices);

router.get("/medicines", getMedicineOnly); 

// router.get("/medicines/${selectedMedicine}/hsn", getHSNCode);
// router.get(`/medicines/:selectedMedicine/hsn`, getHSNCode);

// Update Invoice
router.put("/updateInvoice/:invoiceId", updateInvoice);

// Delete Invoice
router.delete("/deleteInvoice/:invoiceId", deleteInvoice);

// Get Medicine Suggestions
router.get("/medicineSuggestions/:searchTerm", getMedicineSuggestions);

// Update Medicine Quantity
router.put("/updateMedicineQuantity/:medId", updateMedicineQuantity);

router.get("/medicineDetails/:medicineName", getMedicineDetails);

// Add a new route for updating pharmacy quantity
router.put("/updatePharmaQuantity/:medicineName", updatePharmaQuantity);



module.exports = router;
