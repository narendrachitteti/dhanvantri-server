// controllers/billController.js

const Bill = require('../models/Bills.js');

// Function to generate a unique bill number
// Function to generate a unique bill number
const generateBillNumber = async () => {
  try {
    // Find the last bill and get its billNo
    const lastBill = await Bill.findOne({}, {}, { sort: { 'createdAt': -1 } });

    // If no bill exists, start with 1
    const lastBillNumber = lastBill ? parseInt(lastBill.billNo.replace('BILL', '')) : 0;

    // Increment the last bill number using an atomic update
    const updatedLastBill = await Bill.findOneAndUpdate(
      {},
      { $inc: { billCounter: 1 } },
      { sort: { 'createdAt': -1 }, new: true, upsert: true }
    );

    const billNumber = `BILL${updatedLastBill.billCounter}`;

    return billNumber;
  } catch (error) {
    throw new Error('Error generating bill number');
  }
};


exports.saveBill = async (req, res) => {
  const billData = req.body;

  try {
    
    const billNumber = await generateBillNumber();

    billData.billNo = billNumber;

    const newBill = new Bill(billData);
    
    await newBill.save();
    res.status(201).send('Bill saved successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Function to fetch all bills from the database
exports.getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find(); 
    res.status(200).json(bills); 
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBillById = async (req, res) => {
  const billId = req.params.id; 

  try {
    const bill = await Bill.findById(billId); 

    if (!bill) {
      
      res.status(404).send('Bill not found');
      return;
    }

    res.status(200).json(bill); 
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBillsByPatientId = async (req, res) => {
  const patientId = req.params.patientId; // Assuming you have a route parameter for patientId

  try {
    const bills = await Bill.find({ patientId }); // Use the Mongoose 'find' method to fetch bills by patientId
    res.status(200).json(bills); // Send the retrieved data as JSON response
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// controllers/billController.js

// ... (existing code)

// Function to count the total number of services arrays
exports.getTotalServiceNameCount = async (req, res) => {
  try {
    const pipeline = [
      {
        $unwind: '$services', // Unwind the 'services' array
      },
      {
        $group: {
          _id: null,
          totalServiceNameCount: { $sum: 1 }, // Count the 'name' values
        },
      },
    ];

    const result = await Bill.aggregate(pipeline);

    if (!result || result.length === 0) {
      // Handle the case where there are no documents or 'services' arrays
      res.status(404).send('No data found');
      return;
    }

    // Extract the totalServiceNameCount from the result
    const totalServiceNameCount = result[0].totalServiceNameCount;

    res.status(200).json({ totalServiceNameCount });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.getTotalTotalBalanceAmount = async (req, res) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: null,
          totalTotalBalanceAmount: { $sum: '$totalBalance' }, // Sum the 'totalBalance' field
        },
      },
    ];

    const result = await Bill.aggregate(pipeline);

    if (!result || result.length === 0) {
      // Handle the case where there are no documents
      res.status(404).send('No data found');
      return;
    }

    res.status(200).json(result[0]); // Send the result as JSON response
  } catch (error) {
    res.status(500).send(error.message);
  }
};