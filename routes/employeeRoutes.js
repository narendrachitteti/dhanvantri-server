const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/employeeController');

router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.getEmployees);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;