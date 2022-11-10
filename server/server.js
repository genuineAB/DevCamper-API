const express = require('express');
require('dotenv').config();
const morgan = require('morgan');

//Route Files
const bootcamps = require('./routes/bootcamps')

// Load env vars
// dotenv.config({path: '../config/.env'});

const app = express();

//Dev Logging Middleware
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})