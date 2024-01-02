// accountRoutes.js
const express = require('express');
const AccountController = require('../Controllers/AccountController');

const router = express.Router();

router.post('/submit-account', AccountController.submitAccount);
router.get('/get-accounts', AccountController.getAccounts);
router.put('/update-Account/:id', AccountController.updateAccount);
module.exports = router;
