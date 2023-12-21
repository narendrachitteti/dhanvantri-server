const { Invoice } = require('../models/stockInvoiceModel');

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
};

const updateInvoice = async (req, res) => {
  const { id } = req.params;
  const {
    TotalPaid,
    Balance,
    ReturnAmount,
    PayStatus,
    ReturnStatus,
  } = req.body;

  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      {
        TotalPaid,
        Balance,
        ReturnAmount,
        payStatus: PayStatus, // Correct the field name
        returnStatus: ReturnStatus, // Correct the field name
      },
      { new: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.json(updatedInvoice);
  } catch (error) {
    console.error('Error updating invoice:', error);
    res.status(500).json({ error: 'Failed to update invoice' });
  }
};

const deleteInvoice = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(id);

    if (!deletedInvoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    res.json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    console.error('Error deleting invoice:', error);
    res.status(500).json({ error: 'Failed to delete invoice' });
  }
};

module.exports = {
  getInvoices,
  updateInvoice,
  deleteInvoice,
};
