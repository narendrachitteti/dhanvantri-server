// controllers/StockistController.js
const Stockist = require('../models/StockistModel');

const stockistController = {
  submitStockist: async (req, res) => {
    try {
      const { postData } = req.body;

      // Generate a 4-digit unique ID in serial format like S-ID001
      const count = await Stockist.countDocuments();
      const uniqueID = `S-ID${(count + 1).toString().padStart(3, '0')}`;

      const newStockist = new Stockist({ ...postData, uniqueID });
      await newStockist.save();

      console.log('Stockist saved successfully:', newStockist);
      res.status(201).json({ message: 'Stockist submitted successfully!', uniqueID });
    } catch (error) {
      console.error('Error adding stockist:', error);
      console.error(error.stack);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  },



  

  getStockists: async (req, res) => {
    try {
      const stockists = await Stockist.find();
      console.log('Fetched stockists:', stockists);
      res.json(stockists);
    } catch (error) {
      console.error('Error fetching stockists:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  },

  updateStockist: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const updatedStockist = await Stockist.findByIdAndUpdate(id, updatedData, { new: true });

      if (!updatedStockist) {
        return res.status(404).json({ message: 'Stockist not found' });
      }

      console.log('Stockist updated successfully:', updatedStockist);
      res.json({ message: 'Stockist updated successfully!', updatedStockist });
    } catch (error) {
      console.error('Error updating stockist:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  },
  getStockistNames: async (req, res) => {
    try {
      const stockistNames = await Stockist.find({}, 'name'); // Fetching only the 'name' field

      console.log('Fetched stockist names:', stockistNames);
      res.json(stockistNames);
    } catch (error) {
      console.error('Error fetching stockist names:', error);
      res.status(500).json({ error: 'An error occurred while fetching stockist names' });
    }
  },
};

module.exports = stockistController;
