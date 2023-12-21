// controllers/stockistController.js
const Stockist = require('../models/stockistModel');

// Function to fetch all stockists
const getAllStockists = async (req, res) => {
  try {
    const stockists = await Stockist.find();
    res.json(stockists);
  } catch (error) {
    console.error("Error fetching stockists:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};

// Function to add a new stockist
const addStockist = async (req, res) => {
  try {
    const newStockist = new Stockist({
      uniqueId: generateUniqueId(),
      name: req.body.name,
      gstNumber: req.body.gstNumber,
      email: req.body.email,
      addDate: new Date(),
      totalBalance: 0, // You can initialize these values as needed
      totalPaid: 0,
      balance: 0,
    });

    await newStockist.save();
    res.json(newStockist);
  } catch (error) {
    console.error("Error adding stockist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to update a stockist by ID
const updateStockist = async (req, res) => {
  const stockistId = req.params.id;
  const updatedStockistData = req.body;

  try {
    const updatedStockist = await Stockist.findByIdAndUpdate(
      stockistId,
      updatedStockistData,
      { new: true }
    );
    res.json(updatedStockist);
  } catch (error) {
    console.error("Error updating stockist:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the stockist" });
  }
};

const generateUniqueId = () => {
  const id = Math.floor(1000000000 + Math.random() * 9000000000);
  return `S-ID${id}`;
};

module.exports = {
  getAllStockists,
  addStockist,
  updateStockist,
};
