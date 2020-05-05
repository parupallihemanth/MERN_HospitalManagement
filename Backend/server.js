// Importing modules
const express = require('express');
const dotenv = require('dotenv');

// Importing files
const connectDB = require('./config/db')


const app = express();

dotenv.config({path:'./config/.env'});
connectDB();








const PORT = process.env.PORT | 4001
app.listen( PORT, () => console.log(`Server is running on port ${PORT}`))