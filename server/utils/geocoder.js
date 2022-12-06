const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',

    formatter: null
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder;