const express = require('express');
const router = express.Router();
const {
  getInvoices,
  updateInvoice,
  deleteInvoice,
} = require('../controllers/stockInvoiceController');

// Get all invoices
router.get('/getInvoices', getInvoices);

// Update an invoice by ID
router.put('/updateInvoice/:id', updateInvoice);

// Delete an invoice by ID
router.delete('/deleteInvoice/:id', deleteInvoice);

module.exports = router;
