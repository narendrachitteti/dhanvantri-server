// models/formDataModel.js
const mongoose = require('mongoose');

const formdataSchema = new mongoose.Schema({
  company: String,
  hsncode: String,
//   input3: String,
});

const Fordata = mongoose.model('Formdataass', formdataSchema);

module.exports = Fordata;