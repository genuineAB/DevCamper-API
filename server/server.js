const express = require('express');
require('dotenv').config();

// Load env vars
// dotenv.config({path: '../config/.env'});

const app = express();

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})