// const Bill = require('../models/PatientBill');

// const saveBillData = async (req, res) => {
//   try {
//     const {
//       patientName,
//       invoiceNo,
//       selectedDoctor,
//       date,
//       pharmaSign,
//       items,
//       subtotalWithGST,
//       subtotalWithoutGST,
//     } = req.body;

//     const newBill = new Bill({
//       patientName,
//       invoiceNo,
//       doctorName: selectedDoctor,
//       date,
//       pharmaSign,
//       items,
//       subtotalWithGST,
//       subtotalWithoutGST,
//     });

//     await newBill.save();

//     res.json({ success: true, message: 'Bill data saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// };

// module.exports = { saveBillData };

const Bill = require('../models/PatientBill');

const saveBillData = async (req, res) => {
  try {
    const {
      patientName,
      invoiceNo,
      selectedDoctor,
      date,
      pharmaSign,
      items,
      subtotalWithGST,
      subtotalWithoutGST,
    } = req.body;

    const newBill = new Bill({
      patientName,
      invoiceNo,
      doctorName: selectedDoctor,
      date,
      pharmaSign,
      items,
      subtotalWithGST,
      subtotalWithoutGST,
    });

    await newBill.save();

    res.json({ success: true, message: 'Bill data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { saveBillData };
