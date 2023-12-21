const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/ReportController');

router.post('/reportdata', reportsController.getAllReports);
router.get('/reports', reportsController.getAllReports);

module.exports = router;
