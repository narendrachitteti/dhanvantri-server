
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  name: String,  
  staffid: String,  
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
