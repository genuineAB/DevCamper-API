const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');


// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public

const getBootCamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        if(!bootcamps){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            );
        }

        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    
}


// @desc Get Single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

const getBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            );
        }
        
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
        
    }
}


// @desc Create bootcamps
// @route POST /api/v1/bootcamps
// @access Private

const createBootCamp =async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.params.id);

       

        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
    
}


// @desc Update bootcamp
// @route PATCH /api/v1/bootcamps/:id
// @access Private

const updateBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body);

        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            );
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        })

    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
}


// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps
// @access Private

const deleteBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            );
        }

        res.status(200).json({
            success: true
        })
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
}

module.exports={getBootCamps, getBootCamp, createBootCamp, updateBootCamp, deleteBootCamp}