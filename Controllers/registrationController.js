// controllers/registrationController.js
const Registration = require('../models/registrationModel');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate data (add more validation as needed)
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Save data to MongoDB
    const newRegistration = new Registration({ username, email, password });
    await newRegistration.save();

    res.status(201).json({ message: 'Registration successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
