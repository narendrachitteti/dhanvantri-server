const { PharmacystockData } = require("../models/pharmacystockModel");

const updatePropertyById = async (req, res) => {
  const id = req.params.id;
  const propertyData = req.body;

  try {
    const updatedProperty = await PharmacystockData.findOneAndUpdate(
      { _id: id },
      propertyData,
      { new: true }
    );
    if (updatedProperty) {
      res
        .status(200)
        .json({ message: "Property updated successfully.", updatedProperty });
    } else {
      res.status(404).json({ error: "Property not found." });
    }
  } catch (error) {
    console.error("Error updating property:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

const getPharmacystockData = async (req, res) => {
  try {
    const pharmacystockdata = await PharmacystockData.find();
    res.status(200).json(pharmacystockdata);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  updatePropertyById,
  getPharmacystockData,
};
