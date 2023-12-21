// const Medicine = require("../models/listmedicineModel");

// const getAllMedicines = async (req, res) => {
//   try {
//     const medicines = await Medicine.find();
//     res.status(200).json(medicines);
//   } catch (error) {
//     console.error("Error fetching medicines:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// };

// const updateMedicine = async (req, res) => {
//   const { MedId } = req.params;
//   const updatedMedicineData = req.body;

//   try {
//     const existingMedicine = await Medicine.findById(MedId);

//     if (!existingMedicine) {
//       return res.status(404).json({ error: "Medicine not found" });
//     }

//     // Update the medicine's properties
//     existingMedicine.MedId = updatedMedicineData.MedId;
//     existingMedicine.Medicine = updatedMedicineData.Medicine;
//     existingMedicine.Manufacturer = updatedMedicineData.Manufacturer;
//     existingMedicine.Category = updatedMedicineData.Category;
//     existingMedicine.Quantity = updatedMedicineData.Quantity;

//     // Check if stock is below 50 and set Quantityalert property accordingly
//     if (existingMedicine.Quantity < 50) {
//       existingMedicine.Quantityalert = "true";
//       // You can implement notification to the supplier here
//     } else {
//       existingMedicine.Quantityalert = "false";
//     }

//     await existingMedicine.save();

//     res.status(200).json({ message: "Medicine updated successfully." });
//   } catch (error) {
//     console.error("Error updating medicine:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// };

// module.exports = {
//   getAllMedicines,
//   updateMedicine,
// };
