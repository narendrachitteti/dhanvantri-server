const express = require('express');
const taxController = require('../Controllers/taxController');

const router = express.Router();

router.post('/taxes', taxController.createTax);
router.get('/taxes', taxController.getAllTaxes);
router.put('/taxes/:id', taxController.updateTax);
router.delete('/taxes/:id', taxController.deleteTax);
router.get('/distincttaxcodes', taxController.getDistinct);

module.exports = router;