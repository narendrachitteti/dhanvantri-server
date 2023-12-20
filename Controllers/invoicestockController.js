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

const getInvoices = async (req, res) => {
  try {
    const invoices = await CombinedInvoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch invoices" });
  }
};

const updateInvoice = async (req, res) => {
  const { invoiceId } = req.params;
  const updatedInvoiceData = req.body;

  try {
    const updatedInvoice = await CombinedInvoice.findByIdAndUpdate(
      invoiceId,
      { $set: updatedInvoiceData },
      { new: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.status(200).json({ message: "Invoice updated successfully." });
  } catch (error) {
    console.error("Error updating invoice:", error);
    res.status(500).json({ error: "Internal server error." });
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
    res.status(500).json({ error: `Failed to fetch medicine details: ${error.message}` });
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
    res.status(500).json({ error: `Failed to fetch batch details: ${error.message}` });
  }
};








const deleteInvoice = async (req, res) => {
  const { invoiceId } = req.params;

  try {
    const deletedInvoice = await CombinedInvoice.findByIdAndDelete(invoiceId);

    if (!deletedInvoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.status(200).json({ message: "Invoice deleted successfully." });
  } catch (error) {
    console.error("Error deleting invoice:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

const getMedicineSuggestions = async (req, res) => {
  const { searchTerm } = req.params;

  try {
    const medicineSuggestions = await CombinedInvoice.aggregate([
      {
        $unwind: "$medicines",
      },
      {
        $match: {
          "medicines.Medicine": { $regex: searchTerm, $options: "i" },
        },
      },
      {
        $group: {
          _id: "$medicines.Medicine",
        },
      },
      {
        $limit: 10,
      },
    ]);

    const suggestions = medicineSuggestions.map((result) => result._id);

    res.status(200).json(suggestions);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: `Failed to fetch medicine suggestions: ${error.message}`});
  }
};

const updateMedicineQuantity = async (req, res) => {
  const { medId } = req.params;
  const { Quantity } = req.body;

  try {
    // Find the medicine by MedId and update its Quantity
    await CombinedInvoice.updateOne(
      { "medicines.MedId": medId },
      { $set: { "medicines.$.Quantity": Quantity } }
    );

    res.status(200).json({ message: "Medicine quantity updated successfully." });
  } catch (error) {
    console.error("Error updating medicine quantity:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// const getMedicineDetails = async (req, res) => {
//   const { medicineName } = req.params;

//   try {
//     const medicineDetails = await CombinedInvoice.aggregate([
//       {
//         $unwind: "$medicines",
//       },
//       {
//         $match: {
//           "medicines.Medicine": medicineName,
//         },
//       },
//       {
//         $project: {
//           _id: 0, // Exclude _id field from the result
//           Medicine: "$medicines.Medicine",
//           Price: "$medicines.price",
//           Quantity: "$medicines.Quantity",
//           Total: "$medicines.Total",
//           Amount: "$medicines.amount",
//           // Add other fields you want to include in the response
//         },
//       },
//     ]);

//     if (medicineDetails.length === 0) {
//       return res.status(404).json({ error: "Medicine details not found" });
//     }

//     res.status(200).json(medicineDetails[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: `Failed to fetch medicine details: ${error.message}` });
//   }
// };

// Add this function to handle updating pharmacy quantity
const updatePharmaQuantity = async (req, res) => {
  const { medicineName } = req.params; // Assuming you pass medicineName as a parameter

  const { Quantity } = req.body; // Assuming the request body contains the updated quantity

  try {
    // Find the medicine by its name and update its quantity
    await CombinedInvoice.updateOne(
      { "medicines.Medicine": medicineName },
      { $set: { "medicines.$.Quantity": Quantity } }
    );

    res.status(200).json({ message: "Pharmacy quantity updated successfully." });
  } catch (error) {
    console.error("Error updating pharmacy quantity:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};





// Function to get invoice numbers
const getInvoiceNumbers = async (req, res) => {
  try {
    // Fetch all invoices from the database
    const invoices = await CombinedInvoice.find({}, 'invoiceNumber');

    const invoiceNumbers = invoices.map(invoice => invoice.invoiceNumber);

    res.status(200).json({ invoiceNumbers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching invoice numbers.' });
  }
};

// Other controller functions...

const getInvoiceDetails = async (req, res) => {
  const { selectedInvoice } = req.params;

  try {
    const invoiceDetails = await CombinedInvoice.findOne({ invoiceNumber: selectedInvoice });

    if (!invoiceDetails) {
      return res.status(404).json({ error: "Invoice details not found" });
    }

    // Extract the fields you want to send to the frontend
    const tableFields = invoiceDetails.medicines.map((medicine) => ({
      Medicine: medicine.Medicine,
      Quantity: medicine.Quantity,
      Price: medicine.price,
      Manufacturer: medicine.Manufacturer,
      Batch: medicine.Batch,
      BatchExpiry: medicine.BatchExpiry,
      GST: medicine.Gst,
      // Add more fields if needed
    }));

    res.status(200).json({ tableFields });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to fetch invoice details: ${error.message}` });
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
    res.status(500).json({ error: `Failed to fetch medicine details: ${error.message}` });
  }
};


module.exports = {
  addInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoice,
  getMedicineSuggestions,
  updateMedicineQuantity,
  getMedicineDetails,
  updatePharmaQuantity,
  getMedicineOnly,
  getInvoiceNumbers,
  getInvoiceDetails,
  getMedicineDetailss,
  getBatchNumbers,
  getBatchDetails,
   // Export the getInvoiceNumbers function
};
