// models/formDataModel.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  input1: String,
  input2: String,
  input3: String,
});

const FormDatas = mongoose.model('FormDatas', formDataSchema);

module.exports = FormData;