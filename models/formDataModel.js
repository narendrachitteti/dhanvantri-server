// models/formDataModel.js
// const mongoose = require('mongoose');

// const formdataSchema = new mongoose.Schema({
//   company: String,
//   hsncode: String,
// });

// const Fordata = mongoose.model('Formdataass', formdataSchema);

// module.exports = Fordata;

const mongoose = require('mongoose');

const formdataSchema = new mongoose.Schema({
  Company: String,
  HmsCode: String,
});

const Fordata = mongoose.model('Formdataass', formdataSchema);

module.exports = Fordata;