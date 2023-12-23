// routes/creditNoteRoutes.js
const express = require('express');
const router = express.Router();
const creditNoteController = require('../Controllers/CreditcardController');

router.get('/api/credit-notes', creditNoteController.getAllCreditNotes);
router.post('/api/submitCreditNote', creditNoteController.createCreditNote);

module.exports = router;
