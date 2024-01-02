// // AccountController.js
const Account = require('../models/AccountModel');

const AccountController = {
    submitAccount: async (req, res) => {
      try {
        const postData = req.body; 
  
        const newAccount = new Account({
          name: postData.name,
          AccountNumber: postData.AccountNumber,
          ifcscode: postData.ifcscode,
          phoneNumber: postData.phoneNumber,
          AccountID: postData.AccountID,
        });
  
        // Save the new account to the database
        const savedAccount = await newAccount.save();
  
        res.status(201).json({ message: 'Account submitted successfully!', account: savedAccount });
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
    },
  getAccounts: async (req, res) => {
    try {
      const accounts = await Account.find(); // Retrieve all accounts from the database

      res.status(200).json(accounts);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  },



  updateAccount: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;  

      const updatedAccount = await Account.findByIdAndUpdate(id, updatedData, { new: true });

      if (!updatedAccount) {
        return res.status(404).json({ message: 'Account not found' });
      }

      console.log('Account updated successfully:', updatedAccount);
      res.json({ message: 'Account updated successfully!', updatedAccount });
    } catch (error) {
      console.error('Error updating Account:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  },
};
 module.exports = AccountController;
  