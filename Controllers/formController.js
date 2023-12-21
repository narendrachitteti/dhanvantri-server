
const Fordata = require('../models/formDataModel');

// CRUD operations
exports.createDocument = async (req, res) => {
  try {
    const document = new Fordata(req.body);
    await document.save();
    res.json(document);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.readAllDocuments = async (req, res) => {
  try {
    const documents = await Fordata.find();
    res.json(documents);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDocument = async (req, res) => {
async function getProducts(req, res) {
  try {
    // Fetch all products from the database
    const products = await FormDatas.find({}, 'product'); // Fetching only the 'product' field

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function updateFormData(req, res) {
  try {
    const document = await Fordata.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(document);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const document = await Fordata.findByIdAndDelete(req.params.id);
    res.json(document);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistinct = async (req, res) => {
    try {
      const distinctCompanies = await Fordata.distinct('Company');
      const distinctHsn = await Fordata.distinct('HmsCode'); 
      
      const distinctValues = {
        companies: distinctCompanies,
        hsn: distinctHsn,
      };
  
      res.json(distinctValues);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
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
  getProducts,
};
