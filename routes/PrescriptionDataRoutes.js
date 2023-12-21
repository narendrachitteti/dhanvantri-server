const express = require('express');
const complaintsController = require('../controllers/PrescriptionDataController');

const router = express.Router();

// Define routes for complaints
router.post('/prescription', complaintsController.savePrescriptionData);
router.get('/prescription', complaintsController.getPrescriptionData);

module.exports = router;
