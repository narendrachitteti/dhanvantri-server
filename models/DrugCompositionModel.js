const mongoose = require('mongoose');

const DrugCompoSchema = new mongoose.Schema({
    DrugCompoId: String,
    testName: String,
});

module.exports = mongoose.model('DrugComposition', DrugCompoSchema);
