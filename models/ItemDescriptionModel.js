const mongoose = require('mongoose');
const formDataSchema = new mongoose.Schema({
    product: String,
    company: String,
    taxCode: String,
    category: String,
    group: String,
    schedule: String,
    drugComposition: String,
    purchaseRate: Number,
    salesRate: Number,
    unit: Number,
    box: Number,
    unitPerBox: Number,
    lotQty: Number,
    lotrate: Number,
    hsn: String,
    mrp: Number,
    reltr: Number,
    salesman: Number,
    narration: String,
    distrrate: Number,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;