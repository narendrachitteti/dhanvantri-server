// routes/StockistRoutes.js
const express = require('express');
const stockistController = require('../Controllers/StockistController');

const router = express.Router();

router.post('/submit-stockist', stockistController.submitStockist);
router.get('/get-stockists', stockistController.getStockists);
router.put('/update-stockist/:id', stockistController.updateStockist);


module.exports = router;
