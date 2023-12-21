const express = require('express');
const formDataController = require('../Controllers/formDataController');

const router = express.Router();

router.post('/api/submit-form', formDataController.submitForm);
router.get('/allData', formDataController.getAllData);
router.put('/edit-item/:id', formDataController.editItem);
router.delete('/delete-item/:id', formDataController.deleteItem);
router.get('/api/distinctCompanies', formDataController.getDistinctCompanies);


module.exports = router;