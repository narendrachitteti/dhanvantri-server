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
  getInvoiceDetails,
  getBatchNumbers,
  getMedicineDetailss,
  getBatchDetails,
  

} = require("../Controllers/invoicestockController");
// Add Invoice

router.get('/batchDetails/:batchNumber', getBatchDetails);
router.get('/batchNumbers', getBatchNumbers);

const { getInvoiceNumbers } = require("../Controllers/invoicestockController");
router.get("/invoiceDetails/:selectedInvoice", getInvoiceDetails);
// Add a route to fetch invoice numbers
router.get("/getInvoiceNumbers", getInvoiceNumbers);
router.get("/medicineDetails/:medicineName", getMedicineDetails);

router.post("/addInvoice", addInvoice);

router.get("/medicineDetails/:medicineName", getMedicineDetails);

router.get("/api/getInvoiceNumbers",getInvoiceNumbers )
// Get All Invoices
router.get("/getInvoices", getInvoices);

router.get("/medicines", getMedicineOnly); 



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
