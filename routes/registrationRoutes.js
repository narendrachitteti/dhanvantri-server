// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const registrationController = require('../Controllers/registrationController');

router.post('/register', registrationController.registerUser);

module.exports = router;
