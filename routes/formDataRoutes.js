const express = require('express');
const formDataController = require('../Controllers/formDataController');

const router = express.Router();

router.post('/api/submit-form', formDataController.submitForm);
router.get('/allData', formDataController.getAllData);
router.put('/edit-item/:id', formDataController.editItem);
router.delete('/delete-item/:id', formDataController.deleteItem);
router.get('/api/distinctCompanies', formDataController.getDistinctCompanies);
router.get('/api/products', formDataController.getProducts);
router.get('/api/salesRates', formDataController.getSalesRates);
module.exports = router;