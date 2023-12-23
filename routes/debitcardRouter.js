// routes/debitNoteRoutes.js
const express = require('express');
const router = express.Router();
const debitNoteController = require('../Controllers/debitcardController');

router.get('/debit-notes', debitNoteController.getAllDebitNotes);
router.post('/api/submitDebitNote', debitNoteController.createDebitNote);

module.exports = router;
