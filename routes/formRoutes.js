// routes/formDataRoutes.js
// const express = require('express');
// const formDataController = require('../Controllers/formController');

// const router = express.Router();

// router.post('/api/formdata', formDataController.createFormData);
// router.get('/api/formdata', formDataController.getFormData);
// router.put('/api/formdata/:id', formDataController.updateFormData);
// router.get('/api/companiesAndHsncodes', formDataController.getDistinct);

// module.exports = router;

const express = require('express');
const formDataController = require('../controllers/formController');

const router = express.Router();  

router.post('/api/newmodels', formDataController.createDocument);
router.get('/api/newmodels', formDataController.readAllDocuments);
router.put('/api/newmodels/:id', formDataController.updateDocument);
router.delete('/api/newmodels/:id', formDataController.deleteDocument);
router.get('/api/companiesAndHsncodes', formDataController.getDistinct);

module.exports = router;