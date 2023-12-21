// controllers/PatientBillController.js
const PatientBill = require('../models/PatientBillModel');

const patientBillController = {
  submitPatientBill: async (req, res) => {
    try {
      const {
        patientName,
        mobilenumber,
        date,
        items,
        subtotalWithGST,
        subtotalWithoutGST,
      } = req.body;

      const newPatientBill = new PatientBill({
        patientName,
        mobilenumber,
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

  getAllPatientBills: async (_req, res) => {
    try {
      const patientBills = await PatientBill.find();
      res.json(patientBills);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = patientBillController;
