const express = require('express');
require('dotenv').config();

//Route Files
const bootcamps = require('./routes/bootcamps')

// Load env vars
// dotenv.config({path: '../config/.env'});

const app = express();

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})