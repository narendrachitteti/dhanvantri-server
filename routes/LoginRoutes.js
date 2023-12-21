// LoginRouter.js
const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');




// Define routes for the secondary collection
router.post('/addlogin', LoginController.addLogin);
router.post('/getCredentials', LoginController.getCredentials);
router.post('/storeStaffID', LoginController.storeStaffID);


module.exports = router;

