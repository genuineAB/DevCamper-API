const mongoose = require('mongoose')
const {Schema} = mongoose;
const slugify = require('slugify');
const geocoder = require('../utils/geocoder');

const BootcampSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please Add a Name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    slug: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'Please Add Description'],
        trim: true,
        maxlength: [500, 'Name cannot be more than 500 characters']
    },
    website: {
        type: String,
        match: [/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/, 'Please Use a valid URL with HTTP or HTTPS']
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone Number Cannot be longer than 20 Characters'],
    },
    email: {
        type: String,
        match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please Use a valid Email Address']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        //GeoJSON point
        type: {
            type: String,
            enum: ['Point'],
          },
          coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating cannot be less than 1'],
        max: [10, 'Rating cannot be greater than 10']
    },
    averageCost: {
        type: Number
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

// Create Bootcamp slug from the name
BootcampSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next();
});

// Geocode & Create Location Field
// BootcampSchema.pre('save', async function(next){
//     const loc = await geocoder.geocode(this.address);
//     this.location = {
//         type: 'Point',
//         coordinates: [loc[0].longitude, loc[0].latitude],
//         formattedAddress: loc[0].formattedAddress,
//         street: loc[0].streetName,
//         city: loc[0].city,
//         state: loc[0].stateCode,
//         zip: loc[0].zipcode,
//         country: loc[0].countryCode
//     }
//     this.address = undefined;
//     next();
// })

module.exports = mongoose.model('Bootcamp', BootcampSchema);