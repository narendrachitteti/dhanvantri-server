const express = require('express');
const StaffController = require('../controllers/StaffAdminController');

const router = express.Router();

// Routes related to staff
router.get('/GetStaffCount/:department', StaffController.getStaffCountByDepartment);
router.post('/Addstaff', StaffController.addStaff);
router.get('/GetAllStaff', StaffController.getAllStaff);
router.put('/EditStaff/:id', StaffController.editStaffById);
router.delete('/DeleteStaff/:id', StaffController.deleteStaffById);
router.get('/GetNextStaffId/:department', StaffController.getNextStaffId);
router.get('/doctors', StaffController.getDoctors);

module.exports = router;
