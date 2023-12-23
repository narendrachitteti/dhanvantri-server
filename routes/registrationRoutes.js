// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const registrationController = require('../Controllers/registrationController');

router.post('/register', registrationController.registerUser);

// Define the route for fetching user data
router.get('/user', registrationController.getUser);
router.post('/login', registrationController.loginUser);
module.exports = router;
