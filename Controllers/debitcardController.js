// controllers/debitNoteController.js
const DebitNote = require('../models/debitcardModel');

const getAllDebitNotes = async (req, res) => {
  try {
    const debitNotes = await DebitNote.find();
    res.json(debitNotes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createDebitNote = async (req, res) => {
  const { DrNo, DrDate, Company, Amount, ManualNo, Narration, Condition } = req.body;

// Extracting string values from Company and Condition objects
const companyValue = Company.value || '';
const conditionValue = Condition.value || '';

try {
  const newDebitNote = await DebitNote.create({
    DrNo,
    DrDate,
    Company: companyValue,
    Amount,
    ManualNo,
    Narration,
    Condition: conditionValue,
  });

  res.status(201).json(newDebitNote);
} catch (error) {
  console.error('Error creating debit note:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
};



module.exports = { getAllDebitNotes, createDebitNote };
