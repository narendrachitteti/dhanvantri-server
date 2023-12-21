const express = require("express");
const router = express.Router();
const stockistController = require("../controllers/stockistController");

router.get("/stockists", stockistController.getAllStockists);
router.post("/stockists", stockistController.addStockist);
router.put("/stockists/:id", stockistController.updateStockist);

module.exports = router;
