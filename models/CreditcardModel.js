const mongoose = require('mongoose');

const creditNoteSchema = new mongoose.Schema({
  CrNo: String,
  CrDate: String,
  Amount: String,
  Narration: String,
});

const CreditNote = mongoose.model('CreditNote', creditNoteSchema);

module.exports = CreditNote;  