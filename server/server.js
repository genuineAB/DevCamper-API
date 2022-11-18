const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

//Route Files
const bootcamps = require('./routes/bootcamps')

// Load env vars
// dotenv.config({path: '../config/.env'});

// Connect to DataBase
connectDB();

const app = express();

//Dev Logging Middleware
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;


const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
});

//Handle Unhandled Promise Rejection
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`.red);

    //Close Server and Exit Process
    server.close(() => process.exit(1))
})