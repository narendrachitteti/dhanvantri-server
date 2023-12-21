// routes/PatientBillRoutes.js
const express = require('express');
const router = express.Router();
const patientBillController = require('../Controllers/PatientBillController');

router.post('/patient-bill', patientBillController.submitPatientBill);

module.exports = router;