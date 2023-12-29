

// routes/PatientBillRoutes.js
const express = require('express');
const router = express.Router();
const patientBillController = require('../Controllers/PatientBillController');

router.post('/patient-bill', patientBillController.submitPatientBill);
router.get('/patient-bill', patientBillController.getAllPatientBills); 
router.get('/items', patientBillController.getAllItems);
router.get('/items-by-date', patientBillController.getItemsByDate);
router.get('/items-for-today', patientBillController.getItemsForToday); 
router.get('/getIn', patientBillController.getInvoices); 
router.put('/update-patient/:id', patientBillController.updatePatient);


module.exports = router;
