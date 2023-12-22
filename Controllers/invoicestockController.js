//invoicestockController

const CombinedInvoice = require("../models/invoicestockModel");

const addInvoice = async (req, res) => {
  try {
    const newInvoice = new CombinedInvoice(req.body);
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add invoice" });
  }
};

const getMedicine = async (req, res) => {
  try {
    // Logic to fetch all medicines from the database with Medicine, strips, and freestrips
    const medicines = await CombinedInvoice.find({}, 'medicines.Medicine medicines.strips medicines.Freestrips');

    const medicineData = medicines.flatMap(invoice =>
      invoice.medicines.map(medicine => ({
        Medicine: medicine.Medicine,
        strips: medicine.strips,
        Freestrips: medicine.Freestrips,
      }))
    );

    res.status(200).json({ medicines: medicineData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching medicines.' });
  }
};


const getMedicineOnly = async (req, res) => {
  try {
    // Logic to fetch all medicines from the database
    const medicines = await CombinedInvoice.find({}, 'medicines.Medicine');
    const medicineNames = medicines.flatMap(invoice => invoice.medicines.map(medicine => medicine.Medicine));
    res.status(200).json({ medicines: medicineNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching medicines.' });
  }
};

const getMedicineDetails = async (req, res) => {
  const { medicineName } = req.params;

  try {
    const medicineDetails = await CombinedInvoice.findOne({ "medicines.Medicine": medicineName });
    
    if (!medicineDetails) {
      return res.status(404).json({ error: "Medicine details not found" });
    }

    const selectedMedicine = medicineDetails.medicines.find(medicine => medicine.Medicine === medicineName);
    const { HSNcode, price, Manufacturer, Gst } = selectedMedicine;

    res.status(200).json({ HSNcode, price, Manufacturer, Gst });
  } catch (error) {
    console.error(error);
    res.status(500).json(`{ error: Failed to fetch medicine details: ${error.message} }`);
  }
};

const getBatchNumbers = async (req, res) => {
  try {
    const invoices = await CombinedInvoice.find({}, 'medicines.Batch');
    const batchNumbers = invoices.flatMap(invoice => invoice.medicines.map(medicine => medicine.Batch));
    const uniqueBatchNumbers = [...new Set(batchNumbers)]; // Get unique batch numbers

    res.status(200).json({ batchNumbers: uniqueBatchNumbers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching batch numbers.' });
  }
};

const getBatchDetails = async (req, res) => {
  const { batchNumber } = req.params;

  try {
    const medicineDetails = await CombinedInvoice.findOne({ "medicines.Batch": batchNumber });
    
    if (!medicineDetails) {
      return res.status(404).json({ error: "Medicine details not found" });
    }

    const selectedMedicine = medicineDetails.medicines.find(medicine => medicine.Batch === batchNumber);
    if (!selectedMedicine) {
      return res.status(404).json({ error: "Medicine details not found for the specified batch" });
    }

    const { BatchExpiry } = selectedMedicine;

    res.status(200).json({ BatchExpiry });
  } catch (error) {
    console.error(error);
    res.status(500).json(`{ error: Failed to fetch batch details: ${error.message} }`);
  }
};


const getMedicineDetailss = async (req, res) => {
  const { medicineName } = req.params;

  try {
    const medicineDetails = await CombinedInvoice.findOne({ "medicines.Medicine": medicineName });
    
    if (!medicineDetails) {
      return res.status(404).json({ error: "Medicine details not found" });
    }

    const selectedMedicine = medicineDetails.medicines.find(medicine => medicine.Medicine === medicineName);
    const { price, Manufacturer, Batch, BatchExpiry, Gst } = selectedMedicine;

    res.status(200).json({ price, Manufacturer, Batch, BatchExpiry, Gst });
  } catch (error) {
    console.error(error);
    res.status(500).json(`{ error: Failed to fetch medicine details: ${error.message} }`);
  }
};

module.exports = {
  addInvoice,
  getMedicineDetails,
  getMedicineOnly,
  getMedicineDetailss,
  getBatchNumbers,
  getBatchDetails,
  getMedicine,
};