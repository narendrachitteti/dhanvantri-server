// models/DebitNote.js
const mongoose = require('mongoose');

const debitNoteSchema = new mongoose.Schema({
  DrNo: String,
  DrDate: String,
  Amount: String,
  Narration: String,
});

const DebitNote = mongoose.model('DebitNote', debitNoteSchema);

module.exports = DebitNote;
