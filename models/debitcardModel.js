// models/DebitNote.js
const mongoose = require('mongoose');

const debitNoteSchema = new mongoose.Schema({
  DrNo: String,
  DrDate: Date,
  customers: String,
  Amount: String,
  ManualNo: String,
  Narration: String,
});

const DebitNote = mongoose.model('DebitNote', debitNoteSchema);

module.exports = DebitNote;
