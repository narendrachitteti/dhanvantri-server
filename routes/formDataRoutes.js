// formDataRoutes.js

const express = require('express');
const formDataController = require('../Controllers/formDataController');

const router = express.Router();

router.post('/submit-form', formDataController.submitForm);
router.get('/allData', formDataController.getAllData);
router.put('/edit-item/:id', formDataController.editItem);
router.delete('/delete-item/:id', formDataController.deleteItem);
router.get('/distinctCompanies', formDataController.getDistinctCompanies);
router.get('/products', formDataController.getProducts);
router.get('/salesRates', formDataController.getSalesRates);
router.get('/purchaseRates', formDataController.getPurchaseRates);
router.get('/unitPerBox', formDataController.getUnitPerBox);
router.get('/Hsn', formDataController.getHsn);
// Add the new route to fetch company by product
router.get('/getCompanyByProduct/:product', formDataController.getCompanyByProduct);
router.get('/getCompanies', formDataController.getCompanies);
router.get('/api/getproductdetails', formDataController.getProductDetails);


module.exports = router;