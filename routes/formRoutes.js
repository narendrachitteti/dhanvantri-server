// routes/formDataRoutes.js
const express = require('express');
const formDataController = require('../Controllers/formController');

const router = express.Router();

router.post('/api/formdata', formDataController.createFormData);
router.get('/api/formdata', formDataController.getFormData);
router.put('/api/formdata/:id', formDataController.updateFormData);

module.exports = router;