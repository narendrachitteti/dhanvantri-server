const Registration = require('../models/registrationModel');

exports.registerUser = async (req, res) => {
  try {
    const { userid, email, password} = req.body;

    // Validate data (add more validation as needed)
    if (!userid || !email || !password  ) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Save data to MongoDB
    const newRegistration = new Registration({ userid, email, password });
    await newRegistration.save();

    res.status(201).json({ message: 'Registration successful.', user: newRegistration });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { userid, password } = req.body;

    // Validate data (add more validation as needed)
    if (!userid || !password) {
      return res.status(400).json({ message: 'Please provide both userid and password.' });
    }

    // Fetch data from MongoDB based on email and password
    const user = await Registration.findOne({ email, password });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
exports.getUser = async (req, res) => {
  try {
    const { userid, password } = req.query;

    // Validate data (add more validation as needed)
    if (!userid || !password) {
      return res.status(400).json({ message: 'Please provide both userid and password.' });
    }

    // Fetch data from MongoDB based on email and password
    const user = await Registration.findOne({ userid, password });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
