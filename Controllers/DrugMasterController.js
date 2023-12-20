const DrugCompo = require('../models/DrugCompositionModel');

// Controller functions for CRUD operations
exports.getAllDrugCompos = async (req, res) => {
    try {
        const DrugCompos = await DrugCompo.find();
        res.json(DrugCompos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching lab services' });
    }
};

exports.createDrugCompo = async (req, res) => {
    const DrugCompoData = req.body;

    try {
        // Validate DrugCompoData here (check for required fields, data types, etc.)

        const newDrugCompo = new DrugCompo(DrugCompoData);
        await newDrugCompo.save();
        res.status(201).json(newDrugCompo);
    } catch (error) {
        console.error('Error adding lab service:', error);
        res.status(400).json({ error: 'Error adding lab service' });
    }
};

exports.updateDrugCompo = async (req, res) => {
    const DrugCompoId = req.params.id;
    const DrugCompoData = req.body;

    try {
        // Validate DrugCompoData here (check for required fields, data types, etc.)

        const updatedDrugCompo = await DrugCompo.findByIdAndUpdate(
            DrugCompoId,
            DrugCompoData,
            { new: true }
        );
        res.json(updatedDrugCompo);
    } catch (error) {
        console.error('Error updating lab service:', error);
        res.status(400).json({ error: 'Error updating lab service' });
    }
};

exports.deleteDrugCompo = async (req, res) => {
    const DrugCompoId = req.params.id;
    
    try {
        await DrugCompo.findByIdAndDelete(DrugCompoId);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Error deleting lab service' });
    }
};