// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require("cors"); // Import the cors package
// // const routes = require('./index'); // Import the combined routes
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv'); // Import dotenv
// const path = require('path');
// dotenv.config({ path: 'Config/.env' }); // Load environment variables from config/.env file


// const app = express();

// app.use(cors()); 

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// app.use(bodyParser.json());

// //Login
// // const LoginRouter = require('./routes/LoginRoutes');


// //pharma
// // const createPurchaseOrderRoutes = require('./routes/createPurchaseOrderRoutes');
// // const inventoryroutes = require('./routes/inventoryRoutes');
// // const invoicestockRoutes = require('./routes/invoicestockRoutes');
// // const pharmaBillingRoutes = require('./routes/pharmacyBillingRoutes');
// // const pharmacystockRoutes = require('./routes/pharmacystockRoutes');
// // const stockAdjustmentRoutes = require('./routes/stockAdjustmentRoutes');
// // const stockinvoiceRoutes = require('./routes/pharmacyBillingRoutes');
// // const stockistRoutes = require("./routes/stockistRoutes");
// // const billRoutes = require('./routes/PatientBillRoutes');
// const DrugmasterRoutes = require('./routes/DrugMasterRoutes');


// app.use(express.json());

// //Login
// // app.use('/api', LoginRouter);

// //pharma
// // app.use('/api', createPurchaseOrderRoutes);
// // app.use('/api', inventoryroutes);
// // app.use('/api', invoicestockRoutes);
// // app.use('/api', pharmaBillingRoutes);
// // app.use('/api', pharmacystockRoutes);
// // app.use('/api', stockAdjustmentRoutes);
// // app.use('/api', stockinvoiceRoutes);
// // app.use("/api", stockistRoutes);
// // app.use('/api', billRoutes);
// app.use('/api', DrugmasterRoutes);


// const PORT = process.env.PORT || 5000 // Use the PORT environment variable
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); // Import the cors package
// const routes = require('./index'); // Import the combined routes
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Import dotenv
const path = require('path');
dotenv.config({ path: 'Config/.env' }); // Load environment variables from config/.env file


const app = express();

app.use(cors()); 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(bodyParser.json());

//Login
const LoginRouter = require('./routes/LoginRoutes');

//pharma
// const createPurchaseOrderRoutes = require('./routes/createPurchaseOrderRoutes');
// const inventoryroutes = require('./routes/inventoryRoutes');
// const invoicestockRoutes = require('./routes/invoicestockRoutes');
// const pharmaBillingRoutes = require('./routes/pharmacyBillingRoutes');
// const pharmacystockRoutes = require('./routes/pharmacystockRoutes');
// const stockAdjustmentRoutes = require('./routes/stockAdjustmentRoutes');
// const stockinvoiceRoutes = require('./routes/pharmacyBillingRoutes');
// const stockistRoutes = require("./routes/stockistRoutes");
// const billRoutes = require('./routes/PatientBillRoutes');
const DrugmasterRoutes = require('./routes/DrugMasterRoutes');
const formDataRoutes = require('./routes/formDataRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const formRoutes = require('./routes/formRoutes')

app.use(express.json());

//Login
app.use('/api', LoginRouter);




//pharma
// app.use('/api', createPurchaseOrderRoutes);
// app.use('/api', inventoryroutes);
// app.use('/api', invoicestockRoutes);
// app.use('/api', pharmaBillingRoutes);
// app.use('/api', pharmacystockRoutes);
// app.use('/api', stockAdjustmentRoutes);
// app.use('/api', stockinvoiceRoutes);
// app.use("/api", stockistRoutes);
// app.use('/api', billRoutes);
app.use('/api', DrugmasterRoutes);
app.use('/', formDataRoutes);
app.use('/api', employeeRoutes);
app.use('/',formRoutes);


const PORT = process.env.PORT || 5000 // Use the PORT environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
