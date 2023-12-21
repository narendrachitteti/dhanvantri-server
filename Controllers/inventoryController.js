const Property = require('../models/inventoryModel');

const createInventoryProperty = async (req, res) => {
  const propertyData = req.body;

  try {
    const newProperty = new Property(propertyData);
    await newProperty.save();
    res.status(200).json({ message: 'Property created successfully.' });
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

const getAllInventoryProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

const getExpiryInventoryProperties = async (req, res) => {
  const currentDate = new Date();

  try {
    const expiryProperties = await Property.find({ expirydate: { $lt: currentDate } });
    res.status(200).json(expiryProperties);
  } catch (error) {
    console.error('Error fetching expiry properties:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

const getLowInventoryProperties = async (req, res) => {
  try {
    const lowProperties = await Property.find({ remainingunits: { $lt: 10 } });
    res.status(200).json(lowProperties);
  } catch (error) {
    console.error('Error fetching low properties:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

const getZeroInventoryProperties = async (req, res) => {
  try {
    const zeroProperties = await Property.find({ remainingunits: 0 });
    res.status(200).json(zeroProperties);
  } catch (error) {
    console.error('Error fetching zero properties:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

module.exports = {
  createInventoryProperty,
  getAllInventoryProperties,
  getExpiryInventoryProperties,
  getLowInventoryProperties,
  getZeroInventoryProperties,
};
