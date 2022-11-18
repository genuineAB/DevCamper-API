const Bootcamp = require('../models/Bootcamp');


// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public

const getBootCamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
}


// @desc Get Single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

const getBootCamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show Single Bootcamp'});
}


// @desc Create bootcamps
// @route POST /api/v1/bootcamps
// @access Private

const createBootCamp =async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
    
}


// @desc Update bootcamp
// @route PATCH /api/v1/bootcamps/:id
// @access Private

const updateBootCamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Update Bootcamp'});;
}


// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps
// @access Private

const deleteBootCamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Delete Bootcamp'});
}

module.exports={getBootCamps, getBootCamp, createBootCamp, updateBootCamp, deleteBootCamp}