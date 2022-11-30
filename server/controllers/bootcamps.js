const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')


// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public

const getBootCamps = asyncHandler(async (req, res, next) => {
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
    
});


// @desc Get Single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

const getBootCamp = asyncHandler(async (req, res, next) => {
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
});


// @desc Create bootcamps
// @route POST /api/v1/bootcamps
// @access Private

const createBootCamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.create(req.body);


        res.status(201).json({
            success: true,
            data: bootcamp
        })
    
});


// @desc Update bootcamp
// @route PATCH /api/v1/bootcamps/:id
// @access Private

const updateBootCamp = asyncHandler(async (req, res, next) => {
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

    
});


// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps
// @access Private

const deleteBootCamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            );
        }

        res.status(200).json({
            success: true
        })
});

module.exports={getBootCamps, getBootCamp, createBootCamp, updateBootCamp, deleteBootCamp}