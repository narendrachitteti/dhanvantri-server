const express = require('express');
const router = express.Router();
const DrugCompoController = require('../Controllers/DrugMasterController');

// Define routes for lab service CRUD operations
router.get('/Drug-composition/', DrugCompoController.getAllDrugCompos);
router.post('/Drug-composition/', DrugCompoController.createDrugCompo);
router.put('/Drug-composition/:id', DrugCompoController.updateDrugCompo);
router.delete('/Drug-composition/:id', DrugCompoController.deleteDrugCompo);

module.exports = router;