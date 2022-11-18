const Bootcamp = require('../models/Bootcamp');


// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public

const getBootCamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,
            data: bootcamps
        })
    } catch (error) {
        res.status(500).json({
            success: false
        })
    }
    
}


// @desc Get Single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

const getBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp){
            return res.status(400).json({
                success: false
            });
        }
        
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(500).json({
            success: false
        })
    }
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