const mongoose = require('mongoose');

const DrugCompoSchema = new mongoose.Schema({
    DrugCompoId: Number,
    testName: String,
});

module.exports = mongoose.model('DrugComposition', DrugCompoSchema);
