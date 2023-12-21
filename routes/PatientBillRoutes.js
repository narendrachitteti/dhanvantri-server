// routes/PatientBillRoutes.js
const express = require('express');
const patientBillController = require('../controllers/PatientBillController');

const router = express.Router();

router.post('/patient-bill', patientBillController.submitPatientBill);
router.get('/patient-bill', patientBillController.getAllPatientBills);  // Add this line for the GET endpoint

module.exports = router;
