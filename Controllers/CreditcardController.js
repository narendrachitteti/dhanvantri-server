const CreditNote = require("../models/CreditcardModel");

// Function to generate a unique ID for CrNo
const generateCrNo = async () => {
  const latestCreditNote = await CreditNote.findOne().sort({ CrNo: -1 });

  if (latestCreditNote) {
    const lastCrNo = latestCreditNote.CrNo;
    const lastNumber = parseInt(lastCrNo.split('-')[2], 10); // Updated index to 2
    
    if (!isNaN(lastNumber)) {
      // Increment and pad with leading zeros
      const nextNumber = (lastNumber + 1).toString().padStart(3, '0');
      return `CN-DP-${nextNumber}`;
    }
  }

  // If no existing credit notes or an issue with parsing, start with 001
  return `CN-DP-001`;
};



const getAllCreditNotes = async (req, res) => {
  try {
    const creditNotes = await CreditNote.find();
    res.json(creditNotes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNewCreditNoteId = async (req, res) => {
  try {
    const newCrNo = await generateCrNo();
    res.json({ CrNo: newCrNo });
  } catch (error) {
    console.error("Error generating new CrNo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createCreditNote = async (req, res) => {
  const { CrDate, Amount, Narration } = req.body;

  try {
    const newCrNo = await generateCrNo();

    const newCreditNote = await CreditNote.create({
      CrNo: newCrNo,
      CrDate,
      Amount,
      Narration,
    });

    res.status(201).json(newCreditNote);
  } catch (error) {
    console.error("Error creating credit note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  getAllCreditNotes,
  getNewCreditNoteId,
  createCreditNote,
};
