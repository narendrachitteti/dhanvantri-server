// invoicestockRoutes


const express = require("express");
const router = express.Router();
const {
  addInvoice,
  getMedicineDetails,
  getMedicineOnly, 
 
  getBatchNumbers,
  getBatchDetails,
  getMedicine,
  
  

} = require("../Controllers/invoicestockController");
router.get('/getMedicine', getMedicine);

router.get('/batchDetails/:batchNumber', getBatchDetails);
router.get('/batchNumbers', getBatchNumbers);

router.get("/medicineDetails/:medicineName", getMedicineDetails);

router.post("/addInvoice", addInvoice);

router.get("/medicineDetails/:medicineName", getMedicineDetails);


router.get("/medicines", getMedicineOnly); 





router.get("/medicineDetails/:medicineName", getMedicineDetails);

module.exports = router;