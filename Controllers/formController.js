
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
  };
  