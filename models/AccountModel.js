// AccountModel.js
const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: String,
  AccountNumber: String,
  ifcscode: String,
  phoneNumber: String,
  AccountID: String,
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;