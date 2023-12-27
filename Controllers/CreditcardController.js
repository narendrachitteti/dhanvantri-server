// controllers/creditNoteController.js
const CreditNote = require('../models/CreditcardModel');

const getAllCreditNotes = async (req, res) => {
  try {
    const creditNotes = await CreditNote.find();
    res.json(creditNotes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createCreditNote = async (req, res) => {
  const { CrNo, CrDate, Company, Amount, ManualNo, Narration, Condition } = req.body;

  try {
    const newCreditNote = await CreditNote.create({
      CrNo,
      CrDate, // Format date as 'YYYY-MM-DD'
      Company,
      Amount,
      ManualNo,
      Narration,
      Condition,
    });

    res.status(201).json(newCreditNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllCreditNotes, createCreditNote };
