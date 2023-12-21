const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  medicinename: String,
  remainingunits: String,
  expirydate: Date,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
