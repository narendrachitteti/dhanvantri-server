// controllers/debitNoteController.js
const DebitNote = require("../models/debitcardModel");

const generateDrNo = async () => {
  const latestDebitNote = await DebitNote.findOne().sort({ DrNo: -1 });

  if (latestDebitNote) {
    const lastDrNo = latestDebitNote.DrNo;
    const lastNumber = parseInt(lastDrNo.split("-")[2], 10); // Updated index to 2

    if (!isNaN(lastNumber)) {
      // Increment and pad with leading zeros
      const nextNumber = (lastNumber + 1).toString().padStart(3, "0");
      return `DN-DP-${nextNumber}`;
    }
  }

  // If no existing credit notes or an issue with parsing, start with 001
  return `DN-DP-001`;
};

const getAllDebitNotes = async (req, res) => {
  try {
    const debitNotes = await DebitNote.find();
    res.json(debitNotes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNewDebitNoteId = async (req, res) => {
  try {
    const newDrNo = await generateDrNo();
    res.json({ DrNo: newDrNo });
  } catch (error) {
    console.error("Error generating new DrNo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createDebitNote = async (req, res) => {
  const { DrDate, Amount, Narration } = req.body;

  try {
    const newDrNo = await generateDrNo();

    const newDeditNote = await DebitNote.create({
      DrNo: newDrNo,
      DrDate,
      Amount,
      Narration,
    });

    res.status(201).json(newDeditNote);
  } catch (error) {
    console.error("Error creating credit note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllDebitNotes,
  createDebitNote,
  getNewDebitNoteId,
};
