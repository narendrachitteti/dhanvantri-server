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
  const { DrNo, DrDate, customers, Amount, ManualNo, Narration } = req.body;

  try {
    const newDebitNote = await DebitNote.create({
      DrNo,
      DrDate,
      customers,
      Amount,
      ManualNo,
      Narration,
    });

    res.status(201).json(newDebitNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllDebitNotes, createDebitNote };