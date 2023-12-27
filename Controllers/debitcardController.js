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
  const { DrNo, DrDate, Company, Amount, ManualNo, Narration ,Condition} = req.body;

  try {
    const newDebitNote = await DebitNote.create({
      DrNo,
      DrDate,
      Company,
      Amount,
      ManualNo,
      Narration,
      Condition,
    });

    res.status(201).json(newDebitNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllDebitNotes, createDebitNote };
