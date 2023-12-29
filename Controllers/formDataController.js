// formDataController.js


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
      const { taxCode, category } = req.query; 
      const query = {};
      if (taxCode) {
        query.taxCode = taxCode;
      }
      if (category) {
        query.category = category;
      }
      const products = await FormData.find({}); // Assuming 'product' is the field name in your FormData model
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Internal Server Error');
    }
},

getAllProductsid: async (req, res) => {
  try {
    const items = await FormData.find({}, 'product taxCode category group purchaseRate');
    res.status(200).json(items);
  } catch (error) {
    console.error('Failed to fetch data', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
},

  getCompanyByProduct: async (req, res) => {
    try {
      const { product } = req.params;

      if (!product) {
        return res.status(400).json({ message: 'Invalid product name' });
      }
      const companyData = await FormData.findOne({ product }, 'company');
      if (!companyData) {
        return res.status(404).json({ message: 'Company not found for the given product' });
      }
      const company = companyData.company;
      res.json({ company });
    } catch (error) {
      console.error('Error fetching company by product:', error);
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


  getPurchaseRates: async (req, res) => {
    try {
      const purchaseRates = await FormData.find({}, 'purchaseRate');
      res.json(purchaseRates);
    } catch (error) {
      console.error('Error fetching purchaseRate:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  getUnitPerBox: async (req, res) => {
    try {
      const unitPerBoxs = await FormData.find({}, 'unitPerBox');
      res.json(unitPerBoxs);
    } catch (error) {
      console.error('Error fetching unitPerBox:', error);
      res.status(500).send('Internal Server Error');
    }
  },

   getHsn: async (req, res) => {
    try {
      const hsnData = await FormData.find({}, 'hsn');
      const hsnCodes = hsnData.map((data) => data.hsn);
      res.json(hsnCodes);
    } catch (error) {
      console.error('Error fetching HSN codes:', error);
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


getCompanies: async (req, res) => {
  try {
    const companies = await FormData.distinct('company');
    res.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).send('Internal Server Error');
  }
},

getProductDetails: async (req, res) => {
  const { productName } = req.params;
  console.log('Received request for product:', productName);

  try {
    const productDetails = await FormData.findOne({ product: productName });

    if (!productDetails) {
      console.error(`Product details not found for: ${productName}`);
      return res.status(404).json({ error: "Product details not found" });
    }

    // ... (rest of your code)
  } catch (error) {
    console.error(`Error fetching product details: ${error.message}`);
    res.status(500).json({ error: `Failed to fetch product details: ${error.message}` });
  }
},


};


module.exports = formDataController;
