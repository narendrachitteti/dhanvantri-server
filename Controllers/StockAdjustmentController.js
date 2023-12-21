const { StockAdjustment } = require('../models/stockAdjustmentModel');

const getStockAdjustments = async (req, res) => {
  try {
    const { fromDate, toDate } = req.query;
    const query = {};

    if (fromDate && toDate) {
      query.time = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate),
      };
    }

    const stockAdjustments = await StockAdjustment.find(query);
    res.json(stockAdjustments);
  } catch (error) {
    console.error('Failed to fetch stock adjustment data:', error);
    res.status(500).json({ error: 'Failed to fetch stock adjustment data' });
  }
};

module.exports = {
  getStockAdjustments,
};
