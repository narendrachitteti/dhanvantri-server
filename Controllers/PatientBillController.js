// controllers/PatientBillController.js
const PatientBill = require('../models/PatientBillModel');
const moment = require('moment');

const patientBillController = {
  
  submitPatientBill: async (req, res) => {
    try {
      const {
        patientName,
        mobilenumber,
        doctorName,
        date,
        items,
        subtotalWithGST,
        subtotalWithoutGST,
      } = req.body;

      const newPatientBill = new PatientBill({
        patientName,
        mobilenumber,
        doctorName,
        date,
        items,
        subtotalWithGST,
        subtotalWithoutGST,
      });

      await newPatientBill.save();

      res.status(201).json({ message: 'PatientBill submitted successfully' });
    } catch (error) {
      console.error('Error submitting PatientBill:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },


  getAllItems: async (req, res) => {
    try {
      const allItems = await PatientBill.find({}, 'items');
      res.status(200).json({ items: allItems });
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
 
  getItemsByDate: async (req, res) => {
    try {
      const { date } = req.query;

      let items;

      if (date) {
        // Use an exact match to retrieve items for the selected date
        items = await PatientBill.find({ date }, 'items');
      } else {
        items = await PatientBill.find({}, 'items');
      }

      res.status(200).json({ items });
    } catch (error) {
      console.error('Error fetching items by date:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  getItemsForToday: async (req, res) => {
    try {
      const today = moment().format('YYYY-MM-DD'); // Get today's date in YYYY-MM-DD format

      const items = await PatientBill.find({ date: today }, 'items');

      res.status(200).json({ items });
    } catch (error) {
      console.error('Error fetching items for today:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },



  getAllPatientBills: async (_req, res) => {
    try {
      const patientBills = await PatientBill.find();
      res.json(patientBills);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  },
  getInvoices: async (req, res) => {
    try {
      const invoices = await PatientBill.find();
      res.status(200).json(invoices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch invoices" });
    }
  },
  updatePatient: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        patientName,
        mobilenumber,
        date,
        items,
        // Other fields...
      } = req.body;

      // Assuming you have a PatientBill model
      const updatedPatient = await PatientBill.findByIdAndUpdate(
        id,
        {
          patientName,
          mobilenumber,
          date,
          items,
          // Other fields...
        },
        { new: true } // To get the updated document
      );

      res.status(200).json(updatedPatient);
    } catch (error) {
      console.error('Error updating patient:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  
  
};

module.exports = patientBillController;