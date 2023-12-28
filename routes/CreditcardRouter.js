const express = require('express');
const router = express.Router();
const creditNoteController = require('../Controllers/CreditcardController');

router.get('/api/credit-notes', creditNoteController.getAllCreditNotes);
router.get('/credit-notes/new-id', creditNoteController.getNewCreditNoteId);
router.post('/submitCreditNote', creditNoteController.createCreditNote);

module.exports = router;
