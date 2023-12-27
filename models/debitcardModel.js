// models/DebitNote.js
const mongoose = require('mongoose');

const debitNoteSchema = new mongoose.Schema({
  DrNo: String,
  DrDate: Date,
  Company: String,
  Amount: String,
  ManualNo: String,
  Narration: String,
  Condition:String,
});

const DebitNote = mongoose.model('DebitNote', debitNoteSchema);

module.exports = DebitNote;
