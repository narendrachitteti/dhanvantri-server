// controllers/formDataController.js
const FormDatas = require('../models/formDataModel');

async function createFormData(req, res) {
  try {
    const formData = req.body;
    const savedData = await FormDatas.create(formData);
    res.json(savedData);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function getFormData(req, res) {
  try {
    const fetchedData = await FormDatas.find();
    res.json(fetchedData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function updateFormData(req, res) {
  try {
    const { id } = req.params;
    const formData = req.body;

    // Validate if the provided ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    // Update the data in the database
    const updatedData = await FormDatas.findByIdAndUpdate(id, formData, { new: true });

    // Check if the data was found and updated
    if (!updatedData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.json(updatedData);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  createFormData,
  getFormData,
  updateFormData,
};