const FormData = require('../models/ItemDescriptionModel');

const formDataController = {
  submitForm: async (req, res) => {
    try {
      const formData = new FormData(req.body);
      await formData.save();
      res.status(201).json({ message: 'Form data submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  getProducts: async (req, res) => { 
    try {
      const products = await FormData.find({}, 'product');
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Internal Server Error');
    }
  },
  getSalesRates: async (req, res) => {
    try {
      const salesRates = await FormData.find({}, 'salesRate');
      res.json(salesRates);
    } catch (error) {
      console.error('Error fetching salesRates:', error);
      res.status(500).send('Internal Server Error');
    }
  },
  getAllData: async (req, res) => {
    try {
      const allData = await FormData.find();
      res.json(allData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  editItem: async (req, res) => {
    try {
      const itemId = req.params.id;
      const updatedData = req.body;
      if (!itemId) {
        return res.status(400).json({ message: 'Invalid item ID' });
      }
      await FormData.findByIdAndUpdate(itemId, updatedData);
      const updatedItem = await FormData.findById(itemId);
      res.json({ message: 'Item updated successfully', updatedItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteItem: async (req, res) => {
    try {
      const itemId = req.params.id;
      if (!itemId) {
        return res.status(400).json({ message: 'Invalid item ID' });
      }
      const deletedItem = await FormData.findByIdAndDelete(itemId);
      res.json({ message: 'Item deleted successfully', deletedItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getDistinctCompanies: async (req, res) => {
    try {
      const distinctTaxCodes = await FormData.distinct('taxCode');
      const distinctCatarogy = await FormData.distinct('category');
      const distinctgroup = await FormData.distinct('group');
      const distinctschedule = await FormData.distinct('schedule');
      const distinctdrugComposition = await FormData.distinct('drugComposition');
      const distinctValues = {
        taxCodes: distinctTaxCodes,
        category: distinctCatarogy,
        group:distinctgroup,
        schedule:distinctschedule,
        drugComposition:distinctdrugComposition,
      };

      res.json(distinctValues);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
},

  
};

module.exports = formDataController;
