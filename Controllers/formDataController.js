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
      const distinctCompanies = await FormData.distinct('company');
      const distinctTaxCodes = await FormData.distinct('taxCode');
      const distinctCatarogy = await FormData.distinct('category');
      const distinctgroup = await FormData.distinct('group');
      const distinctschedule = await FormData.distinct('schedule');
      const distincthsn = await FormData.distinct('hsn');
      const distinctdrugComposition = await FormData.distinct('drugComposition');
      const distinctValues = {
        companies: distinctCompanies,
        taxCodes: distinctTaxCodes,
        category: distinctCatarogy,
        group:distinctgroup,
        schedule:distinctschedule,
        hsn:distincthsn,
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