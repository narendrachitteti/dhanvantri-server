const PharmacyBilling = require('../models/pharmacyBilling');

const postPharmacyBilling = async (req, res) => {
  try {
    const {
      billId,
      patientId,
      patientDetails,
      pharmacyTable,
      discount,
      gst,
      netAmount,
      roundOff,
      billAmount,
      paidAmount,
      paymentMode
      // Add other fields as needed
    } = req.body;

    const pharmacyBilling = new PharmacyBilling({
      billId,
      patientId,
      patientDetails,
      pharmacyTable,
      discount,
      gst,
      netAmount, 
      roundOff,
      billAmount,
      paidAmount,
      paymentMode,
      // Set other fields as needed
    });

    // console.log(pharmacyBilling)
    await pharmacyBilling.save();

    res.status(201).json({ message: 'Pharmacy billing data saved successfully' });
  } catch (error) {
    console.error('Error saving pharmacy billing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to fetch pharmacy billing data
const getPharmacyBilling = async (req, res) => {
  try {
    // Fetch pharmacy billing data from the database
    const pharmacyBillingData = await PharmacyBilling.find();

    res.status(200).json(pharmacyBillingData);
  } catch (error) {
    console.error('Error fetching pharmacy billing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFastMovingMedicines = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();

    // Calculate the start and end of the current day
    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    // Query to find bills with billdate on the current date
    const billsOnCurrentDate = await PharmacyBilling.find({
      'patientDetails.billdate': { $gte: startOfDay, $lte: endOfDay },
    });

    // Initialize an object to store medicine quantities
    const medicineQuantities = {};

    // Iterate through each bill
    billsOnCurrentDate.forEach((bill) => {
      // Iterate through the pharmacyTable for each bill
      bill.pharmacyTable.forEach((medicine) => {
        // Check if the medicine quantity is greater than 100
        if (medicine.quantity > 100) {
          // If the medicine is already in the object, add the quantity
          if (medicineQuantities[medicine.medicineName]) {
            medicineQuantities[medicine.medicineName] += medicine.quantity;
          } else {
            // Otherwise, initialize the quantity
            medicineQuantities[medicine.medicineName] = medicine.quantity;
          }
        }
      });
    });

    // Format the data as an array of objects
    const fastMovingMedicines = Object.keys(medicineQuantities).map((medicineName) => ({
      medicineName,
      billedQuantity: medicineQuantities[medicineName],
    }));

    // Return the list of fast-moving medicines
    res.status(200).json(fastMovingMedicines);
  } catch (error) {
    console.error('Error fetching fast-moving medicines data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFilteredPharmacyBilling = async (req, res) => {
  try {
    const fromDate = req.query.fromDate;
    const toDate = req.query.toDate;

    // Filter pharmacy billing data based on date range
    let filter = {};
    if (fromDate && toDate) {
      filter['patientDetails.billdate'] = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate),
      };
    }

    const filteredData = await PharmacyBilling.find(filter);

    // Calculate the desired metrics
    const billed = filteredData.length;
    const collection = filteredData.reduce((acc, item) => acc + item.paidAmount, 0);
    const cash = filteredData.filter(item => item.paymentMode === 'Cash').reduce((acc, item) => acc + item.paidAmount, 0);
    const card = filteredData.filter(item => item.paymentMode === 'Card').reduce((acc, item) => acc + item.paidAmount, 0);
    
    // Calculate the UPI amount by summing the "UPI" payments
    const upi = filteredData.filter(item => item.paymentMode === 'UPI').reduce((acc, item) => acc + item.paidAmount, 0);

    const result = {
      Billed: billed,
      Collection: collection,
      Cash: cash,
      Card: card,
      UPI: upi,
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching filtered pharmacy billing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





module.exports = { postPharmacyBilling, getPharmacyBilling, getFastMovingMedicines, getFilteredPharmacyBilling };
