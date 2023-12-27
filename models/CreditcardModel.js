const mongoose = require('mongoose');

const creditNoteSchema = new mongoose.Schema({
  CrNo: String,
  CrDate: Date,
  Company: String,
  Amount: String,
  ManualNo: String,
  Narration: String,
  Condition:String,
});

const CreditNote = mongoose.model('CreditNote', creditNoteSchema);

module.exports = CreditNote;  // Fix the typo here (change "module. Exports" to "module.exports")
